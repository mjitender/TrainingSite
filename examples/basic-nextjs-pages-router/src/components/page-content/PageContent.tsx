import React, { JSX } from 'react';
// import {
//   RichText as ContentSdkRichText,
//   RichTextField,
// } from '@sitecore-content-sdk/nextjs';
// import { ComponentProps } from 'lib/component-props';
// import StructuredData from 'components/structured-data/StructuredData';
// import { buildArticleJsonLd } from 'src/lib/structured-data/schema';

// interface Fields {
//   Content: RichTextField;
// }

// type PageContentProps = ComponentProps & {
//   fields: Fields;
// };

export const Default = (): JSX.Element => {
//   const { styles, RenderingIdentifier: id } = params;

//   const field = fields?.Content ?? (page.layout.sitecore.route?.fields?.Content as RichTextField);
//   const titleField = page.layout.sitecore.route?.fields?.Title as { value?: unknown } | undefined;
//   const headline = titleField?.value ? String(titleField.value) : undefined;
//   const articleBodyHtml = field?.value ? String(field.value) : undefined;

  return (
    <p></p>
  );
};
