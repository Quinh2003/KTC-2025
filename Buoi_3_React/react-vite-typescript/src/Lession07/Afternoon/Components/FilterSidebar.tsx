import { useEffect, useState } from 'react'

interface Category {
  id: number;
  name: string;
}

type Props = {
  selected: number | null; 
  onSelect: (id: number | null) => void;
};

export default function FilterSidebar({ selected, onSelect }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <aside className="w-64 p-4 border-r">
      <h2 className="font-bold mb-2">Bộ lọc</h2>

      <div className="mb-2">
        <label className="cursor-pointer">
          <input type="radio" name="category" checked={selected === null} onChange={() => onSelect(null)} className="mr-2" />
          Tất cả
        </label>
      </div>

      {categories.map((cat) => (
        <div key={cat.id} className="mb-1">
          <label className="cursor-pointer">
            <input type="radio" name="category" value={cat.id} checked={selected === cat.id} onChange={() => onSelect(cat.id)} className="mr-2"/>
            {cat.name}
          </label>
        </div>
      ))}
    </aside>
  );
}
