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
}

const PromoContent = (props: PromoContentProps): JSX.Element => {
  const { fields, params, renderText } = props;
  const { RenderingIdentifier: id } = params;

  const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <article
      id={id}
      itemScope
      itemType="https://schema.org/Product"
      style={{
        maxWidth: '900px',
        margin: '20px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        background: '#ffffff',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {children}
    </article>
  );

  if (!fields) {
    return (
      <Wrapper>
        <div style={{ padding: '20px' }}>Promo</div>
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
          }}
        >
          {/* Image Section */}
          <div
            style={{
              flex: '1 1 300px',
              position: 'relative',
              background: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              gap: '10px',
            }}
            itemProp="image"
          >
            <div style={{ maxWidth: '45%' }}>
              <ContentSdkImage field={fields.PromoIcon} />
            </div>
            <div style={{ maxWidth: '45%' }}>
              <ContentSdkImage field={fields.PromoIcon2} />
            </div>
          </div>

          {/* Content Section */}
          <div
            style={{
              flex: '1 1 400px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            itemProp="description"
          >
            <div
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '12px',
                lineHeight: '1.4',
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
              (fields.PromoText?.value ? String(fields.PromoText.value) : undefined),
            descriptionHtml: fields.PromoText?.value ? String(fields.PromoText.value) : undefined,
            url: fields.PromoLink?.value?.href,
            image: (fields.PromoIcon as unknown as { value?: { src?: string } })?.value?.src,
          })}
        />
      </>
    </Wrapper>
  );
};

export const Default = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div style={{ marginBottom: '16px' }}>
        <ContentSdkRichText field={fields.PromoText} />
      </div>

      <div>
        <ContentSdkLink
          field={fields.PromoLink}
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            background: '#0070f3',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.2s ease',
          }}
        />
      </div>
    </>
  );

  return <PromoContent {...props} renderText={renderText} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <ContentSdkRichText field={fields.PromoText} />
      </div>
      <div style={{ opacity: 0.8 }}>
        <ContentSdkRichText field={fields.PromoText2} />
      </div>
    </>
  );

  return <PromoContent {...props} renderText={renderText} />;
};