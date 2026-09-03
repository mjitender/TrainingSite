import React, { JSX } from 'react';

import { ComponentProps } from 'lib/component-props';

import componentMap from '.sitecore/component-map';

import { AppPlaceholder } from '@sitecore-content-sdk/nextjs';

interface ContainerProps extends ComponentProps {
  params: ComponentProps['params'] & {
    BackgroundImage?: string;
    DynamicPlaceholderId: string;
  };
}

const Container = ({
  params,
  rendering,
  page,
}: ContainerProps): JSX.Element => {
  const {
    styles,
    RenderingIdentifier: id,
    BackgroundImage: backgroundImage,
    DynamicPlaceholderId,
  } = params;

  const phKey = `container-${DynamicPlaceholderId}`;

  // Extract the mediaurl from rendering parameters
  const mediaUrlPattern = new RegExp(/mediaurl=\\"([^"]*)\\"/, 'i');

  let backgroundStyle: { [key: string]: string } = {};

  if (backgroundImage && backgroundImage.match(mediaUrlPattern)) {
    const mediaUrl = backgroundImage.match(mediaUrlPattern)?.[1] || '';

    backgroundStyle = {
      backgroundImage: `url('${mediaUrl}')`,
    };
  }

  return (
    <section
      className={`component container-default ${styles || ''}`}
      id={id}
      style={{
        width: '100%',
        maxWidth: 'none',
        minWidth: 0,
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="component-content"
        style={{
          ...backgroundStyle,
          width: '100%',
          maxWidth: 'none',
          minWidth: 0,
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        }}
      >
        <div
          className="row"
          style={{
            width: '100%',
            maxWidth: 'none',
            minWidth: 0,
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
        >
          <AppPlaceholder
            name={phKey}
            rendering={rendering}
            page={page}
            componentMap={componentMap}
          />
        </div>
      </div>
    </section>
  );
};

export const Default = ({
  params,
  rendering,
  page,
}: ContainerProps): JSX.Element => {
  return (
    <Container
      params={params}
      rendering={rendering}
      page={page}
    />
  );
};