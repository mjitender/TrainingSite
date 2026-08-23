import "./ShopCo_Navigation.css";

const navItems = [
  { label: 'Shop', href: '#' },
  { label: 'On Sale', href: '#' },
  { label: 'New Arrivals', href: '#' },
  { label: 'Brands', href: '#' },
];

const ShopCo_Navigation = () => {
  return (
    <header className="shopco-navigation">
      <div className="shopco-navigation__inner">

        {/* Logo */}
        <a href="#" className="shopco-navigation__logo">
          SHOP<span>.CO</span>
        </a>

        {/* Navigation */}
        <nav className="shopco-navigation__nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="shopco-navigation__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="shopco-navigation__actions">

          {/* Cart */}
          <button
            type="button"
            className="shopco-navigation__icon"
            aria-label="Shopping cart"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </button>

          {/* Account */}
          <button
            type="button"
            className="shopco-navigation__icon"
            aria-label="Account"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="9" r="2.5" />
              <path d="M7.5 18c.9-2.2 2.4-3.3 4.5-3.3s3.6 1.1 4.5 3.3" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default ShopCo_Navigation;