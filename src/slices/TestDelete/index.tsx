import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestDelete`.
 */
export type TestDeleteProps = SliceComponentProps<Content.TestDeleteSlice>;

/**
 * Component for "TestDelete" Slices.
 */
const TestDelete = ({ slice }: TestDeleteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_delete (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestDelete;
