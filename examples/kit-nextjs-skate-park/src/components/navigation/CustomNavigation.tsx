'use client';
import React from 'react';
import {
  Link,
  LinkField,
  Text,
  TextField,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface NavLinkItem {
  Link: LinkField;
  Label: TextField;
}

interface Fields {
  Title: TextField;
  NavLink1: NavLinkItem;
  NavLink2: NavLinkItem;
  NavLink3: NavLinkItem;
}

interface CustomNavigationProps extends ComponentProps {
  fields: Fields;
}

const NavItem = ({ item }: { item: NavLinkItem }) => {
  const { page } = useSitecore();

  if (!item?.Link) return null;

  return (
    <li className="custom-nav-item">
      <Link field={item.Link} editable={page.mode.isEditing}>
        {item.Label ? <Text field={item.Label} /> : item.Link.value?.title}
      </Link>
    </li>
  );
};

export const CustomNavigation = ({ params, fields }: CustomNavigationProps) => {
  const { styles, RenderingIdentifier: id } = params;

  if (!fields) {
    return (
      <div className={`component custom-navigation ${styles}`} id={id}>
        <div className="component-content">[Custom Navigation]</div>
      </div>
    );
  }

  return (
    <div className={`component custom-navigation ${styles}`} id={id}>
      <div className="custom-nav-container">
        {/* Title */}
        <h2 className="custom-nav-title">
          <Text field={fields.Title} />
        </h2>

        {/* Links */}
        <nav>
          <ul className="custom-nav-list">
            <NavItem item={fields.NavLink1} />
            <NavItem item={fields.NavLink2} />
            <NavItem item={fields.NavLink3} />
          </ul>
        </nav>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .custom-navigation {
          padding: 20px;
        }

        .custom-nav-container {
          background: linear-gradient(135deg, #0f3c68, #1e5fa3);
          border-radius: 12px;
          padding: 20px;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .custom-nav-title {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #cfe8ff;
        }

        .custom-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .custom-nav-item {
          margin-bottom: 10px;
        }

        .custom-nav-item a {
          display: block;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .custom-nav-item a:hover {
          background-color: #4da3ff;
          color: #002b5c;
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};