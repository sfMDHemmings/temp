import { ReactNode } from 'react';

interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}

const Form = ({ handleSubmit, children }: FormProps) => {
    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
};

export default Form;
