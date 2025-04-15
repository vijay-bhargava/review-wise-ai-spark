
import React from "react";
import { Search, BellDot, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white px-2 py-1 rounded font-bold text-lg">RW</span>
            <span className="font-bold text-xl hidden sm:inline-block bg-gradient-to-r from-brand-navy to-brand-navy-light bg-clip-text text-transparent">
              ReviewWise
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search products, reviews, or categories..." 
              className="w-full pl-9 bg-muted border-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <BellDot className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-primary rounded-full w-2 h-2"></span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="default" className="hidden md:inline-flex bg-gradient-to-r from-brand-navy to-brand-navy-light hover:from-brand-navy-dark hover:to-brand-navy-light hover:opacity-90">
            Write Review
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <img src="https://i.pravatar.cc/150?u=user" alt="User" className="rounded-full w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

