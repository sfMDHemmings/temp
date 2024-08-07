'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import Form from '../../components/../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import FormLabel from '../../components/FormLabel/FormLabel';
import FormInputText from '@/components/FormInputText/FormInputText';
import FormTextArea from '../../components/FormTextArea/FormTextArea';
import Button from '../../components/Button/Button';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

type FormFieldsProps = {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
};

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFieldsProps>();

    const onSubmit: SubmitHandler<FormFieldsProps> = data => console.log(data);

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="slice"
        >
            <Form handleSubmit={handleSubmit(onSubmit)}>
                <FormField half>
                    <FormLabel name="firstName">First name</FormLabel>
                    <FormInputText
                        type="text"
                        {...register('firstName', { required: true })}
                        error={errors.firstName}
                        errorMsg="This field is required"
                    />
                </FormField>
                <FormField half>
                    <FormLabel name="lastName">Last name</FormLabel>
                    <FormInputText
                        type="text"
                        {...register('lastName', { required: true })}
                        error={errors.lastName}
                        errorMsg="This field is required"
                    />
                </FormField>
                <FormField>
                    <FormLabel name="email">Email address</FormLabel>
                    <FormInputText
                        type="email"
                        {...register('email', { required: true })}
                        error={errors.email}
                        errorMsg="Email address is required"
                    />
                </FormField>
                <FormField>
                    <FormLabel name="message">Message</FormLabel>
                    <FormTextArea
                        {...register('message')}
                        // error={errors.message}
                        // errorMsg="This field is required"
                    />
                </FormField>
                <Button
                    type="submit"
                    buttonStyle="secondary"
                    value="Submit now"
                    size="default"
                />
            </Form>
        </section>
    );
};

export default ContactForm;
