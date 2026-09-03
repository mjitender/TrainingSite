import React from "react";
import {
  ComponentParams,
  ComponentRendering,
  Field,
  Image,
  ImageField,
  Text,
} from "@sitecore-content-sdk/nextjs";

interface ProductsCardFields {
  Title?: Field<string>;

  ProductOneImage?: ImageField;
  ProductOneTitle?: Field<string>;
  ProductOnePrice?: Field<string>;

  ProductTwoImage?: ImageField;
  ProductTwoTitle?: Field<string>;
  ProductTwoPrice?: Field<string>;

  ProductThreeImage?: ImageField;
  ProductThreeTitle?: Field<string>;
  ProductThreePrice?: Field<string>;

  ProductFourImage?: ImageField;
  ProductFourTitle?: Field<string>;
  ProductFourPrice?: Field<string>;
}

interface ProductsCardProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: ProductsCardFields;
}

interface Product {
  image?: ImageField;
  title?: Field<string>;
  price?: Field<string>;
  rating: string;
  oldPrice?: string;
  discount?: string;
}

export const Default = ({
  fields,
  params,
}: ProductsCardProps): React.ReactElement => {
  console.log(fields);
  const products: Product[] = [
    {
      image: fields.ProductOneImage,
      title: fields.ProductOneTitle,
      price: fields.ProductOnePrice,
      rating: "4.5/5",
    },
    {
      image: fields.ProductTwoImage,
      title: fields.ProductTwoTitle,
      price: fields.ProductTwoPrice,
      rating: "3.5/5",
      oldPrice: "$260",
      discount: "-20%",
    },
    {
      image: fields.ProductThreeImage,
      title: fields.ProductThreeTitle,
      price: fields.ProductThreePrice,
      rating: "4.5/5",
    },
    {
      image: fields.ProductFourImage,
      title: fields.ProductFourTitle,
      price: fields.ProductFourPrice,
      rating: "4.5/5",
      oldPrice: "$160",
      discount: "-30%",
    },
  ];

  const styles = params?.Styles ?? "";
  const gridParameters = params?.GridParameters ?? "";
  const renderingIdentifier = params?.RenderingIdentifier ?? "";

  return (
    <>
      <style>{`
  .products-card,
  .products-card *,
  .products-card *::before,
  .products-card *::after {
    box-sizing: border-box;
  }

  .products-card {
    width: 100%;
    max-width: 100%;
    padding: 48px 24px 40px;
    background: #ffffff;
    overflow-x: hidden;
  }

  .products-card__inner {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  }

  .products-card__heading {
    margin: 0 0 36px;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 34px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.2px;
    text-align: center;
    text-transform: uppercase;
  }

  .products-card__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;
    gap: 14px;
  }

  .products-card__item {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }

  .products-card__image-wrapper {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 12px;
    background: #f1eeee;
  }

  .products-card__image-wrapper img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .products-card__title {
    width: 100%;
    max-width: 100%;
    margin-top: 12px;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: break-word;
  }

  .products-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 17px;
    max-width: 100%;
    margin-top: 5px;
    overflow: hidden;
  }

  .products-card__stars {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    color: #fbbd17;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -1.5px;
    white-space: nowrap;
  }

  .products-card__rating-value {
    flex-shrink: 0;
    color: #555555;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    line-height: 1;
    white-space: nowrap;
  }

  .products-card__price {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    max-width: 100%;
    margin-top: 6px;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  }

  .products-card__old-price {
    color: #999999;
    font-size: 16px;
    font-weight: 500;
    text-decoration: line-through;
  }

  .products-card__discount {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 3px 7px;
    border-radius: 999px;
    background: #fff0f0;
    color: #ff6b6b;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9px;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
  }

  .products-card__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    max-width: 100%;
    height: 38px;
    margin: 38px auto 0;
    padding: 0 20px;
    border: 1px solid #e4e4e4;
    border-radius: 999px;
    background: #ffffff;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
  }

  .products-card__button:hover {
    border-color: #d5d5d5;
    background: #f7f7f7;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .products-card {
      padding: 42px 20px 36px;
    }

    .products-card__inner {
      width: min(600px, 100%);
    }

    .products-card__heading {
      margin-bottom: 30px;
      font-size: 30px;
    }

    .products-card__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px 14px;
    }

    .products-card__button {
      margin-top: 32px;
    }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .products-card {
      width: 100%;
      max-width: 100%;
      padding: 34px 10px 28px;
      overflow-x: hidden;
    }

    .products-card__inner {
      width: min(264px, 100%);
      max-width: 100%;
      margin-right: auto;
      margin-left: auto;
    }

    .products-card__heading {
      width: 100%;
      max-width: 100%;
      margin-bottom: 22px;
      font-size: 24px;
      letter-spacing: -0.8px;
    }

    .products-card__grid {
      width: 100%;
      max-width: 100%;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px 10px;
    }

    .products-card__item {
      min-width: 0;
      max-width: 100%;
    }

    .products-card__image-wrapper {
      width: 100%;
      max-width: 100%;
      border-radius: 10px;
    }

    .products-card__image-wrapper img {
      max-width: 100%;
    }

    .products-card__title {
      margin-top: 9px;
      font-size: 12px;
    }

    .products-card__rating {
      gap: 4px;
      margin-top: 4px;
    }

    .products-card__stars {
      font-size: 12px;
      letter-spacing: -1.2px;
    }

    .products-card__rating-value {
      font-size: 9px;
    }

    .products-card__price {
      gap: 5px;
      margin-top: 5px;
      font-size: 16px;
    }

    .products-card__old-price {
      font-size: 14px;
    }

    .products-card__discount {
      padding: 3px 5px;
      font-size: 8px;
    }

    .products-card__button {
      width: 100%;
      max-width: 100%;
      height: 34px;
      margin-top: 28px;
    }
  }
`}</style>

      <section
        className={`component products-card ${gridParameters} ${styles}`.trim()}
        id={renderingIdentifier || undefined}
      >
        <div className="component-content products-card__inner">
          {fields.Title && (
            <Text
              tag="h2"
              className="products-card__heading"
              field={fields.Title}
            />
          )}

          <div className="products-card__grid">
            {products.map((product, index) => (
              <article className="products-card__item" key={index}>
                {product.image && (
                  <div className="products-card__image-wrapper">
                    <Image
                      field={product.image}
                      srcSet={[{ mw: 240 }, { mw: 480 }, { mw: 720 }]}
                      sizes="
                        (max-width: 480px) calc(50vw - 15px),
                        (max-width: 900px) calc(50vw - 30px),
                        260px
                      "
                    />
                  </div>
                )}

                {product.title && (
                  <div className="products-card__title">
                    <Text field={product.title} />
                  </div>
                )}

                <div className="products-card__rating">
                  <span className="products-card__stars" aria-hidden="true">
                    ★★★★★
                  </span>

                  <span className="products-card__rating-value">
                    {product.rating}
                  </span>
                </div>

                {product.price && (
                  <div className="products-card__price">
                    <Text field={product.price} />

                    {product.oldPrice && (
                      <span className="products-card__old-price">
                        {product.oldPrice}
                      </span>
                    )}

                    {product.discount && (
                      <span className="products-card__discount">
                        {product.discount}
                      </span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>

          <button type="button" className="products-card__button">
            View All
          </button>
        </div>
      </section>
    </>
  );
};
