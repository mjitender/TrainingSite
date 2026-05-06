import React, { JSX } from 'react';
import { Field, RichText as ContentSdkRichText } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = ComponentProps & {
  fields: Fields;
};

export const Default = ({ params, fields }: RichTextProps): JSX.Element => {
  const { RenderingIdentifier, styles } = params;

  return (
    <div className={`component rich-text ${styles}`} id={RenderingIdentifier}>
      <div className="component-content">
         <div className="component-content">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            background: "linear-gradient(90deg, #0f9d58, #34a853, #66bb6a)",
            color: "white",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ margin: 0 }}>MyApp</h2>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0,
            }}
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item} style={{ cursor: "pointer" }}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>
    </div>
  );
};
