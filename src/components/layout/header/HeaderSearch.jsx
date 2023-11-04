import { SearchIcon } from "lucide-react";

export default function headerSearch() {
  return (
    <div className="flex items-end ">
      <div className="flex flex-col w-auto min-w-[440px] ">
        <div className="flex items-center rounded-md justify-between  border-2 border-gray-500 placeholder-gray-500 outline-none">
          <div className="px-4">
            <SearchIcon size={24} />
          </div>
          <input
            className="w-full px-4 py-2 text-sm "
            placeholder="Ürün, kategori veya marka ara"
          />
          <button className="px-4 py-2 text-sm text-white border-2 border-gray-500 bg-gray-500 ">
            ARA
          </button>
        </div>
      </div>
    </div>
  );
}
