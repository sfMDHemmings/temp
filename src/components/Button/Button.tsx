type ButtonProps = {
    type: 'submit' | 'text' | 'reset';
    value?: string;
    buttonStyle?: 'primary' | 'secondary' | undefined;
    size: 'default' | 'small' | 'large';
};

const Button = ({ type, value, size, buttonStyle }: ButtonProps) => {
    return (
        <input
            type={type}
            className={`button button--${buttonStyle} ${size ? `button--${size}` : ''}`}
            value={value}
        />
    );
};

export default Button;
