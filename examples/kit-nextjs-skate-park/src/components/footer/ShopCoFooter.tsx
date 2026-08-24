import React, { JSX } from "react";
import Link from "next/link";

import {
  ComponentParams,
  ComponentRendering,
} from "@sitecore-content-sdk/nextjs";

interface ShopCoFooterProps {
  rendering: ComponentRendering & {
    params: ComponentParams;
  };
  params: ComponentParams;
}

export const Default = (
  props: ShopCoFooterProps
): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const footerLinkStyle: React.CSSProperties = {
    color: "#777",
    textDecoration: "none",
    fontSize: "11px",
    lineHeight: 1,
    marginBottom: "16px",
  };

  const socialStyle: React.CSSProperties = {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  const paymentStyle: React.CSSProperties = {
    width: "38px",
    height: "23px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    fontWeight: 700,
    color: "#111",
    boxSizing: "border-box",
  };

  return (
    <div
      className={`component ${props.params.styles ?? ""}`}
      id={id || undefined}
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        className="component-content"
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <footer
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#f0f0f0",
            color: "#111",
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: "48px 60px 22px",
          }}
        >
          {/* Main footer */}
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "2.1fr repeat(4, 1fr)",
              gap: "50px",
            }}
          >
            {/* Brand */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#050505",
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: 900,
                  letterSpacing: "-1.8px",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                SHOP.CO
              </Link>

              <p
                style={{
                  color: "#777",
                  fontSize: "11px",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                We have clothes that suits your style and
                <br />
                which you&apos;re proud to wear. From
                <br />
                women to men.
              </p>

              {/* Social icons */}
              <div
                style={{
                  display: "flex",
                  gap: "9px",
                  marginTop: "22px",
                }}
              >
                <a
                  href="#"
                  aria-label="Twitter"
                  style={socialStyle}
                >
                  𝕏
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  style={socialStyle}
                >
                  f
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  style={socialStyle}
                >
                  ◎
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                  style={socialStyle}
                >
                  ◉
                </a>
              </div>
            </div>

            {/* Company */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3
                style={{
                  margin: "1px 0 17px",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                COMPANY
              </h3>

              <a href="#" style={footerLinkStyle}>About</a>
              <a href="#" style={footerLinkStyle}>Features</a>
              <a href="#" style={footerLinkStyle}>Works</a>
              <a href="#" style={footerLinkStyle}>Career</a>
            </div>

            {/* Help */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3
                style={{
                  margin: "1px 0 17px",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                HELP
              </h3>

              <a href="#" style={footerLinkStyle}>Customer Support</a>
              <a href="#" style={footerLinkStyle}>Delivery Details</a>
              <a href="#" style={footerLinkStyle}>Terms & Conditions</a>
              <a href="#" style={footerLinkStyle}>Privacy Policy</a>
            </div>

            {/* FAQ */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3
                style={{
                  margin: "1px 0 17px",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                FAQ
              </h3>

              <a href="#" style={footerLinkStyle}>Account</a>
              <a href="#" style={footerLinkStyle}>Manage Deliveries</a>
              <a href="#" style={footerLinkStyle}>Orders</a>
              <a href="#" style={footerLinkStyle}>Payments</a>
            </div>

            {/* Resources */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h3
                style={{
                  margin: "1px 0 17px",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                RESOURCES
              </h3>

              <a href="#" style={footerLinkStyle}>Free eBooks</a>
              <a href="#" style={footerLinkStyle}>Development Tutorial</a>
              <a href="#" style={footerLinkStyle}>How-to - Blog</a>
              <a href="#" style={footerLinkStyle}>Youtube Playlist</a>
            </div>
          </div>

          {/* Bottom section */}
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "18px auto 0",
              paddingTop: "13px",
              borderTop: "1px solid #dcdcdc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#777",
                fontSize: "10px",
              }}
            >
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            {/* Payment methods */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <div
                style={{
                  ...paymentStyle,
                  color: "#1434cb",
                  fontStyle: "italic",
                  fontSize: "10px",
                }}
              >
                VISA
              </div>

              <div
                style={{
                  ...paymentStyle,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#eb001b",
                    position: "absolute",
                    left: "9px",
                  }}
                />

                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#f79e1b",
                    position: "absolute",
                    right: "9px",
                  }}
                />
              </div>

              <div
                style={{
                  ...paymentStyle,
                  color: "#003087",
                  fontSize: "7px",
                  fontStyle: "italic",
                }}
              >
                Pay<span style={{ color: "#009cde" }}>Pal</span>
              </div>

              <div
                style={{
                  ...paymentStyle,
                  fontSize: "8px",
                }}
              >
                Pay
              </div>

              <div
                style={{
                  ...paymentStyle,
                  fontSize: "7px",
                }}
              >
                <span
                  style={{
                    color: "#4285f4",
                    fontSize: "10px",
                    marginRight: "2px",
                  }}
                >
                  G
                </span>
                Pay
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};