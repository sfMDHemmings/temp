import Link from 'next/link';

type CardProps = {
    children: React.ReactNode;
    classes?: string;
    link?: string;
};

const Card = ({ children, classes, link }: CardProps) => {
    return (
        <article className={`card${classes ? ` ${classes}` : ''}`}>
            {link ? (
                <Link
                    href={link}
                    className="card__link"
                >
                    {children}
                </Link>
            ) : (
                <>{children}</>
            )}
        </article>
    );
};

export default Card;
