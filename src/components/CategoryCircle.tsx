import { ArrowRight } from "lucide-react";

interface CategoryCircleProps {
  image: string;
  title: string;
  href: string;
}

export const CategoryCircle = ({ image, title, href }: CategoryCircleProps) => {
  return (
    <a 
      href={href}
      className="flex flex-col items-center gap-4 group cursor-pointer"
    >
      <div className="relative w-48 h-48 rounded-full overflow-hidden bg-card">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide group-hover:text-accent transition-colors">
        <span>{title}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
};
