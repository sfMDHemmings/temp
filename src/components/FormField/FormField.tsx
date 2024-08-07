import { ReactNode } from 'react';

type FormFieldProps = {
    children: ReactNode;
    half?: boolean | undefined;
};

const FormField = ({ children, half }: FormFieldProps) => {
    return <div className={`form-field${half ? ' form-field--half' : ''}`}>{children}</div>;
};

export default FormField;
