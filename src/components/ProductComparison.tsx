
import React from "react";
import { Product, ReviewSummary } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScaleIcon, Check, X, Minus, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductComparisonProps {
  products: Product[];
  summaries: Record<string, ReviewSummary>;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ products, summaries }) => {
  if (products.length < 2) return null;

  // Limit to 3 products max for comparison
  const productsToCompare = products.slice(0, 3);
  
  // Create a set of all unique tags across products
  const allTags = new Set<string>();
  productsToCompare.forEach(product => {
    product.tags.forEach(tag => allTags.add(tag));
  });

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ScaleIcon className="h-5 w-5 mr-2 text-brand-purple" />
            <CardTitle className="text-lg">Product Comparison</CardTitle>
          </div>
          <Button variant="ghost" size="sm">
            <Maximize2 className="h-4 w-4 mr-1" />
            <span>Expand</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium text-muted-foreground w-1/4">Features</th>
                {productsToCompare.map(product => (
                  <th key={product.id} className="text-left py-2 px-2 font-medium">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 text-muted-foreground">Price</td>
                {productsToCompare.map(product => (
                  <td key={`${product.id}-price`} className="py-2 px-2">
                    ${product.price.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-2 text-muted-foreground">Rating</td>
                {productsToCompare.map(product => (
                  <td key={`${product.id}-rating`} className="py-2 px-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-1">{product.rating.toFixed(1)}</span>
                      <Badge variant="outline" className="text-xs">
                        {summaries[product.id]?.totalReviews || 0} reviews
                      </Badge>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-2 text-muted-foreground">Category</td>
                {productsToCompare.map(product => (
                  <td key={`${product.id}-category`} className="py-2 px-2">
                    {product.category}
                  </td>
                ))}
              </tr>
              
              {/* Feature comparison based on tags */}
              {Array.from(allTags).map(tag => (
                <tr key={tag} className="border-b">
                  <td className="py-2 text-muted-foreground capitalize">
                    {tag.replace(/-/g, ' ')}
                  </td>
                  {productsToCompare.map(product => (
                    <td key={`${product.id}-${tag}`} className="py-2 px-2">
                      {product.tags.includes(tag) ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              
              <tr className="border-b">
                <td className="py-2 text-muted-foreground">Pros</td>
                {productsToCompare.map(product => (
                  <td key={`${product.id}-pros`} className="py-2 px-2 text-sm">
                    {summaries[product.id]?.topPositives.slice(0, 2).map((positive, i) => (
                      <div key={i} className="flex items-start mb-1">
                        <span className="text-green-600 mr-1">+</span>
                        <span>{positive}</span>
                      </div>
                    )) || <Minus className="h-4 w-4 text-muted-foreground" />}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 text-muted-foreground">Cons</td>
                {productsToCompare.map(product => (
                  <td key={`${product.id}-cons`} className="py-2 px-2 text-sm">
                    {summaries[product.id]?.topNegatives.slice(0, 2).map((negative, i) => (
                      <div key={i} className="flex items-start mb-1">
                        <span className="text-red-500 mr-1">-</span>
                        <span>{negative}</span>
                      </div>
                    )) || <Minus className="h-4 w-4 text-muted-foreground" />}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductComparison;
