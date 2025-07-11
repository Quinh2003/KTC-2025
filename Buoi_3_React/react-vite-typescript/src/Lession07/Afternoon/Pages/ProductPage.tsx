import { useEffect, useState } from 'react'
import FilterSidebar from "../Components/FilterSidebar";
import ProductGrid from "../Components/ProductGrid";
import Pagination from "../Components/Pagination";

export default function ProductPage() {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 4;
  const offset = (currentPage - 1) * limit;

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId === null) {
        // Lấy toàn bộ sản phẩm
        const res = await fetch(
          "https://api.escuelajs.co/api/v1/products?limit=100"
        );
        const data = await res.json();
        setProducts(data);
      } else {
        // Lấy sản phẩm theo category với phân trang
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=${offset}&limit=${limit}`
        );
        const data = await res.json();
        setProducts(data);
      }
    };

    fetchData();
  }, [categoryId, currentPage]);

  return (
    <div className="flex">
      <FilterSidebar
        selected={categoryId}
        onSelect={(id) => {
          setCurrentPage(1);
          setCategoryId(id);
        }}
      />

      <div className="flex-1 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Product</h2>
        <ProductGrid products={products} />
        <Pagination current={currentPage} total={3} onChange={setCurrentPage} />
      </div>
    </div>
  );
}
