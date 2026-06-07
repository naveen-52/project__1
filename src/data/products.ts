import imgRice from "@/assets/5cb9aa7be8d95727d14e238c4d624ea8b57dbd13.png";
import imgBatter from "@/assets/41a9c49a773e547d7b02068335fcd81110e4843a.png";
import imgCoffee from "@/assets/5e624f7ee8030a936defcd0b52bf0c53d4f81139.png";
import imgOil from "@/assets/3c7f9a3bde0e1df7d3e0ceef16568a488ed9154e.png"; // Tender Coconut as oil proxy
import imgSoap from "@/assets/c973ad63a2ba7459a4635ef7a2b41911cf03958a.png";
import imgChips from "@/assets/ecd5447192ea260070be78a4db079dda1adeca5a.png"; // Nendran Banana
import imgLeaves from "@/assets/651e4c41d803b330f0774b9faabef6ce17fe77af.png"; // Alphonso Mangoes as fresh produce proxy
import imgDal from "@/assets/5cb9aa7be8d95727d14e238c4d624ea8b57dbd13.png"; // Rice reuse as grains/pulses proxy
import imgChillies from "@/assets/1293d5eaa6bce055f5f45ed4e713a4249a80a512.png";
import imgVadaMix from "@/assets/41a9c49a773e547d7b02068335fcd81110e4843a.png"; // Batter reuse
import imgPapads from "@/assets/2a46a7ca78f4ea9ee30be502fde9c2f660a895b5.png";
import imgSticks from "@/assets/c973ad63a2ba7459a4635ef7a2b41911cf03958a.png"; // Soap reuse

import imgMango from "@/assets/651e4c41d803b330f0774b9faabef6ce17fe77af.png";
import imgCoconut from "@/assets/3c7f9a3bde0e1df7d3e0ceef16568a488ed9154e.png";
import imgParotta from "@/assets/061f363b1857a5af8fb78cfc76b5ddc921372387.png";
import imgBanana from "@/assets/ecd5447192ea260070be78a4db079dda1adeca5a.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  stock: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Sona Masoori Rice",
    price: 650,
    originalPrice: 720,
    category: "Rice & Grains",
    image: imgRice,
    description: "Sourced from the fertile fields of Karnataka and Andhra Pradesh, our aged Sona Masoori rice is known for its delicate aroma, lightweight texture, and exceptional taste. Perfect for daily meals, biryani, or pongal.",
    rating: 4.9,
    stock: 45,
    badge: "5kg Pack"
  },
  {
    id: "p2",
    name: "Idli Batter",
    price: 85,
    originalPrice: 95,
    category: "Fresh Foods",
    image: imgBatter,
    description: "Traditional stone-ground idli and dosa batter made with premium quality rice and black gram. Fermented naturally under controlled conditions to give you soft, fluffy idlis and crispy dosas.",
    rating: 4.8,
    stock: 120,
    badge: "Freshly Ground"
  },
  {
    id: "p3",
    name: "Filter Coffee Powder",
    price: 240,
    originalPrice: 280,
    category: "Beverages",
    image: imgCoffee,
    description: "Authentic South Indian filter coffee blend of premium Arabica and Robusta beans roasted to perfection, blended with 20% chicory for that strong aroma, rich flavor, and perfect froth.",
    rating: 4.9,
    stock: 60,
    badge: "Premium Blend"
  },
  {
    id: "p4",
    name: "Cold Pressed Coconut Oil",
    price: 320,
    originalPrice: 350,
    category: "Oils",
    image: imgOil,
    description: "100% pure cold-pressed coconut oil extracted from sun-dried sulfur-free copra. Retains natural antioxidants, sweet aroma, and rich nutrients, ideal for cooking, hair care, and skin application.",
    rating: 4.7,
    stock: 85,
    badge: "Pure"
  },
  {
    id: "p5",
    name: "Mysore Sandal Soap",
    price: 150,
    originalPrice: 175,
    category: "Personal Care",
    image: imgSoap,
    description: "The only soap made with pure natural sandalwood oil. Infused with skin care conditioners and natural oils to keep your skin glowing, moisturized, and pleasantly fragranced.",
    rating: 4.8,
    stock: 40,
    badge: "Pack of 3"
  },
  {
    id: "p6",
    name: "Banana Chips",
    price: 120,
    originalPrice: 140,
    category: "Snacks",
    image: imgChips,
    description: "Crispy and thin banana chips prepared using fresh raw Nendran bananas and fried in pure coconut oil. Seasoned lightly with salt to preserve the authentic, traditional flavor.",
    rating: 4.6,
    stock: 35,
    badge: "Kerala Special"
  },
  {
    id: "p7",
    name: "Fresh Curry Leaves",
    price: 20,
    category: "Produce",
    image: imgLeaves,
    description: "Freshly harvested organic curry leaves with an intense, warm aroma. A vital ingredient in tempering, curries, chutneys, and authentic South Indian delicacies.",
    rating: 4.9,
    stock: 15,
    badge: "Organic"
  },
  {
    id: "p8",
    name: "Toor Dal",
    price: 180,
    originalPrice: 200,
    category: "Pulses",
    image: imgDal,
    description: "Premium unpolished Toor Dal sourced from cooperative farms. High in protein, dietary fiber, and essential minerals, perfect for preparing daily sambar or rasam.",
    rating: 4.7,
    stock: 50,
    badge: "1kg"
  },
  {
    id: "p9",
    name: "Guntur Red Chillies",
    price: 90,
    originalPrice: 110,
    category: "Spices",
    image: imgChillies,
    description: "Authentic spicy red chillies sourced directly from Guntur, Andhra Pradesh. Known for their fiery heat, vibrant red color, and strong aroma, perfect for pickling and spices.",
    rating: 4.8,
    stock: 28,
    badge: "Extra Hot"
  },
  {
    id: "p10",
    name: "Medhuvada Mix",
    price: 110,
    category: "Instant Mix",
    image: imgVadaMix,
    description: "Instant mix for preparing crispy and soft Medhu Vadas. Made with premium black gram flour, curry leaves, ginger, and black pepper, ready to fry in minutes.",
    rating: 4.4,
    stock: 22,
    badge: "New"
  },
  {
    id: "p11",
    name: "Papads",
    price: 65,
    originalPrice: 75,
    category: "Snacks",
    image: imgPapads,
    description: "Handmade urad dal papads seasoned with black pepper and cumin. Sun-dried to perfection, crispy, light, and a perfect accompaniment to rice and sambar.",
    rating: 4.8,
    stock: 30,
    badge: "Handmade"
  },
  {
    id: "p12",
    name: "Incense Sticks",
    price: 45,
    category: "Pooja Needs",
    image: imgSticks,
    description: "Premium agarbatti hand-rolled with pure sandalwood powder and essential oils. Creates a calm, soothing, and divine atmosphere for prayers or meditation.",
    rating: 4.5,
    stock: 18,
    badge: "Sandalwood"
  },
  // Extra Admin / Inventory items for verification
  {
    id: "p13",
    name: "Alphonso Mangoes",
    price: 150,
    originalPrice: 180,
    category: "Produce",
    image: imgMango,
    description: "King of Mangoes, sweet, pulpy Alphonso mangoes sourced directly from Devgad, Maharashtra.",
    rating: 4.9,
    stock: 124,
    badge: "Premium"
  },
  {
    id: "p14",
    name: "Tender Coconut",
    price: 50,
    category: "Produce",
    image: imgCoconut,
    description: "Fresh tender coconut full of refreshing and sweet natural coconut water, a healthy thirst quencher.",
    rating: 4.8,
    stock: 80,
    badge: "Fresh"
  },
  {
    id: "p15",
    name: "Malabar Parotta",
    price: 40,
    category: "Bakery",
    image: imgParotta,
    description: "Layered, flaky flatbread made with refined flour. Best enjoyed warm with vegetable kurma or dal.",
    rating: 4.7,
    stock: 50,
    badge: "Popular"
  },
  {
    id: "p16",
    name: "Nendran Banana",
    price: 80,
    category: "Produce",
    image: imgBanana,
    description: "Sweet and firm Nendran bananas from Kerala, perfect for preparing chips, steamed desserts, or direct consumption.",
    rating: 4.7,
    stock: 60,
    badge: "Local"
  }
];
