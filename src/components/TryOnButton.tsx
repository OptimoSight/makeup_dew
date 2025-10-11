interface TryOnButtonProps {
  category: string;
  productName: string;
  color: string;
  colorName: string;
  className?: string;
}

const TryOnButton = ({ category, productName, color, colorName, className }: TryOnButtonProps) => (
  <button
    className={`vto-try-now-btn ${className || ""}`}
    data-category={category}
    data-color={color}
    data-color-name={colorName}
    data-product-name={productName}
    data-api-key="OptimosightGuest999"
    data-mode="both"
  >
    Try now
  </button>
);

export default TryOnButton;
