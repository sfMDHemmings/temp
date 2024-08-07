'use client';
/**
 * React component for rendering navigation menu
 * @component
 *
 * @param {object} props - The props object containing navigation data
 * @param {Array<Object>} props.navigation - The array of navigation items
 *
 * @returns {JSX.Element} - The Navigation component
 */
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { PrimarymenuDocumentDataNavigationItem, Simplify } from '../../../prismicio-types';

/**
 * Props for the Navigation component
 * @typedef {Object} NavProps
 * @property {Array<Simplify<PrimarymenuDocumentDataNavigationItem>>} navigation - The array of navigation items
 * @property {string} layout - Set layout orientation
 * @property {string} classes - Set optional classes
 * @property {string} variation - Set option for light styled links
 */
interface NavProps {
    navigation?: Array<Simplify<PrimarymenuDocumentDataNavigationItem>>;
    layout?: 'horizontal' | 'vertical' | undefined;
    classes?: string | undefined;
    variation?: 'light' | undefined;
}

/**
 * Props for each navigation item
 * @typedef {Object} NavItemProps
 * @property {Object} menu_item - The menu item object
 * @property {string} [menu_item.uid] - The unique identifier for the menu item
 * @property {string} [menu_item.url] - The URL for the menu item
 * @property {string} [menu_item.link_type] - The type of link for the menu item
 */
interface NavItemProps {
    menu_item: {
        uid?: string;
        // url?: string;
        url?: string;
        link_type?: string;
    };
    menu_label: string | null | undefined;
}

/**
 * Navigation component
 * @param {NavProps} props - The props object containing navigation data
 * @returns {JSX.Element} - The Navigation component
 */
const Nav = ({ navigation, layout, classes, variation }: NavProps) => {
    const pathname = usePathname();

    if (!navigation) return false;

    return (
        <ul
            className={`nav${classes ? ` ${classes}` : ''}`}
            style={{ flexDirection: layout === 'horizontal' ? 'row' : 'column' }}
        >
            {navigation.map((nav: NavItemProps, index: number) => {
                const pageUrl = nav.menu_item.uid === 'home' ? '/' : nav.menu_item.url; // Making this use url fixed the issue
                const navLabel = nav.menu_label ? nav.menu_label : pageUrl;

                if (!pageUrl) return false;
                const isActive = pathname === pageUrl;

                return (
                    <li
                        key={index}
                        className="nav__item"
                    >
                        <Link
                            href={pageUrl}
                            className={`nav__link${variation ? ` nav__link--${variation}` : ''} ${isActive ? 'active' : ''}`}
                        >
                            {navLabel}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;
