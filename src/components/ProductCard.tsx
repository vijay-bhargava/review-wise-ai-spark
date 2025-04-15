
import React from "react";
import { Product, ReviewSummary } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  summary?: ReviewSummary;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, summary }) => {
  return (
    <Card className="w-full hover-scale overflow-hidden">
      <CardHeader className="p-0 rounded-t-lg overflow-hidden">
        <div className="relative h-40 bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-brand-purple text-white">
              {product.category}
            </Badge>
          </div>
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-black/60 text-white border-none">
              ${product.price.toFixed(2)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.tags.length - 3} more
            </Badge>
          )}
        </div>
        
        {summary && (
          <div className="text-xs text-muted-foreground mt-3">
            <div className="font-medium text-sm text-foreground mb-1">What people are saying:</div>
            <ul className="list-disc list-inside space-y-1">
              {summary.topPositives.slice(0, 2).map((positive, i) => (
                <li key={`pos-${i}`} className="text-green-600">{positive}</li>
              ))}
              {summary.topNegatives.slice(0, 1).map((negative, i) => (
                <li key={`neg-${i}`} className="text-red-600">{negative}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Compare
        </Button>
        <Button variant="default" size="sm" className="bg-gradient-to-r from-brand-purple to-primary">
          See Reviews <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
