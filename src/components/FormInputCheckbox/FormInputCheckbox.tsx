import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import FormFieldError from '../FormFieldError/FormFieldError';

type FormInputCheckboxProps = {
    label?: string;
    error?: string | FieldError | undefined;
    errorMsg?: string | undefined;
};

const FormInputCheckbox = forwardRef<HTMLInputElement, FormInputCheckboxProps>((props, ref) => {
    const { label, error, errorMsg, ...otherProps } = props;
    const name = (otherProps as { name: string }).name;

    return (
        <>
            <div className="form-input-checkbox">
                <input
                    ref={ref}
                    type="checkbox"
                    className={`form-input-checkbox__input form-field--checkbox`}
                    {...otherProps}
                />
                {label && (
                    <label
                        htmlFor={name}
                        className="form-input-checkbox__label"
                    >
                        {label}
                    </label>
                )}
            </div>
            {error && <FormFieldError error={errorMsg} />}
        </>
    );
});

FormInputCheckbox.displayName = 'FormInputCheckbox';

export default FormInputCheckbox;
