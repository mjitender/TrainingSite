// import React, { JSX } from 'react';
// import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
// import { RichText as ContentSdkRichText } from '@sitecore-content-sdk/nextjs';
 
// interface RichTextBlockAProps {
//   rendering: ComponentRendering & { params: ComponentParams };
//   params: ComponentParams;
// }
 
// export const Default = (props: RichTextBlockAProps): JSX.Element => {
//   const id = props.params.RenderingIdentifier;
//   // const text = props.rendering.fields?.text.value;
//   console.log(props);
 
//   return (
//     <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
//       <div className="component-content">
//         <h1>This is the custom Rich Text Component</h1>
//       </div>
//     </div>
//   );
// };

import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface RichTextBlockAProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = async (props: RichTextBlockAProps): Promise<JSX.Element> => {
  const id = props.params.RenderingIdentifier;

  let data: { title?: string; para?: string } = {};

  try {
    const res = await fetch(
      'https://xmc-epamemeatraa984-trainingsit7f58-dev64b4.sitecorecloud.io/sitecore/api/graph/edge',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          sc_apikey:
            '9ba91875508f47e8834aa323fef2a28b',
        },
        body: JSON.stringify({
          query: `
            query {
              item(
                path: "/sitecore/content/sites/basic-landing-page/Data/Custom Data/CustomRichText/NewCustomRichText"
                language: "en"
              ) {
                title: field(name: "Title") {
                  value
                }
                para: field(name: "Para") {
                  value
                }
              }
            }
          `,
        }),
        cache: 'no-store', // optional (for fresh data)
      }
    );

    const json = await res.json();

    data = {
      title: json?.data?.item?.title?.value,
      para: json?.data?.item?.para?.value,
    };
  } catch (err) {
    console.error('GraphQL fetch error:', err);
  }

  return (
    <div className={`component ${props.params.styles}`} id={id || undefined}>
      <div className="component-content">
        <h1>{data.title || 'No Title'}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.para || '' }} />
      </div>
    </div>
  );
};