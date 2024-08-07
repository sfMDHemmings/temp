import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import FormFieldError from '../FormFieldError/FormFieldError';

type SelectProps = {
    options?: string[];
    error?: string | FieldError | undefined;
    errorMsg?: string | undefined;
};

const FormSelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const { options, error, errorMsg, ...otherProps } = props;

    return (
        <>
            <select
                ref={ref}
                className={`form-select form-field--select`}
                {...otherProps}
            >
                {options?.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            {error && <FormFieldError error={errorMsg} />}
        </>
    );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
