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

const PracticeBanner = (props: HeroProps): JSX.Element => {
  const { fields, params } = props;
  const { RenderingIdentifier: id } = params;

  if (!fields) {
    return <span>Practice Banner</span>;
  }

  return (
    <section
      id={id}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '80px 30px',
        fontFamily: '"Inter", "Poppins", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* TITLE SECTION */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#111827',
              marginBottom: '20px',
              letterSpacing: '-2px',
              lineHeight: '1.1',
            }}
          >
            {fields.Title?.value}
          </h1>
        </div>

        {/* IMAGE + TEXT OVERLAY */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '32px',
            overflow: 'hidden',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* BLURRED IMAGE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
            }}
          >
            <ContentSdkImage
              field={fields.Image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(8px) brightness(0.5)',
                transform: 'scale(1.08)',
              }}
            />
          </div>

          {/* DARK OVERLAY */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom right, rgba(0,0,0,0.45), rgba(0,0,0,0.65))',
            }}
          />

          {/* DESCRIPTION */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '850px',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '22px',
                lineHeight: '2',
                fontWeight: 400,
                color: '#f9fafb',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              <ContentSdkRichText field={fields.Text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeBanner;