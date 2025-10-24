import {NavLink, useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Listbox} from "@headlessui/react";
import vechuraLogo from "../../public/assets/vechura-logo.png";
import {BASE_URL} from "../utils/constants";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("adminAccess") === "granted");
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAccess");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/admin/login");
  };
  const categories = [
    "Cars",
    "Boats",
    "RVs and Motorhomes",
    "Motorcycles",
    "Private Jets",
  ];
  const categoryIcons: Record<string, string> = {
    Cars: "ri-car-line",
    Boats: "ri-ship-line",
    "RVs and Motorhomes": "ri-bus-line",
    Motorcycles: "ri-motorbike-line",
    "Private Jets": "ri-plane-line",
  };

  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Booking Tools", path: "/booking-tools"},
    {name: "About", path: "/about"},
    {name: "Blog", path: "/blog"},
  ];
  const [selected, setSelected] = useState(categories[0]);
  const handleSelect = (cat: any) => {
    setSelected(cat);
    const target = document.getElementById(cat.replace(/\s+/g, "-"));
    if (target) {
      target.scrollIntoView({behavior: "smooth"});
    }
  };
  return (
    <header className="w-full border-b sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 vechuraLogo">
              <img src={BASE_URL + vechuraLogo} alt="vechura" loading="lazy" />
              <span className="text-3xl font-bold text-neutral-900">
                Vechura
              </span>
              {/* <i className="ri-steering-2-fill text-4xl text-blue-600"></i>
              <span className="text-3xl font-bold text-neutral-900">
                VehicleVoyager
              </span> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="space-x-6 hidden md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({isActive}) =>
                    `text-lg font-medium hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-gray-800"
                    }`
                  }>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Login/Logout */}
            <div className="hidden md:block">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="border border-gray-300 rounded px-4 py-1 text-lg hover:bg-gray-100">
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="border border-gray-300 rounded px-4 py-1 text-lg hover:bg-gray-100">
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({isActive}) =>
                    `block px-4 py-2 text-sm font-medium ${
                      isActive ? "text-blue-600" : "text-gray-800"
                    }`
                  }>
                  {link.name}
                </NavLink>
              ))}

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm border-t text-gray-800">
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogin();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm border-t text-gray-800">
                  Login
                </button>
              )}
            </div>
          )}
        </div>
        {/* {isHomePage && (
          <nav className="pt-2">
            <div className="flex gap-4 overflow-x-auto">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.replace(/\s+/g, "-")}`}
                  className="text-sm font-semibold text-blue-600 hover:underline whitespace-nowrap">
                  <i className={`${categoryIcons[cat]} mr-1`} />
                  {cat}
                </a>
              ))}
            </div>
          </nav>
        )} */}
        {isHomePage && (
          <nav className="pt-2">
            {/* Desktop / Tablet: horizontal scroll */}
            <div className="hidden md:flex gap-4 overflow-x-auto">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.replace(/\s+/g, "-")}`}
                  className="text-sm font-semibold text-blue-600 hover:underline whitespace-nowrap">
                  <i className={`${categoryIcons[cat]} mr-1`} />
                  {cat}
                </a>
              ))}
            </div>

            {/* Mobile: dropdown */}

            <div className="w-full md:hidden relative">
              <Listbox value={selected} onChange={handleSelect}>
                <Listbox.Button className="w-full bg-white border border-gray-300 rounded-lg p-2 flex items-center justify-between shadow-sm hover:border-blue-400">
                  <div className="flex items-center gap-2">
                    <i className={`${categoryIcons[selected]} text-blue-600`} />
                    <span>{selected}</span>
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
                      key={cat}
                      value={cat}
                      className={({active}) =>
                        `cursor-pointer select-none flex items-center gap-2 p-2 transition-colors duration-150 ${
                          active ? "bg-blue-100 text-blue-700" : "text-gray-700"
                        }`
                      }>
                      {({selected}) => (
                        <>
                          <i
                            className={`${categoryIcons[cat]} ${
                              selected ? "text-blue-700" : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            }`}>
                            {cat}
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
