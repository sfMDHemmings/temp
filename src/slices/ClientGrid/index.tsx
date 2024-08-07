'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
// @ts-ignore
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import UseSliceComponentId from '../../hooks/UseSliceComponentId';
// import { gsap } from 'gsap';
// import ScrollTrigger from '../../src/assets/js/libs/ScrollTrigger';
// import SplitText from '../../src/assets/js/libs/SplitText';
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

/**
 * @typedef {import("@prismicio/client").Content.ClientGridSlice} ClientGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientGridSlice>} ClientGridProps
 * @param { ClientGridProps }
 */

type ClientGridSlice = Content.ClientGridSlice;
type ClientGridProps = SliceComponentProps<ClientGridSlice>;

const ClientGrid = ({ slice }: ClientGridProps) => {
    const componentId = UseSliceComponentId({ slice });

    return (
        <div
            id={`slice-${componentId}`}
            className="client-grid slice container"
        >
            {/* <div className="client-grid__header">
                <h2>Select clients</h2>
            </div> */}
            <div className="client-grid__row">
                {slice.items.map((client: any, idx: number) => (
                    <div
                        key={idx}
                        className="client-grid__item"
                    >
                        <Image
                            src={client.client_logo.url}
                            width={100}
                            height={100}
                            alt={client.client_logo.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientGrid;
