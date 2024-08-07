/**
 * Custom React hook to get a component ID from a slice object.
 *
 * @param {Object} props - The properties passed to the hook.
 * @param {Object} props.slice - The slice object.
 * @param {string} props.slice.id - The ID of the slice.
 *
 * @returns {string} The component ID, derived from the slice ID with all '$' characters replaced with '-'.
 */
import { useEffect, useState } from "react";

type ComponentId = {
  slice: {
    id: string;
  };
};

const UseSliceComponentId = ({ slice }: ComponentId) => {
  const [componentId, setComponentId] = useState<string>("");

  useEffect(() => {
    const uid = slice.id;
    setComponentId(uid.replace("$", "-"));
  }, [slice, setComponentId]);

  return componentId;
};

export default UseSliceComponentId;
