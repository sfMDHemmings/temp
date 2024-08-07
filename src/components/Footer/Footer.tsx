import { Simplify, SocialplatformsDocumentData, FootermenuDocumentDataNavigationItem } from '../../../prismicio-types';
import Nav from '../Nav/Nav';
import SocialList from '../SocialList/SocialList';

interface FooterProps {
    navigation?: Array<Simplify<FootermenuDocumentDataNavigationItem>>;
    social?: Simplify<SocialplatformsDocumentData>;
    copyright?: string;
}

const Footer = ({ navigation, social, copyright }: FooterProps) => {
    // TODO: Options to have in the footer
    // Footer Navigation          DONE
    // Secondary Navigation
    // Social                     DONE
    // Copyright

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__col">
                    <Nav
                        navigation={navigation}
                        layout="vertical"
                        classes="footer--nav"
                        variation="light"
                    />
                </div>
                {social && (
                    <div className="footer__col">
                        <SocialList
                            list={social}
                            layout="horizontal"
                            type="icon"
                            variation="light"
                        />
                    </div>
                )}
            </div>
            <div className="container">{copyright && <span className="footer--copyright">{copyright}</span>}</div>
        </footer>
    );
};

export default Footer;
