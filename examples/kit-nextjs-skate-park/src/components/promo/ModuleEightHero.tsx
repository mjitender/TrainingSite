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

// interface ModuleEightHeroFields {
//   Image: ImageField;
//   ModuleEightHeroText: Field<string>;
//   ModuleEightHeroLink: LinkField;
//   ModuleEightHeroText2: Field<string>;
//   ModuleEightHeroIcon2: ImageField;
// }

// type ModuleEightHeroProps = ComponentProps & {
//   fields: ModuleEightHeroFields;
// };

// interface ModuleEightHeroContentProps extends ModuleEightHeroProps {
//   renderText: (fields: ModuleEightHeroFields) => JSX.Element;
// }

// const ModuleEightHeroContent = (props: ModuleEightHeroContentProps): JSX.Element => {
//   const { fields, params, renderText } = props;
//   const { styles, RenderingIdentifier: id } = params;

//   const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
//     <article
//       className={`component module-eight-hero ${styles}`}
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
//         <span className="is-empty-hint">ModuleEightHero</span>
//       </Wrapper>
//     );
//   }

//   console.log(fields);

//   return (
//     <Wrapper>
//       <>
//         <figure className="field-moduleeightheroicon" itemProp="image">
//           <ContentSdkImage field={fields.Image.value} />
//         </figure>
//         <div className="module-eight-hero-text" itemProp="description">
//           {renderText(fields)}
//           <h1>Module 8 ModuleEightHero</h1>
//         </div>
//         <StructuredData
//           id={`jsonld-product-${id ?? 'moduleeighthero'}`}
//           data={buildProductJsonLd({
//             name:
//               fields.ModuleEightHeroLink?.value?.title ||
//               (fields.ModuleEightHeroText?.value
//                 ? String(fields.ModuleEightHeroText.value)
//                 : undefined),
//             descriptionHtml: fields.ModuleEightHeroText?.value
//               ? String(fields.ModuleEightHeroText.value)
//               : undefined,
//             url: fields.ModuleEightHeroLink?.value?.href,
//             image: (fields.ModuleEightHeroIcon as unknown as {
//               value?: { src?: string };
//             })?.value?.src,
//           })}
//         />
//       </>
//     </Wrapper>
//   );
// };

// export const Default = (props: ModuleEightHeroProps): JSX.Element => {
//   const renderText = (fields: ModuleEightHeroFields) => (
//     <>
//       <div className="field-moduleeightherotext">
//         <ContentSdkRichText field={fields.ModuleEightHeroText} />
//       </div>
//       <div className="field-moduleeightherolink">
//         <ContentSdkLink field={fields.ModuleEightHeroLink} />
//       </div>
//     </>
//   );

//   return <ModuleEightHeroContent {...props} renderText={renderText} />;
// };

// export const WithText = (props: ModuleEightHeroProps): JSX.Element => {
//   const renderText = (fields: ModuleEightHeroFields) => (
//     <>
//       <div className="field-moduleeightherotext">
//         <ContentSdkRichText className="module-eight-hero-text" field={fields.ModuleEightHeroText} />
//       </div>
//       <div className="field-moduleeightherotext">
//         <ContentSdkRichText className="module-eight-hero-text" field={fields.ModuleEightHeroText2} />
//       </div>
//     </>
//   );

//   return <ModuleEightHeroContent {...props} renderText={renderText} />;
// };

import React, { JSX } from 'react';
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
}

type HeroProps = ComponentProps & {
  fields: HeroFields;
};

const HeroBanner = (props: HeroProps): JSX.Element => {
  const { fields, params } = props;
  const { RenderingIdentifier: id } = params;

  if (!fields) {
    return <span>Hero</span>;
  }

  return (
    <section
      id={id}
      style={{
        width: '100%',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
        color: '#ffffff',
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
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: '1 1 500px',
          }}
        >
          <h1
            style={{
              fontSize: '42px',
              fontWeight: 700,
              marginBottom: '20px',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
            }}
          >
            {fields.Title?.value}
          </h1>

          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              opacity: 0.95,
              maxWidth: '550px',
            }}
          >
            <ContentSdkRichText field={fields.Text} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: '1 1 400px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ContentSdkImage
            field={fields.Image}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;