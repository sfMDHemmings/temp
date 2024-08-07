type CardContentProps = {
    children: React.ReactNode;
    classes?: string;
};

const CardContent = ({ children, classes }: CardContentProps) => {
    return <div className={`card__content${classes ? ` ${classes}` : ''}`}>{children}</div>;
};

export default CardContent;
