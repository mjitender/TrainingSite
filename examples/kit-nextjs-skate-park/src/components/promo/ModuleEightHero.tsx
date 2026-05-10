

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

const HeroTemplate = (
  props: HeroProps,
  styles: {
    background: string;
    textColor: string;
    buttonBg: string;
    buttonColor: string;
  }
): JSX.Element => {
  const { fields, params } = props;
  const { RenderingIdentifier: id } = params;

  if (!fields) {
    return <span>Hero Banner</span>;
  }

  return (
    <section
      id={id}
      className={`component hero-banner ${params.styles || ''}`}
      style={{
        width: '100%',
        padding: '90px 24px',
        background: styles.background,
        color: styles.textColor,
        fontFamily: 'system-ui, sans-serif',
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
        {/* LEFT */}
        <div
          style={{
            flex: '1 1 520px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(42px, 6vw, 68px)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: '1.1',
            }}
          >
            {fields.Title?.value}
          </h1>

          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '32px',
              maxWidth: '620px',
            }}
          >
            <ContentSdkRichText field={fields.Text} />
          </div>

          {fields.ButtonText?.value && (
            <Link
              href={fields.ButtonLink?.value || '#'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 28px',
                borderRadius: '12px',
                background: styles.buttonBg,
                color: styles.buttonColor,
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              {fields.ButtonText.value}
            </Link>
          )}
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: '1 1 420px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ContentSdkImage
            field={fields.Image}
            style={{
              width: '100%',
              maxWidth: '560px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

/**
 * DEFAULT VARIANT
 */
export const Default = (props: HeroProps): JSX.Element =>
  HeroTemplate(props, {
    background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
    textColor: '#ffffff',
    buttonBg: '#ffffff',
    buttonColor: '#0f766e',
  });

/**
 * DARK VARIANT
 */
export const Dark = (props: HeroProps): JSX.Element =>
  HeroTemplate(props, {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    textColor: '#ffffff',
    buttonBg: '#14b8a6',
    buttonColor: '#ffffff',
  });

/**
 * LIGHT VARIANT
 */
export const Light = (props: HeroProps): JSX.Element =>
  HeroTemplate(props, {
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
    textColor: '#0f172a',
    buttonBg: '#0f766e',
    buttonColor: '#ffffff',
  });

/**
 * SPLIT VARIANT
 */
export const Split = (props: HeroProps): JSX.Element =>
  HeroTemplate(props, {
    background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
    textColor: '#ffffff',
    buttonBg: '#ffffff',
    buttonColor: '#1d4ed8',
  });

export default Default;