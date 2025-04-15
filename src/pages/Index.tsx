
import React, { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FilterIcon, Grid3X3, LayoutGrid, List } from "lucide-react";
import ReviewFeed from "@/components/ReviewFeed";
import ReviewSummary from "@/components/ReviewSummary";
import TrendingInsights from "@/components/TrendingInsights";
import ProductCard from "@/components/ProductCard";
import ProductComparison from "@/components/ProductComparison";
import ReviewForm from "@/components/ReviewForm";
import { products, reviews, reviewSummaries, trendingCategories } from "@/data/mockData";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-6 md:py-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-transparent">
            ReviewWise
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover insights from real user experiences. Our AI-powered platform
            enhances your decision-making with sentiment analysis, smart comparisons,
            and trending insights.
          </p>
        </div>
        
        <Tabs defaultValue="discover" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <TabsList className="h-9">
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
              <TabsTrigger value="review">Write Review</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <FilterIcon className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`h-9 rounded-none ${
                    viewMode === "grid" ? "bg-secondary text-secondary-foreground" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className={`h-9 rounded-none ${
                    viewMode === "list" ? "bg-secondary text-secondary-foreground" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <TabsContent value="discover" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className={viewMode === "grid" ? "block" : "hidden"}>
                  <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products.slice(0, 4).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        summary={reviewSummaries[product.id]}
                      />
                    ))}
                  </div>
                </div>
                
                <ReviewFeed 
                  reviews={reviews} 
                  title={viewMode === "list" ? "Latest Reviews" : "Recent Reviews"}
                />
              </div>
              
              <div className="space-y-6">
                <ReviewSummary summary={reviewSummaries["p1"]} />
                <TrendingInsights trendingCategories={trendingCategories} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="compare" className="mt-0">
            <div className="space-y-6">
              <ProductComparison
                products={products.slice(0, 3)}
                summaries={reviewSummaries}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    summary={reviewSummaries[product.id]}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="review" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ReviewForm />
              </div>
              
              <div className="space-y-6">
                <TrendingInsights trendingCategories={trendingCategories} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-muted py-6 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="bg-gradient-to-r from-brand-purple to-primary text-white px-2 py-1 rounded font-bold text-lg mr-2">
                RW
              </span>
              <span className="font-bold text-xl bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-transparent">
                ReviewWise
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 ReviewWise. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
