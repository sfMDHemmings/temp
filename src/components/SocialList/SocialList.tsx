import { Simplify, SocialplatformsDocumentData } from '../../../prismicio-types';
import Image from 'next/image';

interface SocialListProps {
    list: Simplify<SocialplatformsDocumentData>;
    layout?: 'horizontal' | 'vertical' | undefined;
    type?: 'icon' | 'text' | undefined;
    variation?: 'light' | undefined;
}

const SocialList = ({ list, layout, type, variation }: SocialListProps) => {
    const { facebook, twitter, instagram, linkedin, tiktok } = list;

    // TODO: Options to have in the SocialList
    // What other social platforms should be added?

    if (facebook === null && twitter === null && instagram === null && linkedin === null && tiktok === null)
        return false;

    return (
        <ul
            className="social"
            style={{ flexDirection: layout === 'horizontal' ? 'row' : 'column' }}
        >
            {facebook && (
                <li className="social__item">
                    <a
                        href={`https://www.facebook.com/${facebook}/`}
                        target="_blank"
                        rel="nofollow"
                        className={`social__link${variation ? ` social__link--${variation}` : ''}`}
                    >
                        {type == 'text' ? (
                            <>{facebook}</>
                        ) : (
                            <>
                                <Image
                                    src="/facebook.svg"
                                    alt="Facebook"
                                    height={20}
                                    width={20}
                                />
                            </>
                        )}
                    </a>
                </li>
            )}
            {twitter && (
                <li className="social__item">
                    <a
                        href={`https://www.twitter.com/${twitter}/`}
                        target="_blank"
                        rel="nofollow"
                        className={`social__link${variation ? ` social__link--${variation}` : ''}`}
                    >
                        {type == 'text' ? (
                            <>{twitter}</>
                        ) : (
                            <Image
                                src="/x.svg"
                                alt="X"
                                height={20}
                                width={20}
                            />
                        )}
                    </a>
                </li>
            )}
            {instagram && (
                <li className="social__item">
                    <a
                        href={`https://www.instagram.com/${instagram}/`}
                        target="_blank"
                        rel="nofollow"
                        className={`social__link${variation ? ` social__link--${variation}` : ''}`}
                    >
                        {type == 'text' ? (
                            <>{instagram}</>
                        ) : (
                            <Image
                                src="/instagram.svg"
                                alt="Instagram"
                                height={20}
                                width={20}
                            />
                        )}
                    </a>
                </li>
            )}
            {linkedin && (
                <li className="social__item">
                    <a
                        href={`https://www.linkedin.com/${linkedin}/`}
                        target="_blank"
                        rel="nofollow"
                        className={`social__link${variation ? ` social__link--${variation}` : ''}`}
                    >
                        {type == 'text' ? (
                            <>{linkedin}</>
                        ) : (
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn"
                                height={20}
                                width={20}
                            />
                        )}
                    </a>
                </li>
            )}
            {tiktok && (
                <li className="social__item">
                    <a
                        href={`https://www.tiktok.com/${tiktok}/`}
                        target="_blank"
                        rel="nofollow"
                        className={`social__link${variation ? ` social__link--${variation}` : ''}`}
                    >
                        {type == 'text' ? (
                            <>{tiktok}</>
                        ) : (
                            <Image
                                src="/tiktok.svg"
                                alt="Tiktok"
                                height={20}
                                width={20}
                            />
                        )}
                    </a>
                </li>
            )}
        </ul>
    );
};

export default SocialList;
