import {NavLink} from "react-router-dom";

export default function Header() {
  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Cars", path: "/cars"},
    {name: "About", path: "/about"},
  ];

  return (
    <>
      <header className="w-full border-b sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo with icon */}
            <div className="flex items-center space-x-2">
              <i className="ri-steering-2-fill text-2xl text-blue-600"></i>
              <span className="text-2xl font-bold  text-neutral-900">
                VehicleVoyager
              </span>
            </div>

            {/* Navigation */}
            <nav className="space-x-6 hidden md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({isActive}) =>
                    `text-sm font-medium hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-gray-800"
                    }`
                  }>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Login Button */}
            <div className="hidden md:block">
              <button className="border border-gray-300 rounded px-4 py-1 text-sm hover:bg-gray-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
