import {NavLink, Link, useNavigate, useLocation} from "react-router-dom";
import {JSX, useEffect, useState} from "react";
import {Listbox} from "@headlessui/react";
import {FaHelicopter} from "react-icons/fa";
import vechuraLogo from "../../public/assets/vechura-logo.webp";
import {BASE_URL} from "../utils/constants";
import BlogSearchDropdown from "./BlogSearchDropdown";

// 🧩 Type definition for categories
interface Category {
  label: string;
  icon: string | JSX.Element;
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("adminAccess") === "granted");
  }, []);

  const handleLogout = (): void => {
    sessionStorage.removeItem("adminAccess");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = (): void => {
    navigate("/admin/login");
  };

  const handleSubscribe = (): void => {
    navigate("/email-signup");
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    navigate(`/blog?search=${encodeURIComponent(searchInput.trim())}`);
    setIsMenuOpen(false);
  };
  // ✅ Typed category array
  const categories: Category[] = [
    {label: "Cars", icon: "ri-car-line"},
    {label: "Boats", icon: "ri-ship-line"},
    {label: "RVs and Motorhomes", icon: "ri-bus-line"},
    {label: "Motorcycles", icon: "ri-motorbike-line"},
    {label: "Private Jets", icon: "ri-plane-line"},
    {label: "Helicopter Tours", icon: <FaHelicopter size={18} />},
  ];

  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Booking Tools", path: "/booking-tools"},
    {name: "About", path: "/about"},
    {name: "Blog", path: "/blog"},
    {
      name: isLoggedIn ? "Logout" : "Login",
      path: isLoggedIn ? "/" : "/admin/login",
    },
  ];

  const [selected, setSelected] = useState<Category>(categories[0]);

  const handleSelect = (cat: Category): void => {
    setSelected(cat);
    const target = document.getElementById(cat.label.replace(/\s+/g, "-"));
    if (target) target.scrollIntoView({behavior: "smooth"});
  };

  return (
    <header className="w-full border-b sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 vechuraLogo">
            <img
              src={BASE_URL + vechuraLogo}
              alt="Vechura"
              loading="lazy"
              height="30px"
              width="42px"
            />
            <span className="text-3xl font-bold text-neutral-900">Vechura</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="space-x-6 hidden md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  if (link.name === "Logout") handleLogout();
                }}
                className={({isActive}) =>
                  `text-lg font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-800"
                  }`
                }>
                {link.name}
              </NavLink>
            ))}
            {/* Search Bar */}
          </nav>

          {/* Desktop Login/Logout */}
          <div className="hidden md:flex items-center gap-6 relative">
            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition-all duration-200">
              Subscribe
            </button>

            {/* Advertiser Disclosure */}
            <Link
              to="/advertiser-disclosure"
              className="text-sm font-medium text-blue-600 hover:underline">
              Advertiser Disclosure
            </Link>

            {/* Search Icon */}
            {/* <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="relative z-50">
              {searchOpen ? (
                <i className="ri-close-line text-2xl text-gray-700 hover:text-black"></i>
              ) : (
                <i className="ri-search-line text-2xl text-gray-700 hover:text-black"></i>
              )}
            </button> */}

            {/* Floating Search Bar */}
            {/* <div
              className={`absolute right-0 top-full mt-3 w-64 bg-white shadow-md rounded-full px-4 py-2 flex items-center transition-all duration-300 overflow-hidden border 
      ${
        searchOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}> */}
            {/* <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  placeholder="Search blog..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full text-sm outline-none"
                />

                <button type="submit">
                  <i className="ri-search-line text-lg text-gray-600 hover:text-blue-600"></i>
                </button>
              </form> */}
            <BlogSearchDropdown
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              handleSearch={handleSearch}
            />
            {/* </div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            {/* Search Icon */}
            <div className="relative inline-block">
              <BlogSearchDropdown
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearch={handleSearch}
              />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 text-2xl focus:outline-none">
              <i className={`ri-${isMenuOpen ? "close" : "menu"}-line`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-2 space-y-2">
            {/* Mobile Search */}
            {/* <form onSubmit={handleSearch} className="relative px-4">
              <input
                type="text"
                placeholder="Search blog..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-6 top-1.5 text-gray-500 hover:text-blue-600">
                <i className="ri-search-line text-lg"></i>
              </button>
            </form> */}
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (link.name === "Logout") {
                    handleLogout();
                  }
                }}
                className={({isActive}) =>
                  `block px-4 py-2 text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-800"
                  }`
                }>
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={handleSubscribe}
              className="block w-full text-left px-4 py-2 text-sm border-t text-gray-800">
              Subscribe
            </button>
            <Link
              key="AdvertiserDisclosure"
              to="/advertiser-disclosure"
              className="text-blue-600 hover:underline text-sm font-medium">
              Advertiser Disclosure
            </Link>
          </div>
        )}

        {/* Homepage Category Bar */}
        {isHomePage && (
          <nav className="pt-2">
            {/* Desktop / Tablet: horizontal scroll */}
            <div className="hidden md:flex gap-4 overflow-x-auto">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={`#${cat.label.replace(/\s+/g, "-")}`}
                  className="text-sm font-semibold text-blue-600 hover:underline whitespace-nowrap flex items-center">
                  {typeof cat.icon === "string" ? (
                    <i className={`${cat.icon} mr-1`} />
                  ) : (
                    <span className="mr-1">{cat.icon}</span>
                  )}
                  {cat.label}
                </a>
              ))}
            </div>

            {/* Mobile: dropdown */}
            <div className="w-full md:hidden relative">
              <Listbox value={selected} onChange={handleSelect}>
                <Listbox.Button className="w-full bg-white border border-gray-300 rounded-lg p-2 flex items-center justify-between shadow-sm hover:border-blue-400">
                  <div className="flex items-center gap-2">
                    {typeof selected.icon === "string" ? (
                      <i className={`${selected.icon} text-blue-600`} />
                    ) : (
                      <span className="text-blue-600">{selected.icon}</span>
                    )}
                    <span>{selected.label}</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-lg bg-white border border-gray-300 shadow-lg">
                  {categories.map((cat) => (
                    <Listbox.Option
                      key={cat.label}
                      value={cat}
                      className={({active}: {active: boolean}) =>
                        `cursor-pointer select-none flex items-center gap-2 p-2 transition-colors duration-150 ${
                          active ? "bg-blue-100 text-blue-700" : "text-gray-700"
                        }`
                      }>
                      {({active}) => (
                        <>
                          {typeof cat.icon === "string" ? (
                            <i
                              className={`${cat.icon} ${
                                active ? "text-blue-700" : "text-gray-500"
                              }`}
                            />
                          ) : (
                            <span
                              className={`${
                                active ? "text-blue-700" : "text-gray-500"
                              }`}>
                              {cat.icon}
                            </span>
                          )}
                          <span
                            className={`${
                              active ? "font-semibold" : "font-normal"
                            }`}>
                            {cat.label}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
