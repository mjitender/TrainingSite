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
      'https://edge.sitecorecloud.io/api/graphql/v1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          sc_apikey:
            'QmJpSDRVTFcvWVJHTEowNFF0aWVoQWpjVVpuMlpmQ2pSMC9ES3hDWU83UT18ZXBhbWVtZWF0cmFhOTg0LXRyYWluaW5nc2l0N2Y1OC1kZXY2NGI0LTExYmY=',
        },
        body: JSON.stringify({
          query: `
            query {
              item(
                path: "/sitecore/content/sites/basic-landing-page/Data/Custom Data/CustomRichText/CustomRichText"
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