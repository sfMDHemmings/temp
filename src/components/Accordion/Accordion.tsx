import { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

interface AccordionProps {
    title: string;
    description: [];
}

const Accordion = ({ title, description }: AccordionProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`accordion${isActive ? ' is-active' : ''}`}>
            <div
                className={`accordion__title${isActive ? ' is-active' : ''}`}
                onClick={toggleAccordion}
            >
                {title}
                <Image
                    src="/icon-chevron-down.svg"
                    alt="Chevron down"
                    width={20}
                    height={10}
                />
            </div>
            <div className={`accordion__description${isActive ? ' is-active' : ''}`}>
                <PrismicRichText field={description} />
            </div>
        </div>
    );
};

export default Accordion;
