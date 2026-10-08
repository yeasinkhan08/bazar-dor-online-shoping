import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <div className="border-y border-green-100 bg-white py-1">
      <div className="mx-auto overflow-hidden">
        <MarqueeText direction="right" duration={10}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="mx-5 inline-flex items-center gap-2 text-sm hover:underline"
            >
              {/* Category */}
              <span className="text-gray-500">{product.categoryNameBn}</span>

              {/* Icon */}
              <span>{product.categoryIcon}</span>

              {/* Product name */}
              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>

              {/* Today's price */}
              <span className="font-semibold text-green-600">
                ৳{product.today}
              </span>

              {/* Yesterday */}
              <span className="text-gray-400">গতকাল ৳{product.yesterday}</span>

              {/* Price change */}
              <span
                className={
                  product.change.dir === "up"
                    ? "font-medium text-red-500"
                    : "font-medium text-green-500"
                }
              >
                {product.change.dir === "up" ? "↑" : "↓"} {product.change.pct}%
              </span>

              {/* Separator */}
              <span className="mx-3 text-gray-300">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
