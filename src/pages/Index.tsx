import { Header } from "@/components/Header";
import { CategoryCircle } from "@/components/CategoryCircle";
import { ProductCard } from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Category images
import categoryFace from "@/assets/category-face.jpg";
import categoryLips from "@/assets/category-lips.jpg";
import categoryEyes from "@/assets/category-eyes.jpg";
import categorySets from "@/assets/category-sets.jpg";

// Eyes products
import eyesBrowPencil from "@/assets/eyes-brow-pencil.jpg";
import eyesBrowGel from "@/assets/eyes-brow-gel.jpg";
import eyesShimmerStick from "@/assets/eyes-shimmer-stick.jpg";
import eyesMascara from "@/assets/eyes-mascara.jpg";
import eyesBrowDuo from "@/assets/eyes-brow-duo.jpg";

// Face products
import faceFoundation from "@/assets/face-foundation.jpg";
import facePrimer from "@/assets/face-primer.jpg";
import faceConcealer from "@/assets/face-concealer.jpg";
import faceSettingSpray from "@/assets/face-setting-spray.jpg";
import faceBrush from "@/assets/face-brush.jpg";

// Lips products
import lipsLipstick from "@/assets/lips-lipstick.jpg";
import lipsBlush from "@/assets/lips-blush.jpg";
import lipsLipPencil from "@/assets/lips-lip-pencil.jpg";
import lipsLipGloss from "@/assets/lips-lip-gloss.jpg";
import lipsLipBalm from "@/assets/lips-lip-balm.jpg";

// Sets products
import setsPerfectBase from "@/assets/sets-perfect-base.jpg";
import setsBrowDefining from "@/assets/sets-brow-defining.jpg";
import setsMinis from "@/assets/sets-minis.jpg";
import setsLipKit from "@/assets/sets-lip-kit.jpg";
import setsStarterKit from "@/assets/sets-starter-kit.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
    // EYES CATEGORY
    {
      id: 1,
      category: "eyes",
      image: eyesBrowPencil,
      title: "The Precision Brow Pencil",
      price: 24.0,
      badge: "NEW" as const,
      color: "#3b2f2f",
      colorName: "Dark Brown"
    },
    {
      id: 2,
      category: "eyes",
      image: eyesBrowGel,
      title: "The Precision Brow Gel",
      price: 24.0,
      badge: "NEW" as const
    },
    {
      id: 3,
      category: "eyes",
      image: eyesShimmerStick,
      title: "Eye Perfecting Shimmer Stick",
      price: 35.0,
      badge: "BESTSELLER" as const,
      color: "#d4af37",
      colorName: "Golden Shimmer"
    },
    {
      id: 4,
      category: "eyes",
      image: eyesMascara,
      title: "Gilded Lashes Mascara",
      price: 28.0
    },
    {
      id: 5,
      category: "eyes",
      image: eyesMascara,
      title: "Mini Mascara",
      price: 16.0
    },

    // FACE CATEGORY
    {
      id: 6,
      category: "face",
      image: faceFoundation,
      title: "Changing Foundation",
      price: 39.0,
      badge: "BESTSELLER" as const,
      color: "#f5d1b2",
      colorName: "Beige"
    },
    {
      id: 7,
      category: "face",
      image: facePrimer,
      title: "Velvet Skin Primer",
      price: 32.0
    },
    {
      id: 8,
      category: "face",
      image: faceConcealer,
      title: "Universal Concealer",
      price: 30.0,
      color: "#f1c27d",
      colorName: "Light Beige"
    },
    {
      id: 9,
      category: "face",
      image: faceSettingSpray,
      title: "Final Touch Setting Spray",
      price: 30.0
    },
    {
      id: 10,
      category: "face",
      image: faceBrush,
      title: "2-in-1 Build & Conceal Brush",
      price: 25.0
    },
    {
      id: 11,
      category: "face",
      image: faceFoundation,
      title: "Mini Changing Foundation",
      price: 22.0,
      color: "#f5d1b2",
      colorName: "Beige"
    },

    // LIPS CATEGORY
    {
      id: 12,
      category: "lipstick",
      image: lipsLipstick,
      title: "Velvet Dream Lipstick",
      price: 30.0,
      color: "#A6191F",
      colorName: "Rose Pink"
    },
    {
      id: 13,
      category: "lipstick",
      image: lipsBlush,
      title: "Vibrant Cheeks Liquid Blush",
      price: 30.0,
      color: "#BB5B42",
      colorName: "Coral Blush"
    },
    {
      id: 14,
      category: "lipstick",
      image: lipsLipPencil,
      title: "Signature Lip Pencil",
      price: 24.0,
      color: "#792F24",
      colorName: "Ruby Red"
    },
    {
      id: 15,
      category: "lipstick",
      image: lipsLipGloss,
      title: "Plush Lip Gloss",
      price: 26.0,
      color: "#C94F44",
      colorName: "Pink Gloss"
    },
    {
      id: 16,
      category: "lipstick",
      image: lipsLipBalm,
      title: "Nourishing Lip Balm",
      price: 18.0
    },

    // SETS CATEGORY
    {
      id: 17,
      category: "sets",
      image: eyesBrowDuo,
      title: "The Brow Defining Duo",
      price: 41.0,
      originalPrice: 48.0,
      badge: "SALE" as const
    },
    {
      id: 18,
      category: "sets",
      image: setsPerfectBase,
      title: "The Perfect Base Set",
      price: 85.0,
      originalPrice: 101.0,
      badge: "SALE" as const
    },
    {
      id: 19,
      category: "sets",
      image: setsMinis,
      title: "Minis Travel Set",
      price: 48.0,
      originalPrice: 54.0
    },
    {
      id: 20,
      category: "sets",
      image: setsLipKit,
      title: "Complete Lip Kit",
      price: 68.0,
      originalPrice: 80.0,
      badge: "SALE" as const,
      color: "#ff4d6d",
      colorName: "Lip Kit Pink"
    },
    {
      id: 21,
      category: "sets",
      image: setsStarterKit,
      title: "Everyday Essentials Starter Kit",
      price: 95.0,
      originalPrice: 115.0
    }
  ];



  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Title */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
            ALL PRODUCTS
          </h1>
        </section>

        {/* Category Circles */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div onClick={() => setSelectedCategory("face")}>
              <CategoryCircle
                image={categoryFace}
                title="Face"
                href="#face"
              />
            </div>
            <div onClick={() => setSelectedCategory("lipstick")}>
              <CategoryCircle
                image={categoryLips}
                title="Lips & Cheeks"
                href="#lips"
              />
            </div>
            <div onClick={() => setSelectedCategory("eyes")}>
              <CategoryCircle
                image={categoryEyes}
                title="Eyes"
                href="#eyes"
              />
            </div>
            <div onClick={() => setSelectedCategory("sets")}>
              <CategoryCircle
                image={categorySets}
                title="Bundles & Sets"
                href="#sets"
              />
            </div>
          </div>
          {selectedCategory !== "all" && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-sm font-medium text-accent hover:underline"
              >
                View All Products
              </button>
            </div>
          )}
        </section>

        {/* Sort & Filter */}
        <section className="container mx-auto px-4 pb-8">
          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="bestselling">Best Selling</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-serif mb-4">LUXA</h3>
              <p className="text-sm text-muted-foreground">
                Premium cosmetics for the modern beauty enthusiast.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Face</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Lips & Cheeks</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Eyes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 LUXA Cosmetics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
