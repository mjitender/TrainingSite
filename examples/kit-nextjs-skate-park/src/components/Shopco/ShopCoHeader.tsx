// import React, { JSX } from "react";

// import {
//   ComponentParams,
//   ComponentRendering,
// } from "@sitecore-content-sdk/nextjs";

// interface ShopCoHeroProps {
//   rendering: ComponentRendering & {
//     params: ComponentParams;
//   };
//   params: ComponentParams;
// }

// export const Default = (
//   props: ShopCoHeroProps
// ): JSX.Element => {
//   const id = props.params.RenderingIdentifier;

//   return (
//     <div
//       className={`component ${props.params.styles ?? ""}`}
//       id={id || undefined}
//       style={{
//         width: "100%",
//         maxWidth: "none",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       <style>
//         {`
//           .shopco-hero {
//             position: relative;
//             width: 100%;
//             min-height: 560px;
//             overflow: hidden;
//             background-color: #f2f0f1;
//             box-sizing: border-box;
//           }

//           .shopco-hero-content {
//             position: relative;
//             z-index: 10;
//             width: 100%;
//             max-width: 1240px;
//             min-height: 560px;
//             margin: 0 auto;
//             padding: 68px 88px 0;
//             box-sizing: border-box;
//             display: flex;
//             align-items: flex-start;
//           }

//           .shopco-hero-text {
//             width: 560px;
//             box-sizing: border-box;
//           }

//           .shopco-hero-title {
//             margin: 0;
//             max-width: 520px;
//             color: #000;
//             font-size: 56px;
//             font-weight: 900;
//             line-height: 0.99;
//             letter-spacing: -2.5px;
//             text-transform: uppercase;
//           }

//           .shopco-hero-description {
//             margin: 18px 0 0;
//             max-width: 500px;
//             color: #6b6869;
//             font-size: 14px;
//             font-weight: 400;
//             line-height: 1.45;
//           }

//           .shopco-hero-button {
//             width: 183px;
//             height: 46px;
//             margin-top: 22px;
//             padding: 0;
//             border: none;
//             border-radius: 9999px;
//             background-color: #000;
//             color: #fff;
//             font-size: 13px;
//             font-weight: 500;
//             cursor: pointer;
//           }

//           .shopco-hero-stats {
//             display: flex;
//             align-items: flex-start;
//             margin-top: 40px;
//           }

//           .shopco-stat {
//             padding-left: 28px;
//             padding-right: 28px;
//           }

//           .shopco-stat:first-child {
//             padding-left: 0;
//           }

//           .shopco-stat:last-child {
//             padding-right: 0;
//           }

//           .shopco-stat-number {
//             color: #000;
//             font-size: 36px;
//             font-weight: 500;
//             line-height: 1;
//             letter-spacing: -1px;
//           }

//           .shopco-stat-label {
//             margin-top: 6px;
//             color: #777477;
//             font-size: 12px;
//             white-space: nowrap;
//           }

//           .shopco-stat-divider {
//             width: 1px;
//             height: 64px;
//             background-color: #d8d6d7;
//             flex-shrink: 0;
//           }

//           .shopco-hero-image {
//             position: absolute;
//             right: 35px;
//             bottom: 0;
//             z-index: 5;
//             height: 520px;
//             width: auto;
//             object-fit: contain;
//             object-position: bottom;
//           }

//           .shopco-star-large {
//             position: absolute;
//             top: 58px;
//             right: 85px;
//             z-index: 10;
//             color: #000;
//           }

//           .shopco-star-small {
//             position: absolute;
//             top: 242px;
//             left: 650px;
//             z-index: 10;
//             color: #000;
//           }

//           /* =========================
//              TABLET
//              ========================= */

//           @media (max-width: 1024px) {

//             .shopco-hero {
//               min-height: 500px;
//             }

//             .shopco-hero-content {
//               min-height: 500px;
//               padding: 55px 45px 0;
//             }

//             .shopco-hero-text {
//               width: 52%;
//             }

//             .shopco-hero-title {
//               font-size: 46px;
//               letter-spacing: -2px;
//             }

//             .shopco-hero-description {
//               max-width: 430px;
//               font-size: 13px;
//             }

//             .shopco-hero-image {
//               right: -10px;
//               height: 470px;
//             }

//             .shopco-star-large {
//               right: 35px;
//               top: 45px;
//             }

//             .shopco-star-large svg {
//               width: 65px;
//               height: 65px;
//             }

//             .shopco-star-small {
//               left: 55%;
//               top: 220px;
//             }

//             .shopco-star-small svg {
//               width: 38px;
//               height: 38px;
//             }

//             .shopco-stat {
//               padding-left: 18px;
//               padding-right: 18px;
//             }

//             .shopco-stat-number {
//               font-size: 29px;
//             }

//             .shopco-stat-label {
//               font-size: 10px;
//             }
//           }

//           /* =========================
//              MOBILE
//              ========================= */

//           @media (max-width: 767px) {

//             .shopco-hero {
//               min-height: 760px;
//             }

//             .shopco-hero-content {
//               min-height: 760px;
//               padding: 45px 24px 0;
//               display: block;
//             }

//             .shopco-hero-text {
//               width: 100%;
//             }

//             .shopco-hero-title {
//               max-width: 100%;
//               font-size: 42px;
//               line-height: 0.98;
//               letter-spacing: -1.8px;
//             }

//             .shopco-hero-description {
//               max-width: 100%;
//               margin-top: 18px;
//               font-size: 13px;
//               line-height: 1.5;
//             }

//             .shopco-hero-description br {
//               display: none;
//             }

//             .shopco-hero-button {
//               width: 100%;
//               max-width: 300px;
//               height: 46px;
//               margin-top: 22px;
//             }

//             .shopco-hero-stats {
//               position: relative;
//               z-index: 20;
//               display: grid;
//               grid-template-columns: repeat(2, 1fr);
//               gap: 20px;
//               width: 100%;
//               margin-top: 32px;
//             }

//             .shopco-stat {
//               padding: 0;
//             }

//             .shopco-stat-divider {
//               display: none;
//             }

//             .shopco-stat-number {
//               font-size: 28px;
//             }

//             .shopco-stat-label {
//               font-size: 10px;
//               white-space: normal;
//             }

//             .shopco-hero-image {
//               right: 50%;
//               bottom: -5px;
//               height: 350px;
//               transform: translateX(50%);
//             }

//             .shopco-star-large {
//               top: 25px;
//               right: 20px;
//             }

//             .shopco-star-large svg {
//               width: 50px;
//               height: 50px;
//             }

//             .shopco-star-small {
//               top: 330px;
//               left: 25px;
//             }

//             .shopco-star-small svg {
//               width: 32px;
//               height: 32px;
//             }
//           }

//           /* =========================
//              SMALL PHONES
//              ========================= */

//           @media (max-width: 480px) {

//             .shopco-hero {
//               min-height: 700px;
//             }

//             .shopco-hero-content {
//               min-height: 700px;
//               padding: 35px 20px 0;
//             }

//             .shopco-hero-title {
//               font-size: 35px;
//               letter-spacing: -1.5px;
//             }

//             .shopco-hero-button {
//               max-width: none;
//             }

//             .shopco-hero-stats {
//               gap: 16px;
//               margin-top: 28px;
//             }

//             .shopco-stat-number {
//               font-size: 24px;
//             }

//             .shopco-stat-label {
//               font-size: 9px;
//             }

//             .shopco-hero-image {
//               height: 310px;
//             }

//             .shopco-star-large {
//               top: 20px;
//               right: 15px;
//             }
//           }
//         `}
//       </style>

//       <div
//         className="component-content"
//         style={{
//           width: "100%",
//           margin: 0,
//           padding: 0,
//           boxSizing: "border-box",
//         }}
//       >
//         <section className="shopco-hero">

//           {/* Content */}
//           <div className="shopco-hero-content">
//             <div className="shopco-hero-text">

//               {/* Heading */}
//               <h1 className="shopco-hero-title">
//                 Find clothes
//                 <br />
//                 that matches
//                 <br />
//                 your style
//               </h1>

//               {/* Description */}
//               <p className="shopco-hero-description">
//                 Browse through our diverse range of meticulously crafted
//                 garments, designed
//                 <br />
//                 to bring out your individuality and cater to your sense of
//                 style.
//               </p>

//               {/* CTA */}
//               <button
//                 type="button"
//                 className="shopco-hero-button"
//               >
//                 Shop Now
//               </button>

//               {/* Statistics */}
//               <div className="shopco-hero-stats">

//                 <div className="shopco-stat">
//                   <div className="shopco-stat-number">
//                     200+
//                   </div>

//                   <div className="shopco-stat-label">
//                     International Brands
//                   </div>
//                 </div>

//                 <div className="shopco-stat-divider" />

//                 <div className="shopco-stat">
//                   <div className="shopco-stat-number">
//                     2,000+
//                   </div>

//                   <div className="shopco-stat-label">
//                     High-Quality Products
//                   </div>
//                 </div>

//                 <div className="shopco-stat-divider" />

//                 <div className="shopco-stat">
//                   <div className="shopco-stat-number">
//                     30,000+
//                   </div>

//                   <div className="shopco-stat-label">
//                     Happy Customers
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Models */}
//           <img
//             src="https://chop-co.netlify.app/assets/Main-DjG-FNVr.svg"
//             alt="Fashion models wearing Shop.co clothing"
//             className="shopco-hero-image"
//           />

//           {/* Large decorative star */}
//           <div className="shopco-star-large">
//             <svg
//               width="88"
//               height="88"
//               viewBox="0 0 100 100"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path d="M50 0C55 29 71 45 100 50C71 55 55 71 50 100C45 71 29 55 0 50C29 45 45 29 50 0Z" />
//             </svg>
//           </div>

//           {/* Small decorative star */}
//           <div className="shopco-star-small">
//             <svg
//               width="48"
//               height="48"
//               viewBox="0 0 100 100"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path d="M50 0C55 29 71 45 100 50C71 55 55 71 50 100C45 71 29 55 0 50C29 45 45 29 50 0Z" />
//             </svg>
//           </div>

//         </section>
//       </div>
//     </div>
//   );
// };

import React, { JSX } from "react";

import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Text,
  Image,
} from "@sitecore-content-sdk/nextjs";

interface ShopCoHeroProps {
  rendering: ComponentRendering & {
    params: ComponentParams;
  };
  params: ComponentParams;

  fields: {
    Title: Field<string>;
    Subheading: Field<string>;
    "CTA-Text": Field<string>;

    StatOne: Field<string>;
    StatOneLabel: Field<string>;

    StatTwo: Field<string>;
    StatTwoLabel: Field<string>;

    StatThree: Field<string>;
    StatThreeLabel: Field<string>;

    HeroImage: ImageField;
  };
}

export const Default = (
  props: ShopCoHeroProps
): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { fields } = props;

  return (
    <div
      className={`component ${props.params.styles ?? ""}`}
      id={id || undefined}
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
          .shopco-hero {
            position: relative;
            width: 100%;
            min-height: 560px;
            overflow: hidden;
            background-color: #f2f0f1;
            box-sizing: border-box;
          }

          .shopco-hero-content {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 1240px;
            min-height: 560px;
            margin: 0 auto;
            padding: 68px 88px 0;
            box-sizing: border-box;
            display: flex;
            align-items: flex-start;
          }

          .shopco-hero-text {
            width: 560px;
            box-sizing: border-box;
          }

          .shopco-hero-title {
            margin: 0;
            max-width: 520px;
            color: #000;
            font-size: 56px;
            font-weight: 900;
            line-height: 0.99;
            letter-spacing: -2.5px;
            text-transform: uppercase;
          }

          .shopco-hero-description {
            margin: 18px 0 0;
            max-width: 500px;
            color: #6b6869;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.45;
          }

          .shopco-hero-button {
            width: 183px;
            height: 46px;
            margin-top: 22px;
            padding: 0;
            border: none;
            border-radius: 9999px;
            background-color: #000;
            color: #fff;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
          }

          .shopco-hero-stats {
            display: flex;
            align-items: flex-start;
            margin-top: 40px;
          }

          .shopco-stat {
            padding-left: 28px;
            padding-right: 28px;
          }

          .shopco-stat:first-child {
            padding-left: 0;
          }

          .shopco-stat:last-child {
            padding-right: 0;
          }

          .shopco-stat-number {
            color: #000;
            font-size: 36px;
            font-weight: 500;
            line-height: 1;
            letter-spacing: -1px;
          }

          .shopco-stat-label {
            margin-top: 6px;
            color: #777477;
            font-size: 12px;
            white-space: nowrap;
          }

          .shopco-stat-divider {
            width: 1px;
            height: 64px;
            background-color: #d8d6d7;
            flex-shrink: 0;
          }

          .shopco-hero-image {
            position: absolute;
            right: 0px;
            bottom: 0;
            z-index: 5;
            height: 520px;
            width: auto;
            object-fit: contain;
            object-position: bottom;
          }

          .shopco-star-large {
            position: absolute;
            top: 58px;
            right: 275px;
            z-index: 10;
            color: #000;
          }

          .shopco-star-small {
            position: absolute;
            top: 242px;
            left: 650px;
            z-index: 10;
            color: #000;
          }

          /* =========================
             TABLET
             ========================= */

          @media (max-width: 1024px) {

            .shopco-hero {
              min-height: 500px;
            }

            .shopco-hero-content {
              min-height: 500px;
              padding: 55px 45px 0;
            }

            .shopco-hero-text {
              width: 52%;
            }

            .shopco-hero-title {
              font-size: 46px;
              letter-spacing: -2px;
            }

            .shopco-hero-description {
              max-width: 430px;
              font-size: 13px;
            }

            .shopco-hero-image {
              right: -10px;
              height: 470px;
            }

            .shopco-star-large {
              right: 35px;
              top: 45px;
            }

            .shopco-star-large svg {
              width: 65px;
              height: 65px;
            }

            .shopco-star-small {
              left: 55%;
              top: 220px;
            }

            .shopco-star-small svg {
              width: 38px;
              height: 38px;
            }

            .shopco-stat {
              padding-left: 18px;
              padding-right: 18px;
            }

            .shopco-stat-number {
              font-size: 29px;
            }

            .shopco-stat-label {
              font-size: 10px;
            }
          }

          /* =========================
             MOBILE
             ========================= */

          @media (max-width: 767px) {

            .shopco-hero {
              height: 400px;
            }

            .shopco-hero-content {
              min-height: 400px;
              padding: 45px 24px 0;
              display: block;
            }

            .shopco-hero-text {
              width: 100%;
            }

            .shopco-hero-title {
              max-width: 100%;
              font-size: 42px;
              line-height: 0.98;
              letter-spacing: -1.8px;
            }

            .shopco-hero-description {
              max-width: 100%;
              margin-top: 18px;
              font-size: 13px;
              line-height: 1.5;
            }

            .shopco-hero-description br {
              display: none;
            }

            .shopco-hero-button {
              width: 100%;
              max-width: 300px;
              height: 46px;
              margin-top: 22px;
            }

            .shopco-hero-stats {
              position: relative;
              z-index: 20;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
              width: 100%;
              margin-top: 32px;
            }

            .shopco-stat {
              padding: 0;
            }

            .shopco-stat-divider {
              display: none;
            }

            .shopco-stat-number {
              font-size: 28px;
            }

            .shopco-stat-label {
              font-size: 10px;
              white-space: normal;
            }

            .shopco-hero-image {
              right: 50%;
              bottom: -5px;
              height: 350px;
              transform: translateX(50%);
              display:none;
              visibility:hidden;
            }

            .shopco-star-large {
              top: 25px;
              right: 20px;
              display:none;
              visibility:hidden;
            }

            .shopco-star-large svg {
              width: 50px;
              height: 50px;
            }

            .shopco-star-small {
              top: 330px;
              left: 25px;
              display:none;
              visibility:hidden;
            }

            .shopco-star-small svg {
              width: 32px;
              height: 32px;
              display:none;
              visibility:hidden;
            }
          }

          /* =========================
             SMALL PHONES
             ========================= */

          @media (max-width: 480px) {

            .shopco-hero {
              height: 400px;
            }

            .shopco-hero-content {
              min-height: 700px;
              padding: 35px 20px 0;
            }

            .shopco-hero-title {
              font-size: 35px;
              letter-spacing: -1.5px;
            }

            .shopco-hero-button {
              max-width: none;
            }

            .shopco-hero-stats {
              gap: 16px;
              margin-top: 28px;
            }

            .shopco-stat-number {
              font-size: 24px;
            }

            .shopco-stat-label {
              font-size: 9px;
            }

            .shopco-hero-image {
              height: 310px;
            }

            .shopco-star-large {
              display:none;
              visibility:hidden;
              top: 20px;
              right: 15px;
            }
          }
        `}
      </style>

      <div
        className="component-content"
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <section className="shopco-hero">

          {/* Content */}
          <div className="shopco-hero-content">
            <div className="shopco-hero-text">

              {/* Heading */}
              <Text
                field={fields.Title}
                tag="h1"
                className="shopco-hero-title"
              />

              {/* Description */}
              <Text
                field={fields.Subheading}
                tag="p"
                className="shopco-hero-description"
              />

              {/* CTA */}
              <button
                type="button"
                className="shopco-hero-button"
              >
                <Text field={fields["CTA-Text"]} />
              </button>

              {/* Statistics */}
              <div className="shopco-hero-stats">

                {/* Stat One */}
                <div className="shopco-stat">
                  <Text
                    field={fields.StatOne}
                    tag="div"
                    className="shopco-stat-number"
                  />

                  <Text
                    field={fields.StatOneLabel}
                    tag="div"
                    className="shopco-stat-label"
                  />
                </div>

                <div className="shopco-stat-divider" />

                {/* Stat Two */}
                <div className="shopco-stat">
                  <Text
                    field={fields.StatTwo}
                    tag="div"
                    className="shopco-stat-number"
                  />

                  <Text
                    field={fields.StatTwoLabel}
                    tag="div"
                    className="shopco-stat-label"
                  />
                </div>

                <div className="shopco-stat-divider" />

                {/* Stat Three */}
                <div className="shopco-stat">
                  <Text
                    field={fields.StatThree}
                    tag="div"
                    className="shopco-stat-number"
                  />

                  <Text
                    field={fields.StatThreeLabel}
                    tag="div"
                    className="shopco-stat-label"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Hero Image */}
          <Image
            field={fields.HeroImage}
            className="shopco-hero-image"
            alt="Shop.co fashion models"
          />

          {/* Large decorative star */}
          <div className="shopco-star-large">
            <svg
              width="88"
              height="88"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M50 0C55 29 71 45 100 50C71 55 55 71 50 100C45 71 29 55 0 50C29 45 45 29 50 0Z" />
            </svg>
          </div>

          {/* Small decorative star */}
          <div className="shopco-star-small">
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M50 0C55 29 71 45 100 50C71 55 55 71 50 100C45 71 29 55 0 50C29 45 45 29 50 0Z" />
            </svg>
          </div>

        </section>
      </div>
    </div>
  );
};