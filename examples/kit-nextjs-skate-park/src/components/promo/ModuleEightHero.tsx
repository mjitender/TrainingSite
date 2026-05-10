

// import React, { JSX } from 'react';
// import {
//   NextImage as ContentSdkImage,
//   RichText as ContentSdkRichText,
//   ImageField,
//   Field,
// } from '@sitecore-content-sdk/nextjs';
// import { ComponentProps } from 'lib/component-props';

// interface HeroFields {
//   Image: ImageField;
//   Title: Field<string>;
//   Text: Field<string>;
//   ButtonText: Field<string>;
// }

// type HeroProps = ComponentProps & {
//   fields: HeroFields;
// };

// const HeroBanner = (props: HeroProps): JSX.Element => {
//   const { fields, params } = props;
//   const { RenderingIdentifier: id } = params;

//   if (!fields) {
//     return <span>Hero</span>;
//   }

//   return (
//     <section
//       id={id}
//       style={{
//         width: '100%',
//         padding: '80px 20px',
//         background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
//         color: '#ffffff',
//         fontFamily: 'system-ui, sans-serif',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           gap: '40px',
//           flexWrap: 'wrap',
//         }}
//       >
//         {/* LEFT SIDE */}
//         <div
//           style={{
//             flex: '1 1 500px',
//           }}
//         >
//           <h1
//             style={{
//               fontSize: '42px',
//               fontWeight: 700,
//               marginBottom: '20px',
//               lineHeight: '1.2',
//               letterSpacing: '-0.5px',
//             }}
//           >
//             {fields.Title?.value}
//           </h1>

//           <div
//             style={{
//               fontSize: '18px',
//               lineHeight: '1.7',
//               opacity: 0.95,
//               maxWidth: '550px',
//             }}
//           >
//             <ContentSdkRichText field={fields.Text} />
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div
//           style={{
//             flex: '1 1 400px',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <ContentSdkImage
//             field={fields.Image}
//             style={{
//               width: '100%',
//               maxWidth: '500px',
//               height: 'auto',
//               borderRadius: '16px',
//               boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React, { JSX } from 'react';
import Link from 'next/link';
import {
  NextImage as ContentSdkImage,
  RichText as ContentSdkRichText,
  ImageField,
  Field,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface HeroFields {
  Image: ImageField;
  Title: Field<string>;
  Text: Field<string>;
  ButtonText: Field<string>;
  ButtonLink: Field<string>;
}

type HeroProps = ComponentProps & {
  fields: HeroFields;
};

const HeroBanner = (props: HeroProps): JSX.Element => {
  const { fields, params } = props;
  const { RenderingIdentifier: id, Variant } = params;

  if (!fields) {
    return <span>Hero</span>;
  }

  /**
   * VARIANTS
   * default
   * dark
   * light
   * split
   */

  const variantStyles: Record<
    string,
    {
      background: string;
      textColor: string;
      buttonBg: string;
      buttonColor: string;
      secondaryButtonBg: string;
      secondaryButtonColor: string;
    }
  > = {
    dark: {
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      textColor: '#ffffff',
      buttonBg: '#14b8a6',
      buttonColor: '#ffffff',
      secondaryButtonBg: 'transparent',
      secondaryButtonColor: '#ffffff',
    },
    light: {
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      textColor: '#0f172a',
      buttonBg: '#0f766e',
      buttonColor: '#ffffff',
      secondaryButtonBg: 'transparent',
      secondaryButtonColor: '#0f172a',
    },
    split: {
      background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
      textColor: '#ffffff',
      buttonBg: '#ffffff',
      buttonColor: '#1d4ed8',
      secondaryButtonBg: 'transparent',
      secondaryButtonColor: '#ffffff',
    },
    default: {
      background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
      textColor: '#ffffff',
      buttonBg: '#ffffff',
      buttonColor: '#0f766e',
      secondaryButtonBg: 'transparent',
      secondaryButtonColor: '#ffffff',
    },
  };

  const selectedVariant =
    variantStyles[Variant as keyof typeof variantStyles] ||
    variantStyles.default;

  return (
    <section
      id={id}
      style={{
        width: '100%',
        padding: '90px 24px',
        background: selectedVariant.background,
        color: selectedVariant.textColor,
        fontFamily: 'system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: '1 1 520px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
              backdropFilter: 'blur(8px)',
            }}
          >
            Modern Experience Platform
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px, 6vw, 68px)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: '1.05',
              letterSpacing: '-2px',
            }}
          >
            {fields.Title?.value}
          </h1>

          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              opacity: 0.92,
              maxWidth: '620px',
              marginBottom: '36px',
            }}
          >
            <ContentSdkRichText field={fields.Text} />
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {fields.ButtonText?.value && (
              <Link
                href={fields.ButtonLink?.value || '#'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: selectedVariant.buttonBg,
                  color: selectedVariant.buttonColor,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '16px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
                }}
              >
                {fields.ButtonText.value}
              </Link>
            )}

            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 28px',
                borderRadius: '12px',
                border: `1px solid rgba(255,255,255,0.35)`,
                background: selectedVariant.secondaryButtonBg,
                color: selectedVariant.secondaryButtonColor,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                backdropFilter: 'blur(8px)',
              }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: '1 1 420px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />

          <ContentSdkImage
            field={fields.Image}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '560px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;