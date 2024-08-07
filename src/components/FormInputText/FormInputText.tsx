import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import FormFieldError from '../FormFieldError/FormFieldError';

type FormTextInputProps = {
    type: 'text' | 'email' | 'number' | 'url' | 'tel' | 'date' | 'hidden' | 'password' | 'range' | 'search';
    placeholder?: string;
    error?: string | FieldError | undefined;
    errorMsg?: string | undefined;
};

const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>((props, ref) => {
    const { type, placeholder, error, errorMsg, ...otherProps } = props;

    return (
        <>
            <input
                ref={ref}
                type={type}
                className={`form-input-text form-field--${type}`}
                placeholder={placeholder}
                {...otherProps}
            />
            {error && <FormFieldError error={errorMsg} />}
        </>
    );
});

FormTextInput.displayName = 'FormTextInput';

export default FormTextInput;
