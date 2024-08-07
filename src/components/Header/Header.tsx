import Image from 'next/image';
import { PrimarymenuDocumentDataNavigationItem, Simplify } from '../../../prismicio-types';
import Link from 'next/link';
import Nav from '../Nav/Nav';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

interface HeaderProps {
    navigation: Array<Simplify<PrimarymenuDocumentDataNavigationItem>>;
    phoneNumber?: string | null;
    logo: any; // TODO: annoying type issue
}

// interface ImageProps {
//   url: string; // Make it optional using '?'
//   alt: string;
//   dimensions: {
//     width: number;
//     height: number;
//   };
// }

const Header = ({ navigation, phoneNumber, logo }: HeaderProps) => {
    return (
        <header className="header">
            <div className="header__socket container">
                <div className="header__socket-col">
                    <Image
                        src="/TrustPilotExample.png"
                        width="270"
                        height="23"
                        alt="TrustPilot Example"
                    />
                </div>
                <div className="header__socket-col">
                    <div>
                        <Image
                            src="https://speedyfreight.com/wp-content/themes/speedy-freight/assets/images/phone_icon.png"
                            width="16"
                            height="16"
                            alt="Phone icon"
                        />
                        <a href="#">{phoneNumber}</a>
                    </div>
                    <div>
                        <Image
                            src="/flags-example.png"
                            width="77"
                            height="23"
                            alt="Flags Example"
                        />
                    </div>
                    <div>
                        <ButtonLink
                            href={`#`}
                            target={null}
                            text="Make payment"
                            buttonStyle={'secondary'}
                            size={'small'}
                        />
                    </div>
                </div>
            </div>
            <div className="header__container container">
                {logo?.url && (
                    <Link href="/">
                        <Image
                            src={logo.url}
                            width={logo?.dimensions?.width}
                            height={logo?.dimensions?.height}
                            alt={logo.alt}
                        />
                    </Link>
                )}
                {navigation && (
                    <div className="header__navigation">
                        <div>
                            <Nav
                                navigation={navigation}
                                layout="horizontal"
                            />
                        </div>
                        <div>
                            <ul className="nav">
                                <li className="nav__item">
                                    <a className="nav__link">Industries</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link">Vehicles</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link">About Us</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link">News</a>
                                </li>
                                <li className="nav__item">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="25"
                                        height="24"
                                        viewBox="0 0 32 31"
                                    >
                                        <defs>
                                            <clipPath id="clip-Web_1920_1">
                                                <rect
                                                    width="32"
                                                    height="31"
                                                ></rect>
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Web_1920_1"
                                            data-name="Web 1920 – 1"
                                            clip-path="url(#clip-Web_1920_1)"
                                        >
                                            <g
                                                id="Group_77"
                                                data-name="Group 77"
                                                transform="translate(-11626.337 -6489.26)"
                                            >
                                                <circle
                                                    id="Ellipse_5"
                                                    data-name="Ellipse 5"
                                                    cx="9.738"
                                                    cy="9.738"
                                                    r="9.738"
                                                    transform="translate(11630.337 6492.26)"
                                                    fill="none"
                                                    stroke="#152256"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                ></circle>
                                                <line
                                                    id="Line_6"
                                                    data-name="Line 6"
                                                    x2="8.375"
                                                    y2="8.375"
                                                    transform="translate(11646.961 6508.884)"
                                                    fill="none"
                                                    stroke="#152256"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                ></line>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
