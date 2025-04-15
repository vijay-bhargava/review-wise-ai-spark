
import { Product, Review, ReviewSummary } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "NovaSound Pro Earbuds",
    description: "Wireless earbuds with active noise cancellation and premium sound quality.",
    category: "Audio",
    price: 149.99,
    imageUrl: "/placeholder.svg",
    rating: 4.6,
    tags: ["wireless", "noise-cancellation", "waterproof", "premium", "long-battery"]
  },
  {
    id: "p2",
    name: "SwiftBook Air Laptop",
    description: "Ultra-thin laptop with exceptional performance and battery life.",
    category: "Computers",
    price: 1299.99,
    imageUrl: "/placeholder.svg",
    rating: 4.8,
    tags: ["lightweight", "fast-performance", "long-battery", "premium", "high-resolution"]
  },
  {
    id: "p3",
    name: "PixelMax 4K Camera",
    description: "Professional-grade camera with 4K video and advanced image stabilization.",
    category: "Photography",
    price: 849.99,
    imageUrl: "/placeholder.svg",
    rating: 4.5,
    tags: ["4k-video", "stabilization", "wifi-enabled", "premium", "lightweight"]
  },
  {
    id: "p4",
    name: "EcoChef Smart Blender",
    description: "Smart blender with programmable settings and powerful motor.",
    category: "Kitchen",
    price: 129.99,
    imageUrl: "/placeholder.svg",
    rating: 4.3,
    tags: ["smart-features", "powerful", "easy-clean", "budget-friendly", "multi-function"]
  },
  {
    id: "p5",
    name: "FitTrack Prime Watch",
    description: "Fitness smartwatch with heart rate monitoring and GPS tracking.",
    category: "Wearables",
    price: 199.99,
    imageUrl: "/placeholder.svg",
    rating: 4.7,
    tags: ["water-resistant", "heart-monitor", "gps", "long-battery", "sleep-tracking"]
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    userId: "u1",
    userName: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?u=1",
    rating: 5,
    title: "Best earbuds I've ever owned!",
    comment: "The noise cancellation is incredible, and the sound quality is amazing. Battery life exceeds expectations, lasting well over the advertised 8 hours. Very comfortable for long listening sessions too!",
    sentiment: {
      overall: 0.9,
      emotions: {
        happy: 0.8,
        sad: 0,
        angry: 0,
        surprised: 0.2,
        neutral: 0
      }
    },
    date: "2025-04-01",
    likes: 42,
    tags: ["noise-cancellation", "long-battery", "comfortable"]
  },
  {
    id: "r2",
    productId: "p1",
    userId: "u2",
    userName: "Sarah Miller",
    userAvatar: "https://i.pravatar.cc/150?u=2",
    rating: 4,
    title: "Great sound, could be more comfortable",
    comment: "The sound quality is exceptional and noise cancellation works well. My only complaint is that they start to hurt my ears after about 2 hours of use. Battery life is good though!",
    sentiment: {
      overall: 0.5,
      emotions: {
        happy: 0.5,
        sad: 0.2,
        angry: 0,
        surprised: 0,
        neutral: 0.3
      }
    },
    date: "2025-03-28",
    likes: 15,
    tags: ["sound-quality", "noise-cancellation", "comfort-issues"]
  },
  {
    id: "r3",
    productId: "p1",
    userId: "u3",
    userName: "David Chen",
    userAvatar: "https://i.pravatar.cc/150?u=3",
    rating: 3,
    title: "Good but overpriced",
    comment: "They're decent earbuds, but I don't think they're worth the high price tag. The noise cancellation is good but not great. Battery life is as advertised, which is nice. I think there are better options for the price.",
    sentiment: {
      overall: 0,
      emotions: {
        happy: 0.2,
        sad: 0.3,
        angry: 0.1,
        surprised: 0,
        neutral: 0.4
      }
    },
    date: "2025-03-15",
    likes: 8,
    tags: ["overpriced", "adequate-noise-cancellation", "good-battery"]
  },
  {
    id: "r4",
    productId: "p2",
    userId: "u4",
    userName: "Emily Rodriguez",
    userAvatar: "https://i.pravatar.cc/150?u=4",
    rating: 5,
    title: "Perfect for work and travel!",
    comment: "This laptop is incredibly lightweight yet powerful. I can work all day without charging, and the screen is gorgeous. It handles everything I throw at it with ease, from coding to video editing. Absolutely worth every penny!",
    sentiment: {
      overall: 0.95,
      emotions: {
        happy: 0.9,
        sad: 0,
        angry: 0,
        surprised: 0.1,
        neutral: 0
      }
    },
    date: "2025-04-05",
    likes: 56,
    tags: ["lightweight", "powerful", "long-battery", "high-resolution"]
  },
  {
    id: "r5",
    productId: "p2",
    userId: "u5",
    userName: "Michael Washington",
    userAvatar: "https://i.pravatar.cc/150?u=5",
    rating: 4,
    title: "Great machine, but runs hot",
    comment: "The performance is exceptional for such a thin laptop, and battery life is amazing. My only issue is that it gets quite hot during intensive tasks. Otherwise, it's nearly perfect - beautiful screen, great keyboard, and very portable.",
    sentiment: {
      overall: 0.6,
      emotions: {
        happy: 0.7,
        sad: 0.1,
        angry: 0,
        surprised: 0,
        neutral: 0.2
      }
    },
    date: "2025-03-22",
    likes: 23,
    tags: ["performance", "heat-issues", "portability", "battery-life"]
  },
  {
    id: "r6",
    productId: "p3",
    userId: "u6",
    userName: "Jessica Kim",
    userAvatar: "https://i.pravatar.cc/150?u=6",
    rating: 5,
    title: "A game-changer for my photography business",
    comment: "The image quality is stunning, and the stabilization makes handheld videos look professional. I love the intuitive controls and the WiFi transfer is seamless. This camera has significantly improved my work and client satisfaction.",
    sentiment: {
      overall: 0.9,
      emotions: {
        happy: 0.85,
        sad: 0,
        angry: 0,
        surprised: 0.15,
        neutral: 0
      }
    },
    date: "2025-04-02",
    likes: 38,
    tags: ["image-quality", "stabilization", "professional", "wifi-transfer"]
  },
  {
    id: "r7",
    productId: "p4",
    userId: "u7",
    userName: "Robert Thompson",
    userAvatar: "https://i.pravatar.cc/150?u=7",
    rating: 2,
    title: "Disappointing performance and durability",
    comment: "I was excited about this blender but it's been nothing but problems. It struggles with frozen fruits, the app constantly disconnects, and after just three months, the motor is making weird noises. Save your money and look elsewhere.",
    sentiment: {
      overall: -0.7,
      emotions: {
        happy: 0,
        sad: 0.4,
        angry: 0.5,
        surprised: 0.1,
        neutral: 0
      }
    },
    date: "2025-03-10",
    likes: 17,
    tags: ["poor-performance", "app-issues", "durability-concerns"]
  },
  {
    id: "r8",
    productId: "p5",
    userId: "u8",
    userName: "Amanda Garcia",
    userAvatar: "https://i.pravatar.cc/150?u=8",
    rating: 5,
    title: "Transformed my fitness routine!",
    comment: "This watch has everything I need to track my workouts and overall health. The sleep tracking is surprisingly accurate, and the battery lasts nearly a week. The app provides detailed insights that have helped me improve my training efficiency.",
    sentiment: {
      overall: 0.85,
      emotions: {
        happy: 0.8,
        sad: 0,
        angry: 0,
        surprised: 0.1,
        neutral: 0.1
      }
    },
    date: "2025-04-08",
    likes: 29,
    tags: ["fitness-tracking", "sleep-analysis", "battery-life", "insightful-app"]
  }
];

export const reviewSummaries: Record<string, ReviewSummary> = {
  "p1": {
    avgRating: 4.0,
    totalReviews: 3,
    sentimentScore: 0.47,
    topPositives: ["Exceptional sound quality", "Effective noise cancellation", "Good battery life"],
    topNegatives: ["Comfort issues for some users", "Price considered high by some", "Occasional connectivity issues"],
    mostMentioned: ["sound quality", "noise cancellation", "comfort", "battery life", "price"]
  },
  "p2": {
    avgRating: 4.5,
    totalReviews: 2,
    sentimentScore: 0.78,
    topPositives: ["Lightweight and portable", "Powerful performance", "Excellent battery life", "High-quality display"],
    topNegatives: ["Heat management during intensive tasks", "Limited ports"],
    mostMentioned: ["performance", "portability", "battery life", "display quality", "heat issues"]
  },
  "p3": {
    avgRating: 5.0,
    totalReviews: 1,
    sentimentScore: 0.9,
    topPositives: ["Professional image quality", "Effective stabilization", "Intuitive controls", "Seamless connectivity"],
    topNegatives: [],
    mostMentioned: ["image quality", "stabilization", "usability", "connectivity"]
  },
  "p4": {
    avgRating: 2.0,
    totalReviews: 1,
    sentimentScore: -0.7,
    topPositives: ["Attractive design"],
    topNegatives: ["Struggles with frozen ingredients", "App connectivity issues", "Durability concerns", "Motor problems"],
    mostMentioned: ["performance issues", "app connectivity", "durability", "motor problems"]
  },
  "p5": {
    avgRating: 5.0,
    totalReviews: 1,
    sentimentScore: 0.85,
    topPositives: ["Comprehensive fitness tracking", "Accurate sleep analysis", "Excellent battery life", "Insightful companion app"],
    topNegatives: [],
    mostMentioned: ["fitness tracking", "sleep analysis", "battery life", "app features"]
  }
};

export const trendingCategories = [
  {
    category: "Audio",
    topRated: "NovaSound Pro Earbuds",
    topTags: ["noise-cancellation", "wireless", "premium-sound"],
    avgRating: 4.6
  },
  {
    category: "Computers",
    topRated: "SwiftBook Air Laptop",
    topTags: ["lightweight", "performance", "battery-life"],
    avgRating: 4.8
  },
  {
    category: "Wearables",
    topRated: "FitTrack Prime Watch",
    topTags: ["fitness-tracking", "battery-life", "sleep-analysis"],
    avgRating: 4.7
  }
];
