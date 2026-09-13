import logo from "../assets/logo-text.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav-Left: Mobile Hamburger & Desktop Logo */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-base-100 rounded-box w-52 font-medium"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center cursor-pointer">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          </div>
        </div>

        {/* Nav-Center: Mobile Logo */}
        <div className="navbar-center lg:hidden flex items-center cursor-pointer">
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
        </div>

        {/* Nav-Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600 font-medium gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-pink-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav-Right: Action Buttons */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-sm sm:btn-md text-gray-700 font-medium hover:bg-gray-100">
            Sign In
          </button>
          <button className="btn btn-sm sm:btn-md rounded-full px-5 text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 border-none shadow-md hover:opacity-95 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
