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

export const Default = (props: ShopCoFooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const footerLinkStyle: React.CSSProperties = {
    color: "#777",
    textDecoration: "none",
    fontSize: "clamp(10px, 1vw, 11px)",
    lineHeight: 1.35,
    marginBottom: "clamp(12px, 1.5vw, 16px)",
    maxWidth: "100%",
    overflowWrap: "anywhere",
  };

  const socialStyle: React.CSSProperties = {
    width: "18px",
    height: "18px",
    minWidth: "18px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    flexShrink: 0,
  };

  const paymentStyle: React.CSSProperties = {
    width: "38px",
    height: "23px",
    minWidth: "38px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    fontWeight: 700,
    color: "#111",
    boxSizing: "border-box",
    flexShrink: 0,
  };

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
    maxWidth: "100%",
    flex: "1 1 130px",
  };

  const headingStyle: React.CSSProperties = {
    margin: "1px 0 17px",
    fontSize: "clamp(10px, 1vw, 11px)",
    fontWeight: 500,
    letterSpacing: "clamp(1.5px, 0.2vw, 2px)",
    maxWidth: "100%",
  };

  return (
    <div
      className={`component ${props.params.styles ?? ""}`}
      id={id || undefined}
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        className="component-content"
        style={{
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <footer
          style={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 0,
            margin: 0,
            padding:
              "clamp(30px, 5vw, 48px) clamp(16px, 5vw, 60px) 22px",
            boxSizing: "border-box",
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
            color: "#111",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {/* =========================
              MAIN FOOTER
          ========================= */}

          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              minWidth: 0,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "clamp(28px, 4vw, 50px)",
              boxSizing: "border-box",
            }}
          >
            {/* =========================
                BRAND
            ========================= */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                minWidth: 0,
                maxWidth: "100%",
                flex: "2.1 1 280px",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#050505",
                  textDecoration: "none",
                  fontSize: "clamp(22px, 2vw, 25px)",
                  fontWeight: 900,
                  letterSpacing: "-1.8px",
                  lineHeight: 1,
                  marginBottom: "16px",
                  maxWidth: "100%",
                }}
              >
                SHOP.CO
              </Link>

              <p
                style={{
                  color: "#777",
                  fontSize: "clamp(10px, 1vw, 11px)",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "250px",
                  overflowWrap: "break-word",
                }}
              >
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>

              {/* Social icons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
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

            {/* =========================
                COMPANY
            ========================= */}

            <div style={columnStyle}>
              <h3 style={headingStyle}>COMPANY</h3>

              <a href="#" style={footerLinkStyle}>
                About
              </a>

              <a href="#" style={footerLinkStyle}>
                Features
              </a>

              <a href="#" style={footerLinkStyle}>
                Works
              </a>

              <a href="#" style={footerLinkStyle}>
                Career
              </a>
            </div>

            {/* =========================
                HELP
            ========================= */}

            <div style={columnStyle}>
              <h3 style={headingStyle}>HELP</h3>

              <a href="#" style={footerLinkStyle}>
                Customer Support
              </a>

              <a href="#" style={footerLinkStyle}>
                Delivery Details
              </a>

              <a href="#" style={footerLinkStyle}>
                Terms & Conditions
              </a>

              <a href="#" style={footerLinkStyle}>
                Privacy Policy
              </a>
            </div>

            {/* =========================
                FAQ
            ========================= */}

            <div style={columnStyle}>
              <h3 style={headingStyle}>FAQ</h3>

              <a href="#" style={footerLinkStyle}>
                Account
              </a>

              <a href="#" style={footerLinkStyle}>
                Manage Deliveries
              </a>

              <a href="#" style={footerLinkStyle}>
                Orders
              </a>

              <a href="#" style={footerLinkStyle}>
                Payments
              </a>
            </div>

            {/* =========================
                RESOURCES
            ========================= */}

            <div style={columnStyle}>
              <h3 style={headingStyle}>RESOURCES</h3>

              <a href="#" style={footerLinkStyle}>
                Free eBooks
              </a>

              <a href="#" style={footerLinkStyle}>
                Development Tutorial
              </a>

              <a href="#" style={footerLinkStyle}>
                How-to - Blog
              </a>

              <a href="#" style={footerLinkStyle}>
                Youtube Playlist
              </a>
            </div>
          </div>

          {/* =========================
              BOTTOM SECTION
          ========================= */}

          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              minWidth: 0,
              margin: "18px auto 0",
              paddingTop: "13px",
              borderTop: "1px solid #dcdcdc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            {/* Copyright */}
            <p
              style={{
                margin: 0,
                color: "#777",
                fontSize: "clamp(9px, 1vw, 10px)",
                maxWidth: "100%",
                overflowWrap: "break-word",
              }}
            >
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            {/* Payment methods */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexWrap: "wrap",
                gap: "clamp(5px, 0.7vw, 7px)",
                maxWidth: "100%",
              }}
            >
              {/* VISA */}
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

              {/* Mastercard */}
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
                    top: "50%",
                    transform: "translateY(-50%)",
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
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>

              {/* PayPal */}
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

              {/* Apple Pay */}
              <div
                style={{
                  ...paymentStyle,
                  fontSize: "8px",
                }}
              >
                Pay
              </div>

              {/* Google Pay */}
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