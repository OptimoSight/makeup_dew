// ProductCard.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TryOnButton from "@/components/TryOnButton";

export interface ProductCardProps {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: "NEW" | "BESTSELLER" | "SALE";
  color?: string; // Single color for backward compatibility
  colorName?: string; // Single color name for backward compatibility
  colors?: string[]; // Array of color hex codes
  colorNames?: string[]; // Array of color names
}

export const ProductCard = ({
  title,
  category,
  image,
  price,
  originalPrice,
  badge,
  color,
  colorName,
  colors,
  colorNames,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Use arrays if provided, otherwise fall back to single color
  const productColors = colors || (color ? [color] : []);
  const productColorNames = colorNames || (colorName ? [colorName] : []);

  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative bg-card rounded-sm overflow-hidden mb-4 aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge on top-left */}
        {badge && (
          <Badge
            className={`absolute top-2 left-2 text-xs px-2 py-1 ${
              badge === "NEW"
                ? "bg-[hsl(var(--badge-new))]"
                : badge === "SALE"
                ? "bg-[hsl(var(--badge-sale))]"
                : "bg-primary"
            } text-white`}
          >
            {badge}
          </Badge>
        )}

        {/* Try-On button on top-right */}
        {productColors.length > 0 && (
          <div className="absolute top-2 right-2">
            <TryOnButton
              category={category}
              productName={title}
              colors={productColors}
              colorNames={productColorNames}
              className="text-xs px-2 py-1 bg-red-500 text-white rounded-sm hover:bg-red-600 transition"
            />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium uppercase tracking-wide">{title}</h3>

        {/* Color Swatches */}
        {productColors.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {productColors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={productColorNames[index] || `Color ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">${price.toFixed(2)} USD</span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)} USD
              </span>
              <span className="text-xs font-medium text-[hsl(var(--badge-sale))]">
                Save {discount}%
              </span>
            </>
          )}
        </div>

        {/* Add to Bag */}
        <Button variant="bag" className="w-full">
          Add to Bag
        </Button>
      </div>
    </div>
  );
};