import { useEffect, useState } from "react";
import { createClient } from "../prismicio";

interface DocumentSelectProps {
  document: { id: string };
}

const useFetchData = (idsArr: DocumentSelectProps[]) => {
  const [document, setDocument] = useState<unknown[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const getIds = idsArr.map(
        (item: DocumentSelectProps) => item.document.id
      );

      // Fetch custom types data by IDs
      const fetchCustomTypesData = await client.getAllByIDs(getIds);

      setDocument(fetchCustomTypesData);
    };

    fetchData();
  }, [idsArr]);

  return document;
};

export default useFetchData;
