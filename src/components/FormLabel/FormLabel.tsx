import { ReactNode } from 'react';

type FormLabelProps = {
    children: ReactNode;
    name: string;
};

const FormLabel = ({ children, name }: FormLabelProps) => {
    return (
        <label
            htmlFor={name}
            className="form-label"
        >
            {children}
        </label>
    );
};

export default FormLabel;
