import { motion } from "framer-motion";
import clsx from "clsx";

type Product = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon?: string; // image src
};

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "material-card flex flex-col p-6 rounded-2xl bg-card/60",
        "focus:outline-none focus:ring-2 focus:ring-primary/40",
      )}
      aria-labelledby={`product-${product.id}-title`}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
          {product.icon ? (
            <img
              src={product.icon}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 bg-primary/20 rounded" />
          )}
        </div>
        <div>
          <h3
            id={`product-${product.id}-title`}
            className="text-lg font-semibold"
          >
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {product.tagline}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground flex-1">
        {product.description}
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        {product.benefits.slice(0, 4).map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className="w-2 h-2 mt-2 rounded-full bg-primary/80"
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-background text-sm font-medium transition-shadow hover:shadow-lg"
          aria-label={`Learn more about ${product.title}`}
        >
          Learn more
        </a>
      </div>
    </motion.article>
  );
};

export default ProductCard;
