
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  rating: number;
  tags: string[];
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  sentiment: Sentiment;
  date: string;
  likes: number;
  tags: string[];
  media?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
}

export interface Sentiment {
  overall: number; // -1 to 1 where 1 is very positive
  emotions: {
    happy: number;
    sad: number;
    angry: number;
    surprised: number;
    neutral: number;
  };
}

export interface ReviewSummary {
  avgRating: number;
  totalReviews: number;
  sentimentScore: number;
  topPositives: string[];
  topNegatives: string[];
  mostMentioned: string[];
}

export type EmotionType = 'happy' | 'sad' | 'angry' | 'surprised' | 'neutral';
