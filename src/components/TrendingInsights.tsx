
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Tag } from "lucide-react";

interface TrendingCategory {
  category: string;
  topRated: string;
  topTags: string[];
  avgRating: number;
}

interface TrendingInsightsProps {
  trendingCategories: TrendingCategory[];
}

const TrendingInsights: React.FC<TrendingInsightsProps> = ({ trendingCategories }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-brand-purple" />
          <CardTitle className="text-lg">Trending Insights</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingCategories.map((category, index) => (
          <div
            key={category.category}
            className={`${
              index < trendingCategories.length - 1 ? "border-b pb-3 mb-3" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="bg-secondary font-semibold">
                {category.category}
              </Badge>
              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{category.avgRating.toFixed(1)}</span>
              </div>
            </div>
            <h4 className="font-medium text-sm mb-2">
              Top Rated: {category.topRated}
            </h4>
            <div className="flex items-center">
              <Tag className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <div className="flex flex-wrap gap-1">
                {category.topTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingInsights;
