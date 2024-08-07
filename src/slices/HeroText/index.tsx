'use client';
import React, { useEffect } from 'react';
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
 * @typedef {import("@prismicio/client").Content.HerotextSlice} HeroTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HerotextProps
 * @param { HerotextProps }
 */
type HerotextSlice = Content.HerotextSlice;
type HerotextProps = SliceComponentProps<HerotextSlice>;

const Hero = ({ slice }: HerotextProps) => {
    const componentId = UseSliceComponentId({ slice });

    // useEffect(() => {
    //     if (componentId !== '') {
    //         const TL = gsap.timeline({ paused: true });
    //         const sliceTarget = document.querySelector(`#slice-${componentId}`);

    //         const prefixEl = sliceTarget?.querySelector('.hero-text__prefix') as HTMLElement | null;
    //         const titleEl = sliceTarget?.querySelector('.hero-text__title') as HTMLElement | null;
    //         const taglineEl = sliceTarget?.querySelector('.hero-text__tagline') as HTMLElement | null;
    //         const actionEl = sliceTarget?.querySelectorAll('.hero-text__action .button') as NodeList;

    //         const prefixText = new SplitText(prefixEl, { type: 'lines, words', linesClass: 'mask' });
    //         const titleText = new SplitText(titleEl, { type: 'lines, words', linesClass: 'mask' });
    //         const taglineText = new SplitText(taglineEl, { type: 'lines, words', linesClass: 'mask' });

    //         prefixEl ? (prefixEl.style.visibility = 'visible') : '';
    //         titleEl ? (titleEl.style.visibility = 'visible') : '';
    //         taglineEl ? (taglineEl.style.visibility = 'visible') : '';

    //         TL.from(prefixText.words, {
    //             duration: 0.8,
    //             y: 100,
    //             ease: 'Power3.easeOut',
    //             stagger: 0.014,
    //         })
    //             .from(
    //                 titleText.words,
    //                 {
    //                     duration: 0.8,
    //                     y: 100,
    //                     ease: 'Power3.easeOut',
    //                     stagger: 0.014,
    //                 },
    //                 '-=0.9',
    //             )
    //             .from(
    //                 taglineText.words,
    //                 {
    //                     duration: 0.8,
    //                     y: 100,
    //                     ease: 'Power3.easeOut',
    //                     stagger: 0.014,
    //                 },
    //                 '-=0.8',
    //             )
    //             .to(
    //                 actionEl,
    //                 {
    //                     duration: 0.26,
    //                     autoAlpha: 1,
    //                     ease: 'Power3.easeOut',
    //                     stagger: 0.014,
    //                 },
    //                 '-=0.6',
    //             );

    //         // @ts-ignore
    //         ScrollTrigger.create({
    //             trigger: sliceTarget,
    //             animation: TL,
    //             start: 'top 55%',
    //             markers: false,
    //         });

    //         return () => {
    //             // @ts-ignore
    //             ScrollTrigger.refresh();
    //             TL.kill();
    //         };
    //     }
    // }, [componentId]);

    const isVideoComponent = slice.variation === 'heroTextWithVideo';

    return (
        <section
            id={`slice-${componentId}`}
            className={`hero-text`}
        >
            <div className="hero-text__content container">
                {slice.primary.prefix && <div className="hero-text__prefix prefix">{slice.primary.prefix}</div>}
                {slice.primary.title && (
                    <h1
                        className={`hero-text__title hero-text__title-${slice.primary.theme ? slice.primary.theme.toLowerCase() : ''}${
                            !slice.primary.tagline ? ' no-margin' : ''
                        }`}
                    >
                        {slice.primary.title}
                    </h1>
                )}
                {slice.primary.tagline && <p className="hero-text__tagline tagline">{slice.primary.tagline}</p>}
                {slice.items.length > 0 && (
                    <div className="hero-text__action">
                        {slice.items.map((item: any, index: number) => {
                            console.log('ITEM', item);
                            return (
                                <>
                                    {item.button_link && (
                                        <ButtonLink
                                            key={index}
                                            href={item.button_link}
                                            target={item.button_link?.target}
                                            text={item.button_text}
                                            buttonStyle={'secondary'}
                                            size="default"
                                        />
                                    )}
                                </>
                            );
                        })}
                    </div>
                )}
            </div>

            {isVideoComponent && slice.primary?.video_file && 'url' in slice.primary.video_file && (
                <div className="hero-text__video">
                    <video
                        autoPlay
                        muted
                        loop
                    >
                        <source
                            src={slice.primary.video_file.url}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </section>
    );
};

export default Hero;
