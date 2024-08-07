import Link from 'next/link';

interface ButtonLinkProps {
    // href: { url: string };
    href: any; // TODO: had to add this to fix Type error which only applied on FeatureGrid, but fine of HeroText... weird!
    target?: string | any;
    text: string;
    buttonStyle?: 'primary' | 'secondary' | string;
    size: 'default' | 'small' | 'large';
}

/**
 * ButtonLink component that uses Next.js Link.
 *
 * @component
 *
 * @param {Object} props - The properties object for the Button component.
 * @param {string} props.href - The URL that the button should link to.
 * @param {string} props.target - (Optional) The target attribute for the link. Defaults to `_self`.
 * @param {string} props.text - The text content of the button.
 * @param {string} props.buttonStyle - The style of the button. Possible values are "primary", "primary-alt", "secondary", and "text".
 *
 * @returns {JSX.Element} The rendered Button component.
 */
const ButtonLink = ({ href, target, text, size, buttonStyle }: ButtonLinkProps) => {
    return (
        <Link
            // href={href.url ? href.url : href}
            href={`${href.url}`}
            target={target ? target : undefined}
            className={`button button--${buttonStyle} ${size ? `button--${size}` : ''}`}
        >
            {text}
        </Link>
    );
};

export default ButtonLink;
