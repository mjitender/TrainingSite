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
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #1e293b, #334155)',
        color: '#f8fafc',
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1250px',
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
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 800,
              marginBottom: '28px',
              lineHeight: '1.15',
              letterSpacing: '-1px',
            }}
          >
            {fields.Title?.value}
          </h1>

          <div
            style={{
              fontSize: '19px',
              lineHeight: '1.9',
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: '600px',
            }}
          >
            <ContentSdkRichText field={fields.Text} />
          </div>
        </div>

        {/* RIGHT SIDE */}
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
              maxWidth: '520px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
              border: '4px solid rgba(255,255,255,0.08)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;