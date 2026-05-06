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

interface ModuleEightHeroFields {
  ModuleEightHeroIcon: ImageField;
  ModuleEightHeroText: Field<string>;
  ModuleEightHeroLink: LinkField;
  ModuleEightHeroText2: Field<string>;
  ModuleEightHeroIcon2: ImageField;
}

type ModuleEightHeroProps = ComponentProps & {
  fields: ModuleEightHeroFields;
};

interface ModuleEightHeroContentProps extends ModuleEightHeroProps {
  renderText: (fields: ModuleEightHeroFields) => JSX.Element;
}

const ModuleEightHeroContent = (props: ModuleEightHeroContentProps): JSX.Element => {
  const { fields, params, renderText } = props;
  const { styles, RenderingIdentifier: id } = params;

  const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <article
      className={`component module-eight-hero ${styles}`}
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
        <span className="is-empty-hint">ModuleEightHero</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <figure className="field-moduleeightheroicon" itemProp="image">
          <ContentSdkImage field={fields.ModuleEightHeroIcon} />
          <ContentSdkImage field={fields.ModuleEightHeroIcon2} />
        </figure>
        <div className="module-eight-hero-text" itemProp="description">
          {renderText(fields)}
          <h1>Module 8 ModuleEightHero</h1>
        </div>
        <StructuredData
          id={`jsonld-product-${id ?? 'moduleeighthero'}`}
          data={buildProductJsonLd({
            name:
              fields.ModuleEightHeroLink?.value?.title ||
              (fields.ModuleEightHeroText?.value
                ? String(fields.ModuleEightHeroText.value)
                : undefined),
            descriptionHtml: fields.ModuleEightHeroText?.value
              ? String(fields.ModuleEightHeroText.value)
              : undefined,
            url: fields.ModuleEightHeroLink?.value?.href,
            image: (fields.ModuleEightHeroIcon as unknown as {
              value?: { src?: string };
            })?.value?.src,
          })}
        />
      </>
    </Wrapper>
  );
};

export const Default = (props: ModuleEightHeroProps): JSX.Element => {
  const renderText = (fields: ModuleEightHeroFields) => (
    <>
      <div className="field-moduleeightherotext">
        <ContentSdkRichText field={fields.ModuleEightHeroText} />
      </div>
      <div className="field-moduleeightherolink">
        <ContentSdkLink field={fields.ModuleEightHeroLink} />
      </div>
    </>
  );

  return <ModuleEightHeroContent {...props} renderText={renderText} />;
};

export const WithText = (props: ModuleEightHeroProps): JSX.Element => {
  const renderText = (fields: ModuleEightHeroFields) => (
    <>
      <div className="field-moduleeightherotext">
        <ContentSdkRichText className="module-eight-hero-text" field={fields.ModuleEightHeroText} />
      </div>
      <div className="field-moduleeightherotext">
        <ContentSdkRichText className="module-eight-hero-text" field={fields.ModuleEightHeroText2} />
      </div>
    </>
  );

  return <ModuleEightHeroContent {...props} renderText={renderText} />;
};