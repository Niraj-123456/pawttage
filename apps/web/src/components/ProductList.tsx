import React from "react";
import Link from "next/link";
import ProductCard from "./common/ProductCard";
import { Product } from "../../types/product";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid place-items-center grid-cols-1 gap-x-1 gap-y-10 my-10 sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
      {products.map((product: Product) => (
        <Link href={`/product-detail/${product?.id}`} key={product?.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
