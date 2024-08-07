'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { PrismicRichText } from '@prismicio/react';
// @ts-ignore
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import UseSliceComponentId from '../../hooks/UseSliceComponentId';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
// import { gsap } from 'gsap';
// import ScrollTrigger from '../../src/assets/js/libs/ScrollTrigger';
// import SplitText from '../../src/assets/js/libs/SplitText';
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

/**
 * @typedef {import("@prismicio/client").Content.FeaturesGridSlice} FeaturesGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesGridSlice>} FeaturesGridProps
 * @param { FeaturesGridProps }
 */
type FeaturesGridSlice = Content.FeaturesGridSlice;
type FeaturesGridProps = SliceComponentProps<FeaturesGridSlice>;

const FeaturesGrid = ({ slice }: FeaturesGridProps) => {
    const componentId = UseSliceComponentId({ slice });

    //   useEffect(() => {
    //     if (componentId !== "") {
    //       const TL = gsap.timeline({ paused: true });
    //       const sliceTarget = document.querySelector(`#slice-${componentId}`);

    //       const titleEl = document.querySelectorAll(".features-grid__header > *"); // TODO: this is doing all text - do we need or should be changed?
    //       const titleText = new SplitText(titleEl, {
    //         type: "lines, words",
    //         linesClass: "mask",
    //       });
    //       const featureCols = document.querySelectorAll(
    //         ".features-grid__item"
    //       ) as NodeList;
    //       const action = document.querySelector(".features-grid__action");

    //       TL.from(titleText.words, {
    //         duration: 0.8,
    //         y: 60,
    //         ease: "Power3.easeOut",
    //         stagger: 0.014,
    //       })
    //         .from(
    //           featureCols, // TODO: this might need doing as a batch for the larger gride use?? SO needs its own ScrollTrigger.batch
    //           {
    //             duration: 0.8,
    //             y: 60,
    //             autoAlpha: 0,
    //             ease: "Power3.easeOut",
    //             stagger: 0.084,
    //           },
    //           "-=0.6"
    //         )
    //         .from(
    //           action, // TODO: this works much nicer than the animation on Hero. Might neeed to look at that to make all match
    //           {
    //             duration: 0.8,
    //             y: 20,
    //             autoAlpha: 0,
    //             ease: "Power3.easeOut",
    //           },
    //           "-=0.6"
    //         );

    //       // @ts-ignore
    //       ScrollTrigger.create({
    //         trigger: sliceTarget,
    //         animation: TL,
    //         start: "top center",
    //         markers: false,
    //       });

    //       return () => {
    //         // @ts-ignore
    //         ScrollTrigger.refresh();
    //         TL.kill();
    //       };
    //     }
    //   }, [componentId]);

    return (
        <section
            id={`slice-${componentId}`}
            className="features-grid container slice"
        >
            {slice.primary.title && (
                <div className="features-grid__header">
                    <PrismicRichText
                        field={slice.primary.title}
                        components={{
                            heading2: ({ children }) => <h2>{children}</h2>,
                            heading3: ({ children }) => <h3>{children}</h3>,
                            heading4: ({ children }) => <h4>{children}</h4>,
                            heading5: ({ children }) => <h5>{children}</h5>,
                            heading6: ({ children }) => <h6>{children}</h6>,
                        }}
                    />
                    {slice.primary.tagline && (
                        <PrismicRichText
                            field={slice.primary.tagline}
                            components={{
                                paragraph: ({ children }) => <p className="tagline">{children}</p>,
                            }}
                        />
                    )}
                </div>
            )}
            <div className="features-grid__row">
                {slice.items.map((item: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="features-grid__item"
                        >
                            {item.icon && Object.keys(item.icon).length > 0 && (
                                <div className="features-grid__item-icon">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt}
                                        width={item.icon?.dimensions?.width}
                                        height={item.icon?.dimensions?.height}
                                        // fill
                                    />
                                </div>
                            )}
                            {item.title && <h3 className="features-grid__item-title">{item.title}</h3>}
                            {item.description && <p>{item.description}</p>}
                        </div>
                    );
                })}
            </div>
            {slice.primary.button_text && slice.primary.button_link && (
                <div className="features-grid__action">
                    <ButtonLink
                        href={slice.primary.button_link}
                        target={slice.primary.button_link}
                        text={slice.primary.button_text}
                        buttonStyle={'primary'}
                        size="default"
                    />
                </div>
            )}
        </section>
    );
};

export default FeaturesGrid;
