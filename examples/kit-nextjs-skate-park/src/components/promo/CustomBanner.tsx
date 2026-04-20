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
}

type CustomBannerProps = ComponentProps & {
  fields: Fields;
};

interface CustomBannerContentProps extends CustomBannerProps {
  renderText: (fields: Fields) => JSX.Element;
}

const CustomBannerContent = (props: CustomBannerContentProps): JSX.Element => {
  const { fields, params, renderText } = props;
  const { styles, RenderingIdentifier: id } = params;

  const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <article
      className={`component custom-banner ${styles}`}
      id={id}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="component-content">{children}</div>
    </article>
  );

  if (!fields) {
    return (
      <Wrapper>
        <span className="is-empty-hint">CustomBanner</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <figure className="field-promoicon" itemProp="image">
          <ContentSdkImage field={fields.PromoIcon} />
        </figure>
        <div className="promo-text" itemProp="description">
          {renderText(fields)}
        </div>
        <StructuredData
          id={`jsonld-product-${id ?? 'custombanner'}`}
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
      </>
    </Wrapper>
  );
};

export const CustomBanner = (props: CustomBannerProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div className="field-promotext">
        <ContentSdkRichText field={fields.PromoText} />
      </div>
      <div className="field-promolink">
        <ContentSdkLink field={fields.PromoLink} />
      </div>
    </>
  );

  return <CustomBannerContent {...props} renderText={renderText} />;
};

export const CustomBannerWithText = (props: CustomBannerProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div className="field-promotext">
        <ContentSdkRichText className="promo-text" field={fields.PromoText} />
      </div>
      <div className="field-promotext">
        <ContentSdkRichText className="promo-text" field={fields.PromoText2} />
      </div>
    </>
  );

  return <CustomBannerContent {...props} renderText={renderText} />;
};