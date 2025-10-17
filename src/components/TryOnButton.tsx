// TryOnButton.tsx
interface TryOnButtonProps {
  category: string;
  productName: string;
  color?: string; // For backward compatibility
  colorName?: string; // For backward compatibility
  colors?: string[]; // Array of color hex codes
  colorNames?: string[]; // Array of color names
  className?: string;
}

const TryOnButton = ({ 
  category, 
  productName, 
  color, 
  colorName, 
  colors, 
  colorNames, 
  className 
}: TryOnButtonProps) => {
  // Prepare colors and colorNames arrays
  const finalColors = colors || (color ? [color] : ['#000000']);
  const finalColorNames = colorNames || (colorName ? [colorName] : ['Default']);
  
  // Convert arrays to comma-separated strings for data attributes
  const colorsString = finalColors.join(',');
  const colorNamesString = finalColorNames.join(',');

  return (
    <button
      className={`vto-try-now-btn ${className || ""}`}
      data-category={category}
      data-color={finalColors[0]} // First color as primary
      data-color-name={finalColorNames[0]} // First color name as primary
      data-colors={colorsString} // All colors as comma-separated string
      data-color-names={colorNamesString} // All color names as comma-separated string
      data-product-name={productName}
      data-api-key="OptimosightGuest999"
      data-mode="both"
    >
      Try now
    </button>
  );
};

export default TryOnButton;