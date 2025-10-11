import { Search, ShoppingBag, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-[hsl(var(--promo-bg))] text-[hsl(var(--promo-text))] py-2 px-4 text-center text-sm font-medium relative">
        <p>SPECIAL OFFER: 20% OFF WITH CODE BEAUTY20</p>
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Header */}
      <header className="border-b border-border bg-background">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-accent transition-colors">SHOP ALL</a>
              <a href="#" className="hover:text-accent transition-colors">FACE</a>
              <a href="#" className="hover:text-accent transition-colors">LIPS & CHEEKS</a>
              <a href="#" className="hover:text-accent transition-colors">EYES</a>
              <a href="#" className="hover:text-accent transition-colors">BUNDLES & SETS</a>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center">
              <h1 className="text-2xl font-serif tracking-wider">LUXA</h1>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm hover:text-accent transition-colors">
                ABOUT US
              </button>
              <button className="hidden md:block text-sm hover:text-accent transition-colors">
                LOGIN
              </button>
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </nav>

        {/* Trust Badges */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center gap-8 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>100% MONEY BACK</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>CRUELTY-FREE</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>+400,000 HAPPY CUSTOMERS</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
