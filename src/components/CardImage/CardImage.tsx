import Image from 'next/image';

type CardImageProps = {
    src: string | null | undefined;
    alt: string | null | undefined;
    classes?: string;
};

const CardImage = ({ src, alt, classes }: CardImageProps) => {
    const imageSrc = src || '/fallback.png';
    const altText = alt || '';

    return (
        <div className={`card__image${classes ? ` ${classes}` : ''}`}>
            <Image
                src={imageSrc}
                alt={altText}
                fill
            />
        </div>
    );
};

export default CardImage;
