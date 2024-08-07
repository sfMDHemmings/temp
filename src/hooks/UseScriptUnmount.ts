'use client';
import { useEffect, useState } from 'react';

const UseScriptUnmount = (currentScriptId: string) => {
    const [schemaIds] = useState(['schema-organisation', 'schema-event', 'schema-faq', 'schema-article']);

    useEffect(() => {
        const idsArrToUnmount = schemaIds.filter(item => item !== currentScriptId);

        // console.log(idsArrToUnmount);

        // idsArrToUnmount.forEach(id => {
        //     const script = document.getElementById(id);

        //     if (script) {
        //         script.remove();
        //     }
        // });

        return () => {
            idsArrToUnmount.forEach(id => {
                const script = document.getElementById(id);

                if (script) {
                    script.remove();
                }
            });
        };
    }, [schemaIds, currentScriptId]);

    return null;
};

export default UseScriptUnmount;
