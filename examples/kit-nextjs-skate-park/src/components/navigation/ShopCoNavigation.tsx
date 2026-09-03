import React, { JSX } from "react";
import Link from "next/link";

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

  const navItems = ["Shop", "On Sale", "New Arrivals", "Brands"];

  return (
    <div
      className={`component ${props.params.styles ?? ""}`}
      id={id || undefined}
      suppressHydrationWarning
      style={{
        width: "100%",
        maxWidth: "none",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
          .shopco-navigation {
            width: 100%;
            max-width: none;
            margin: 0;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            min-height: 68px;
            padding: 0 40px;
            background-color: #ffffff;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
            font-family: Arial, Helvetica, sans-serif;
            position: relative;
            z-index: 1000;
          }

          .shopco-logo {
            color: #050505;
            text-decoration: none;
            font-size: 25px;
            font-weight: 900;
            letter-spacing: -1.8px;
            white-space: nowrap;
          }

          .shopco-nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
            list-style: none;
            margin: 0 0 0 56px;
            padding: 0;
          }

          .shopco-nav-links a {
            color: #171717;
            text-decoration: none;
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
          }

          .shopco-nav-links a:hover {
            color: #555555;
          }

          .shopco-actions {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 18px;
          }

          .shopco-action-button {
            width: 22px;
            height: 22px;
            padding: 0;
            border: none;
            background: transparent;
            color: #050505;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .shopco-action-button svg {
            width: 21px;
            height: 21px;
          }

          /* Mobile menu */
          .shopco-mobile-menu {
            display: none;
          }

          .shopco-menu-button {
            display: none;
            width: 22px;
            height: 22px;
            padding: 0;
            border: none;
            background: transparent;
            color: #050505;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            list-style: none;
          }

          .shopco-menu-button::-webkit-details-marker {
            display: none;
          }

          .shopco-menu-button::marker {
            display: none;
          }

          .shopco-menu-button svg {
            width: 20px;
            height: 20px;
          }

          .shopco-menu-icon-close {
            display: none;
          }

          .shopco-mobile-menu[open] .shopco-menu-icon-open {
            display: none;
          }

          .shopco-mobile-menu[open] .shopco-menu-icon-close {
            display: block;
          }

          /* Dropdown is positioned relative to .shopco-navigation */
          .shopco-mobile-menu-content {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            border-top: 1px solid #eeeeee;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            z-index: 999;
          }

          .shopco-mobile-menu-content ul {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .shopco-mobile-menu-content li {
            border-bottom: 1px solid #eeeeee;
          }

          .shopco-mobile-menu-content li:last-child {
            border-bottom: none;
          }

          .shopco-mobile-menu-content a {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 16px 4px;
            color: #171717;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
          }

          .shopco-mobile-menu-content a:hover {
            background-color: #f8f8f8;
          }

          /* Tablet */
          @media (max-width: 900px) {
            .shopco-navigation {
              padding: 0 28px;
            }

            .shopco-nav-links {
              gap: 22px;
              margin-left: 36px;
            }

            .shopco-nav-links a {
              font-size: 13px;
            }
          }

          /* Mobile */
          @media (max-width: 700px) {
            .shopco-navigation {
              min-height: 60px;
              padding: 0 20px;
            }

            .shopco-logo {
              font-size: 22px;
              letter-spacing: -1.5px;
            }

            .shopco-nav-links {
              display: none;
            }

            .shopco-actions {
              gap: 14px;
            }

            .shopco-action-button {
              width: 20px;
              height: 20px;
            }

            .shopco-action-button svg {
              width: 19px;
              height: 19px;
            }

            .shopco-mobile-menu {
              display: block;
            }

            .shopco-menu-button {
              display: flex;
            }
          }

          /* Small phones */
          @media (max-width: 400px) {
            .shopco-navigation {
              padding: 0 16px;
            }

            .shopco-logo {
              font-size: 20px;
            }

            .shopco-actions {
              gap: 11px;
            }

            .shopco-mobile-menu-content {
              padding: 16px;
            }
          }
        `}
      </style>

      <div
        className="component-content"
        style={{
          width: "100%",
          maxWidth: "none",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <nav className="shopco-navigation">

          {/* Logo */}
          <Link
            href="/"
            className="shopco-logo"
          >
            SHOP.CO
          </Link>

          {/* Desktop Navigation */}
          <ul className="shopco-nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="shopco-actions">

            {/* Cart */}
            <button
              type="button"
              aria-label="Shopping cart"
              className="shopco-action-button"
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
              className="shopco-action-button"
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

            {/* Mobile Menu */}
            <details className="shopco-mobile-menu">

              {/* Menu Button */}
              <summary
                className="shopco-menu-button"
                aria-label="Toggle navigation menu"
              >
                {/* Hamburger */}
                <svg
                  className="shopco-menu-icon-open"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>

                {/* Close */}
                <svg
                  className="shopco-menu-icon-close"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              </summary>

              {/* Mobile Navigation */}
              <div className="shopco-mobile-menu-content">
                <ul>
                  {navItems.map((item) => (
                    <li key={item}>
                      <a href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </details>

          </div>
        </nav>
      </div>
    </div>
  );
};