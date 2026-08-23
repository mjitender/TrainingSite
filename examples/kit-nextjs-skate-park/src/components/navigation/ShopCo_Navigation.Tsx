import React, { JSX } from "react";

import {
  ComponentParams,
  ComponentRendering,
} from "@sitecore-content-sdk/nextjs";

interface ShopCoNavigationProps {
  rendering: ComponentRendering & {
    params: ComponentParams;
  };
  params: ComponentParams;
}

export const Default = (
  props: ShopCoNavigationProps
): JSX.Element => { 
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component ${props.params.styles}`}
      id={id ? id : undefined}
    >
      <div className="component-content">

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            height: "68px",
            padding: "0 40px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >

          {/* Logo */}
          <a
            href="/"
            style={{
              color: "#050505",
              textDecoration: "none",
              fontSize: "25px",
              fontWeight: 900,
              letterSpacing: "-1.8px",
              whiteSpace: "nowrap",
            }}
          >
            SHOP.CO
          </a>

          {/* Navigation */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              listStyle: "none",
              margin: "0 0 0 56px",
              padding: 0,
            }}
          >
            {[
              "Shop",
              "On Sale",
              "New Arrivals",
              "Brands",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    color: "#171717",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side icons */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >

            {/* Cart */}
            <button
              type="button"
              aria-label="Shopping cart"
              style={{
                width: "22px",
                height: "22px",
                padding: 0,
                border: "none",
                background: "transparent",
                color: "#050505",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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
              aria-label="Account"
              style={{
                width: "22px",
                height: "22px",
                padding: 0,
                border: "none",
                background: "transparent",
                color: "#050505",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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
        </nav>

      </div>
    </div>
  );
};