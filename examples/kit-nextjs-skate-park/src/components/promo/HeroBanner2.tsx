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

const HeroBanner2 = (props: HeroProps): JSX.Element => {
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

export default HeroBanner2;