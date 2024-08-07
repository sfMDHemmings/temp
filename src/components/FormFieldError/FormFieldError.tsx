type FormFieldErrorProps = {
    error: string | undefined;
};

const FormFieldError = ({ error }: FormFieldErrorProps) => {
    if (!error) return false;

    return <span className="form-field-error">{error}</span>;
};

export default FormFieldError;
