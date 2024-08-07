import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import FormFieldError from '../FormFieldError/FormFieldError';

type FormInputRadioProps = {
    // label?: string;
    value?: string;
    error?: string | FieldError | undefined;
    errorMsg?: string | undefined;
};

const FormInputRadio = forwardRef<HTMLInputElement, FormInputRadioProps>((props, ref) => {
    const { value, error, errorMsg, ...otherProps } = props;
    const name = (otherProps as { name: string }).name;

    return (
        <>
            <div className="form-input-radio">
                <input
                    ref={ref}
                    type="radio"
                    className={`form-input-radio__input form-field--radio`}
                    value={value}
                    {...otherProps}
                />
                {value && (
                    <label
                        htmlFor={name}
                        className="form-input-radio__label"
                    >
                        {value}
                    </label>
                )}
            </div>
            {error && <FormFieldError error={errorMsg} />}
        </>
    );
});

FormInputRadio.displayName = 'FormInputRadio';

export default FormInputRadio;
