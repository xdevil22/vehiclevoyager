import React, {useEffect} from "react";

interface Props {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent) => void;
}

const BlogSearchDropdown: React.FC<Props> = ({
  searchOpen,
  setSearchOpen,
  searchInput,
  setSearchInput,
  handleSearch,
}) => {
  // 🔹 Close when pressing ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchInput("");
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setSearchOpen, setSearchInput]);

  return (
    <div className="relative">
      {/* 🔍 Toggle Button */}
      <button
        onClick={() => {
          if (searchOpen) {
            setSearchInput("");
            setSearchOpen(false);
          } else {
            setSearchOpen(true);
          }
        }}
        className="relative z-50 w-10 h-10 flex items-center justify-center transition-all">
        {searchOpen ? (
          <i className="ri-close-line text-2xl text-gray-700 hover:text-black transition-all"></i>
        ) : (
          <i className="ri-search-line text-2xl text-gray-700 hover:text-black transition-all"></i>
        )}
      </button>

      {/* 🔽 Search Dropdown */}
      <div
        className={`absolute right-0 top-full mt-3 z-10 w-64 bg-white shadow-md rounded-full px-4 py-2 flex items-center transition-all duration-300 border
          ${
            searchOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}>
        <form onSubmit={handleSearch} className="flex w-full">
          <input
            type="text"
            placeholder="Search blog..."
            value={searchInput}
            autoFocus={searchOpen}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full text-sm outline-none"
          />

          <button type="submit">
            <i className="ri-search-line text-lg text-gray-600 hover:text-blue-600"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSearchDropdown;
