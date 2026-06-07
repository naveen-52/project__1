import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { Product, products as initialProducts } from "@/data/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: "Order Placed" | "Owner Reviewing" | "Order Confirmed" | "Packing" | "Out For Delivery" | "Delivered" | "Rejected";
  estimatedTime?: string;
  deliveryPartner?: {
    name: string;
    rating: number;
    vehicle: string;
  };
}

export interface Address {
  id: string;
  label: string; // e.g. Home (Default), Work
  address: string;
}

interface CartContextType {
  // Routing
  currentPath: string;
  navigateTo: (path: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  
  // Products
  productList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: Product) => void;

  // Orders
  activeOrder: Order | null;
  orderHistory: Order[];
  checkout: () => void;
  confirmOrder: (id: string) => void;
  rejectOrder: (id: string) => void;
  advanceOrderStatus: (id: string) => void;
  setOrderStatus: (id: string, status: Order["status"]) => void;

  // User details
  userName: string;
  loyaltyPoints: number;
  savedAddresses: Address[];
  addAddress: (address: Omit<Address, "id">) => void;

  // UI state overlays
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  isVerifyOpen: boolean;
  setVerifyOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isTrackingOpen: boolean;
  setTrackingOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Routing
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  
  // UI Overlays
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isVerifyOpen, setVerifyOpen] = useState(false);
  const [isTrackingOpen, setTrackingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Database
  const [productList, setProductList] = useState<Product[]>(initialProducts);

  // Orders
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  // User
  const [userName, setUserName] = useState("Alex Morgan");
  const [loyaltyPoints, setLoyaltyPoints] = useState(2480);
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([
    { id: "a1", label: "Home (Default)", address: "789 Blossom Rd, Apt 4B, Metro City" },
    { id: "a2", label: "Office", address: "101 tech Boulevard, Suite 500, Metro City" }
  ]);

  // Route syncing
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // LocalStorage cart loading
  useEffect(() => {
    const savedCart = localStorage.getItem("freshmart_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }

    // Mock load active order / history if cached
    const savedActive = localStorage.getItem("freshmart_active_order");
    const savedHistory = localStorage.getItem("freshmart_order_history");
    if (savedActive) setActiveOrder(JSON.parse(savedActive));
    if (savedHistory) setOrderHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem("freshmart_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: Omit<CartItem, "quantity">, quantityToAdd = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        toast.success(`Updated ${newItem.name} quantity in cart!`);
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      toast.success(`${newItem.name} added to cart!`);
      return [...prev, { ...newItem, quantity: quantityToAdd }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        toast.info(`Removed ${item.name} from cart.`);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Products Database controls
  const addProduct = (product: Product) => {
    setProductList((prev) => [product, ...prev]);
    toast.success(`Successfully added product: ${product.name}`);
  };

  const removeProduct = (id: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
    toast.error(`Removed product from inventory.`);
  };

  const updateProduct = (updated: Product) => {
    setProductList((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    toast.success(`Updated product: ${updated.name}`);
  };

  // Checkout process
  const checkout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty! Please add products.");
      return;
    }

    const orderId = `FM-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder: Order = {
      id: orderId,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      items: [...cart],
      total: cartTotal,
      status: "Order Placed",
      estimatedTime: "30-45 mins",
      deliveryPartner: {
        name: "Marcus Thompson",
        rating: 4.9,
        vehicle: "Scooter (Electric)",
      },
    };

    setActiveOrder(newOrder);
    setOrderHistory((prev) => [newOrder, ...prev]);
    localStorage.setItem("freshmart_active_order", JSON.stringify(newOrder));
    localStorage.setItem("freshmart_order_history", JSON.stringify([newOrder, ...orderHistory]));

    // Update loyalty points
    setLoyaltyPoints((prev) => prev + Math.floor(cartTotal * 10));

    clearCart();
    setCartOpen(false);
    setTrackingOpen(true);

    toast.success(`🎉 Order placed! Order ID: ${orderId}. View tracker.`);
  };

  // Admin orders manager
  const confirmOrder = (id: string) => {
    setOrderStatus(id, "Order Confirmed");
    toast.success(`Order ${id} is confirmed!`);
  };

  const rejectOrder = (id: string) => {
    setOrderStatus(id, "Rejected");
    toast.error(`Order ${id} has been rejected.`);
  };

  const advanceOrderStatus = (id: string) => {
    const statusSequence: Order["status"][] = [
      "Order Placed",
      "Owner Reviewing",
      "Order Confirmed",
      "Packing",
      "Out For Delivery",
      "Delivered"
    ];

    if (activeOrder && activeOrder.id === id) {
      const currentIndex = statusSequence.indexOf(activeOrder.status);
      if (currentIndex !== -1 && currentIndex < statusSequence.length - 1) {
        const nextStatus = statusSequence[currentIndex + 1];
        setOrderStatus(id, nextStatus);
        toast.info(`Order ${id} updated to: ${nextStatus}`);
      }
    } else {
      // Find in history
      const order = orderHistory.find((o) => o.id === id);
      if (order) {
        const currentIndex = statusSequence.indexOf(order.status);
        if (currentIndex !== -1 && currentIndex < statusSequence.length - 1) {
          const nextStatus = statusSequence[currentIndex + 1];
          setOrderStatus(id, nextStatus);
          toast.info(`Order ${id} updated to: ${nextStatus}`);
        }
      }
    }
  };

  const setOrderStatus = (id: string, status: Order["status"]) => {
    const updateOrderList = (list: Order[]) =>
      list.map((o) => (o.id === id ? { ...o, status } : o));

    if (activeOrder && activeOrder.id === id) {
      const updated = { ...activeOrder, status };
      setActiveOrder(updated);
      localStorage.setItem("freshmart_active_order", JSON.stringify(updated));
    }

    setOrderHistory((prev) => {
      const updated = updateOrderList(prev);
      localStorage.setItem("freshmart_order_history", JSON.stringify(updated));
      return updated;
    });
  };

  // Addresses
  const addAddress = (newAddr: Omit<Address, "id">) => {
    setSavedAddresses((prev) => [
      ...prev,
      { id: `addr-${Math.random()}`, ...newAddr }
    ]);
    toast.success("Saved address successfully.");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        currentPath,
        navigateTo,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        productList,
        addProduct,
        removeProduct,
        updateProduct,
        activeOrder,
        orderHistory,
        checkout,
        confirmOrder,
        rejectOrder,
        advanceOrderStatus,
        setOrderStatus,
        userName,
        loyaltyPoints,
        savedAddresses,
        addAddress,
        isCartOpen,
        setCartOpen,
        isSearchOpen,
        setSearchOpen,
        isVerifyOpen,
        setVerifyOpen,
        selectedProduct,
        setSelectedProduct,
        isTrackingOpen,
        setTrackingOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
