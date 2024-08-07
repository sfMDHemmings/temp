import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="text-block container slice"
        >
            <PrismicRichText
                field={slice.primary.content}
                // components={{
                //     heading2: ({ children }) => <h2>{children}</h2>,
                //     heading3: ({ children }) => <h3>{children}</h3>,
                //     heading4: ({ children }) => <h4>{children}</h4>,
                //     heading5: ({ children }) => <h5>{children}</h5>,
                //     heading6: ({ children }) => <h6>{children}</h6>,
                // }}
            />{' '}
        </section>
    );
};

export default TextBlock;
