import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

type Props = {
  products: Product[];
};

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-60 object-cover"
          />
          <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
          <p className="text-red-600 font-bold">
            {product.price.toLocaleString()}đ
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
