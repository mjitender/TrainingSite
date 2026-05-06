import React, { JSX, CSSProperties } from 'react';
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
}

type ModuleEightHeroProps = ComponentProps & {
  fields: Fields;
};

/* ================= Inline Styles ================= */

const styles: Record<string, CSSProperties> = {
  wrapper: {
    padding: '48px 24px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
    flexWrap: 'wrap',
  },
  left: {
    flex: 1,
    minWidth: '280px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '1.3',
    marginBottom: '16px',
  },
  cta: {
    display: 'inline-block',
    marginTop: '12px',
    padding: '10px 18px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    borderRadius: '8px',
    fontWeight: 600,
    textDecoration: 'none',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: '240px',
  },
  image: {
    maxWidth: '260px',
    width: '100%',
    height: 'auto',
  },
};

/* ================= Component ================= */

export const ModuleEightHero = (props: ModuleEightHeroProps): JSX.Element => {
  const { fields, params } = props;
  const { RenderingIdentifier: id } = params;

  if (!fields) {
    return <div>ModuleEightHero</div>;
  }

  return (
    <section
      style={styles.wrapper}
      id={id}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Left Content */}
      <div style={styles.left} itemProp="description">
        <div style={styles.heading}>
          <ContentSdkRichText field={fields.PromoText} />
        </div>

        <div style={styles.cta}>
          <ContentSdkLink field={fields.PromoLink} />
        </div>
      </div>

      {/* Right Image */}
      <div style={styles.right} itemProp="image">
        <ContentSdkImage field={fields.PromoIcon} style={styles.image} />
      </div>

      {/* Structured Data */}
      <StructuredData
        id={`jsonld-product-${id ?? 'moduleeighthero'}`}
        data={buildProductJsonLd({
          name:
            fields.PromoLink?.value?.title ||
            (fields.PromoText?.value ? String(fields.PromoText.value) : undefined),
          descriptionHtml: fields.PromoText?.value
            ? String(fields.PromoText.value)
            : undefined,
          url: fields.PromoLink?.value?.href,
          image: (fields.PromoIcon as unknown as { value?: { src?: string } })?.value?.src,
        })}
      />
    </section>
  );
};