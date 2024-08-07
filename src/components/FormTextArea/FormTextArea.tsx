import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import FormFieldError from '../FormFieldError/FormFieldError';

type FormTextAreaProps = {
    placeholder?: string;
    error?: string | FieldError | undefined;
    errorMsg?: string | undefined;
};

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>((props, ref) => {
    const { placeholder, error, errorMsg, ...otherProps } = props;

    return (
        <>
            <textarea
                ref={ref}
                className={`form-text form-field--textarea`}
                placeholder={placeholder}
                {...otherProps}
            />
            {error && <FormFieldError error={errorMsg} />}
        </>
    );
});

FormTextArea.displayName = 'FormTextArea';

export default FormTextArea;
