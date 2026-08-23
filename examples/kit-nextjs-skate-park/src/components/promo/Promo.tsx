// import React, { JSX } from 'react';
// import {
//   NextImage as ContentSdkImage,
//   Link as ContentSdkLink,
//   RichText as ContentSdkRichText,
//   ImageField,
//   Field,
//   LinkField,
// } from '@sitecore-content-sdk/nextjs';
// import { ComponentProps } from 'lib/component-props';
// import StructuredData from 'components/structured-data/StructuredData';
// import { buildProductJsonLd } from 'src/lib/structured-data/schema';

// interface Fields {
//   PromoIcon: ImageField;
//   PromoText: Field<string>;
//   PromoLink: LinkField;
//   PromoText2: Field<string>;
//   PromoIcon2: ImageField;
// }

// type PromoProps = ComponentProps & {
//   fields: Fields;
// };

// interface PromoContentProps extends PromoProps {
//   renderText: (fields: Fields) => JSX.Element;
// }

// const PromoContent = (props: PromoContentProps): JSX.Element => {
//   const { fields, params, renderText } = props;
//   const { styles, RenderingIdentifier: id } = params;

//   const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
//     <article
//       className={`component promo ${styles}`}
//       id={id}
//       itemScope
//       itemType="https://schema.org/Product"
//     >
//       <div className="component-content">{children}</div>
//     </article>
//   );

//   if (!fields) {
//     return (
//       <Wrapper>
//         <span className="is-empty-hint">Promo</span>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <>
//         <figure className="field-promoicon" itemProp="image">
//           <ContentSdkImage field={fields.PromoIcon} />
//           <ContentSdkImage field={fields.PromoIcon2}/>
//         </figure>
//         <div className="promo-text" itemProp="description">
//           {renderText(fields)}
//         </div>
//         <StructuredData
//           id={`jsonld-product-${id ?? 'promo'}`}
//           data={buildProductJsonLd({
//             name:
//               fields.PromoLink?.value?.title ||
//               (fields.PromoText?.value ? String(fields.PromoText.value) : undefined),
//             descriptionHtml: fields.PromoText?.value ? String(fields.PromoText.value) : undefined,
//             url: fields.PromoLink?.value?.href,
//             image: (fields.PromoIcon as unknown as { value?: { src?: string } })?.value?.src,
//           })}
//         />
//       </>
//     </Wrapper>
//   );
// };

// export const Default = (props: PromoProps): JSX.Element => {
//   const renderText = (fields: Fields) => (
//     <>
//       <div className="field-promotext">
//         <ContentSdkRichText field={fields.PromoText} />
//       </div>
//       <div className="field-promolink">
//         <ContentSdkLink field={fields.PromoLink} />
//       </div>
//     </>
//   );

//   return <PromoContent {...props} renderText={renderText} />;
// };

// export const WithText = (props: PromoProps): JSX.Element => {
//   const renderText = (fields: Fields) => (
//     <>
//       <div className="field-promotext">
//         <ContentSdkRichText className="promo-text" field={fields.PromoText} />
//       </div>
//       <div className="field-promotext">
//         <ContentSdkRichText className="promo-text" field={fields.PromoText2} />
//       </div>
//     </>
//   );

//   return <PromoContent {...props} renderText={renderText} />;
// };


//-------------------------------------Version Two-------------------------------------------------------------

// import React, { JSX } from 'react';
// import {
//   NextImage as ContentSdkImage,
//   Link as ContentSdkLink,
//   RichText as ContentSdkRichText,
//   ImageField,
//   Field,
//   LinkField,
// } from '@sitecore-content-sdk/nextjs';
// import { ComponentProps } from 'lib/component-props';
// import StructuredData from 'components/structured-data/StructuredData';
// import { buildProductJsonLd } from 'src/lib/structured-data/schema';

// interface Fields {
//   PromoIcon: ImageField;
//   PromoText: Field<string>;
//   PromoLink: LinkField;
//   PromoText2: Field<string>;
//   PromoIcon2: ImageField;
// }

// type PromoProps = ComponentProps & {
//   fields: Fields;
// };

// interface PromoContentProps extends PromoProps {
//   renderText: (fields: Fields) => JSX.Element;
// }

// const PromoContent = (props: PromoContentProps): JSX.Element => {
//   const { fields, params, renderText } = props;
//   const { RenderingIdentifier: id } = params;

//   const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
//     <article
//       id={id}
//       itemScope
//       itemType="https://schema.org/Product"
//       style={{
//         maxWidth: '900px',
//         margin: '20px auto',
//         borderRadius: '16px',
//         overflow: 'hidden',
//         boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
//         background: '#ffffff',
//         fontFamily: 'system-ui, sans-serif',
//       }}
//     >
//       {children}
//     </article>
//   );

//   if (!fields) {
//     return (
//       <Wrapper>
//         <div style={{ padding: '20px' }}>Promo</div>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <>
//         <div
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//           }}
//         >
//           {/* Image Section */}
//           <div
//             style={{
//               flex: '1 1 300px',
//               position: 'relative',
//               background: '#f5f5f5',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '20px',
//               gap: '10px',
//             }}
//             itemProp="image"
//           >
//             <div style={{ maxWidth: '45%' }}>
//               <ContentSdkImage field={fields.PromoIcon} />
//             </div>
//             <div style={{ maxWidth: '45%' }}>
//               <ContentSdkImage field={fields.PromoIcon2} />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div
//             style={{
//               flex: '1 1 400px',
//               padding: '30px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//             itemProp="description"
//           >
//             <div
//               style={{
//                 fontSize: '20px',
//                 fontWeight: 600,
//                 marginBottom: '12px',
//                 lineHeight: '1.4',
//               }}
//             >
//               {renderText(fields)}
//             </div>
//           </div>
//         </div>

//         <StructuredData
//           id={`jsonld-product-${id ?? 'promo'}`}
//           data={buildProductJsonLd({
//             name:
//               fields.PromoLink?.value?.title ||
//               (fields.PromoText?.value ? String(fields.PromoText.value) : undefined),
//             descriptionHtml: fields.PromoText?.value ? String(fields.PromoText.value) : undefined,
//             url: fields.PromoLink?.value?.href,
//             image: (fields.PromoIcon as unknown as { value?: { src?: string } })?.value?.src,
//           })}
//         />
//       </>
//     </Wrapper>
//   );
// };

// export const Default = (props: PromoProps): JSX.Element => {
//   const renderText = (fields: Fields) => (
//     <>
//       <div style={{ marginBottom: '16px' }}>
//         <ContentSdkRichText field={fields.PromoText} />
//       </div>

//       <div>
//         <ContentSdkLink
//           field={fields.PromoLink}
//           style={{
//             display: 'inline-block',
//             padding: '10px 18px',
//             background: '#0070f3',
//             color: '#fff',
//             borderRadius: '8px',
//             textDecoration: 'none',
//             fontWeight: 500,
//             transition: 'all 0.2s ease',
//           }}
//         />
//       </div>
//     </>
//   );

//   return <PromoContent {...props} renderText={renderText} />;
// };

// export const WithText = (props: PromoProps): JSX.Element => {
//   const renderText = (fields: Fields) => (
//     <>
//       <div style={{ marginBottom: '10px' }}>
//         <ContentSdkRichText field={fields.PromoText} />
//       </div>
//       <div style={{ opacity: 0.8 }}>
//         <ContentSdkRichText field={fields.PromoText2} />
//       </div>
//     </>
//   );

//   return <PromoContent {...props} renderText={renderText} />;
// };

//----------------------------------------------------------------------------------------------

import React, { JSX } from 'react';
import {
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

import { ComponentProps } from 'lib/component-props';
import StructuredData from 'components/structured-data/StructuredData';
import { buildProductJsonLd } from 'src/lib/structured-data/schema';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
  PromoIcon2: ImageField;
}

type PromoProps = ComponentProps & {
  fields: Fields;
};

interface PromoContentProps extends PromoProps {
  renderText: (fields: Fields) => JSX.Element;
  variant?: 'default' | 'glass' | 'dark';
}

const PromoContent = (props: PromoContentProps): JSX.Element => {
  const { fields, params, renderText, variant = 'default' } = props;
  const { RenderingIdentifier: id } = params;

  const variants = {
    default: {
      background: '#ffffff',
      border: '1px solid rgba(15, 23, 42, 0.06)',
      contentBg: '#ffffff',
      imageBg: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      textColor: '#0f172a',
    },

    glass: {
      background: 'rgba(255,255,255,0.7)',
      border: '1px solid rgba(255,255,255,0.25)',
      contentBg: 'rgba(255,255,255,0.4)',
      imageBg: 'linear-gradient(135deg, #0f766e, #14b8a6)',
      textColor: '#0f172a',
    },

    dark: {
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.08)',
      contentBg: '#111827',
      imageBg: 'linear-gradient(135deg, #1e293b, #334155)',
      textColor: '#ffffff',
    },
  };

  const selectedVariant = variants[variant];

  const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <article
      id={id}
      itemScope
      itemType="https://schema.org/Product"
      style={{
        maxWidth: '1180px',
        margin: '40px auto',
        borderRadius: '28px',
        overflow: 'hidden',
        background: selectedVariant.background,
        border: selectedVariant.border,
        boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {children}
    </article>
  );

  if (!fields) {
    return (
      <Wrapper>
        <div style={{ padding: '40px' }}>Promo</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '420px',
          }}
        >
          {/* IMAGE SIDE */}
          <div
            itemProp="image"
            style={{
              flex: '1 1 420px',
              background: selectedVariant.imageBg,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '50px',
              overflow: 'hidden',
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.18)',
                filter: 'blur(70px)',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '220px',
                  maxWidth: '100%',
                  transform: 'rotate(-6deg)',
                }}
              >
                <ContentSdkImage
                  field={fields.PromoIcon}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    background: '#fff',
                    display: 'block',
                  }}
                />
              </div>

              <div
                style={{
                  width: '220px',
                  maxWidth: '100%',
                  transform: 'rotate(6deg)',
                }}
              >
                <ContentSdkImage
                  field={fields.PromoIcon2}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    background: '#fff',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div
            itemProp="description"
            style={{
              flex: '1 1 500px',
              padding: '64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: selectedVariant.contentBg,
              color: selectedVariant.textColor,

              /**
               * TEXT WRAPPING FIX
               */
              minWidth: 0,
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: 'fit-content',
                maxWidth: '100%',
                padding: '8px 14px',
                borderRadius: '999px',
                background:
                  variant === 'dark'
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(15,23,42,0.06)',
                marginBottom: '24px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'normal',
              }}
            >
              Featured Promotion
            </div>

            <div
              style={{
                width: '100%',
                maxWidth: '100%',
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
              }}
            >
              {renderText(fields)}
            </div>
          </div>
        </div>

        <StructuredData
          id={`jsonld-product-${id ?? 'promo'}`}
          data={buildProductJsonLd({
            name:
              fields.PromoLink?.value?.title ||
              (fields.PromoText?.value
                ? String(fields.PromoText.value)
                : undefined),

            descriptionHtml: fields.PromoText?.value
              ? String(fields.PromoText.value)
              : undefined,

            url: fields.PromoLink?.value?.href,

            image: (
              fields.PromoIcon as unknown as {
                value?: { src?: string };
              }
            )?.value?.src,
          })}
        />
      </>
    </Wrapper>
  );
};

/**
 * DEFAULT VARIANT
 */
export const Default = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div
        style={{
          marginBottom: '28px',
          fontSize: '18px',
          lineHeight: '1.8',
          opacity: 0.92,
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <ContentSdkRichText field={fields.PromoText} />
      </div>

      <div>
        <ContentSdkLink
          field={fields.PromoLink}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 28px',
            borderRadius: '14px',
            background: '#0f766e',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            boxShadow: '0 10px 30px rgba(15,118,110,0.3)',
          }}
        />
      </div>
    </>
  );

  return (
    <PromoContent
      {...props}
      renderText={renderText}
      variant="default"
    />
  );
};

/**
 * GLASS VARIANT
 */
export const Glass = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          lineHeight: '1.8',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <ContentSdkRichText field={fields.PromoText} />
      </div>

      <div
        style={{
          opacity: 0.75,
          marginBottom: '32px',
          fontSize: '16px',
          lineHeight: '1.7',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <ContentSdkRichText field={fields.PromoText2} />
      </div>

      <ContentSdkLink
        field={fields.PromoLink}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          maxWidth: '100%',
          padding: '16px 30px',
          borderRadius: '14px',
          background: '#111827',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: 700,
        }}
      />
    </>
  );

  return (
    <PromoContent
      {...props}
      renderText={renderText}
      variant="glass"
    />
  );
};

/**
 * DARK VARIANT
 */
export const Dark = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div
        style={{
          marginBottom: '22px',
          fontSize: '18px',
          lineHeight: '1.8',
          opacity: 0.92,
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <ContentSdkRichText field={fields.PromoText} />
      </div>

      <div
        style={{
          opacity: 0.7,
          marginBottom: '32px',
          fontSize: '16px',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <ContentSdkRichText field={fields.PromoText2} />
      </div>

      <ContentSdkLink
        field={fields.PromoLink}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          maxWidth: '100%',
          padding: '16px 30px',
          borderRadius: '14px',
          background: '#14b8a6',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: 700,
          boxShadow: '0 10px 30px rgba(20,184,166,0.3)',
        }}
      />
    </>
  );

  return (
    <PromoContent
      {...props}
      renderText={renderText}
      variant="dark"
    />
  );
};

export default Default;