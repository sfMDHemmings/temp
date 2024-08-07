type FormGroupProps = {
    children: React.ReactNode;
};

const FormGroup = ({ children }: FormGroupProps) => {
    return <fieldset className="form-group">{children}</fieldset>;
};

export default FormGroup;
