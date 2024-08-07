type GridProps = {
    children: React.ReactNode;
    classes?: string;
};

const Grid = ({ children, classes }: GridProps) => {
    return <div className={`grid container${classes ? ` ${classes}` : ''}`}>{children}</div>;
};

export default Grid;
