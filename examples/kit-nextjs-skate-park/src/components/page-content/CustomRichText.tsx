import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { RichText as ContentSdkRichText } from '@sitecore-content-sdk/nextjs';
 
interface RichTextBlockAProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}
 
export const Default = (props: RichTextBlockAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  // const text = props.rendering.fields?.text.value;
 
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
       <h1>This is a custom component</h1>
      </div>
    </div>
  );
};