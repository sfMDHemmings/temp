'use client';
import { useEffect } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Script from 'next/script';
import UseScriptUnmount from '@/hooks/UseScriptUnmount';

/**
 * Props for `SchemaEvent`.
 */
export type SchemaEventProps = SliceComponentProps<Content.SchemaEventSlice>;

/**
 * Component for "SchemaEvent" Slices.
 */
const SchemaEvent = ({ slice }: SchemaEventProps): JSX.Element => {
    const {
        name,
        description,
        image,
        startDate,
        endDate,
        locationName,
        locationStreetAddress,
        locationAddressLocality,
        locationAddressRegion,
        locationAddressCountry,
        locationUrl,
        offerUrl,
        offerPrice,
        offerPriceCurrency,
        offerValidFrom,
        organiserName,
        organiserUrl,
        performerName,
    } = slice.primary;

    const eventAttendanceModeMap: { [key: string]: string | null } = {
        mixed: 'MixedEventAttendanceMode',
        offline: 'OfflineEventAttendanceMode',
        online: 'OnlineEventAttendanceMode',
    };

    const eventStatusMap: { [key: string]: string | null } = {
        scheduled: 'EventScheduled',
        movedonline: 'EventMovedOnline',
        postponded: 'EventPostponed',
        rescheduled: 'EventRescheduled',
        cancelled: 'EventCancelled',
    };

    const offerAvailabilityMap: { [key: string]: string | null } = {
        instock: 'InStock',
        soldout: 'SoldOut',
        preorder: 'PreOrder',
    };

    // TODO: add a proper type to this once built out and working
    // ALso need to check all values are correct here as they change depending on options selected - https://webcode.tools/structured-data-generator/event
    let schema: any = {
        '@context': 'http://schema.org/',
        '@type': 'Event',
        name: name,
        description: description,
        image: image,
        eventAttendanceMode: `https://schema.org/${eventAttendanceModeMap[slice.primary.attendance_mode.toLowerCase()]}`,
        eventStatus: `https://schema.org/${eventStatusMap[slice.primary?.status?.toLowerCase().replaceAll(' ', '')]}`,
        startDate: startDate,
        endDate: endDate,
    };

    // Location
    if (slice.primary.attendance_mode === 'Mixed' || slice.primary.attendance_mode === 'Offline') {
        schema['location'] = [
            {
                '@type': 'Place',
                name: locationName,
                address: {
                    streetAddress: locationStreetAddress,
                    addressLocality: locationAddressLocality,
                    addressRegion: locationAddressRegion,
                    postalCode: locationAddressCountry,
                    addressCountry: locationAddressCountry,
                },
                url: locationUrl,
            },
        ];
    } else {
        schema['location'] = [
            {
                '@type': 'VirtualLocation',
                url: locationUrl,
            },
        ];
    }

    // Offers
    if (slice.primary.include_offer) {
        schema['offers'] = {
            '@type': 'Offer',
            url: offerUrl,
            price: offerPrice,
            priceCurrency: offerPriceCurrency,
            availability: `https://schema.org/${offerAvailabilityMap[slice.primary?.offerAvailability?.toLowerCase().replaceAll('-', '').replaceAll(' ', '')]}`,
            validFrom: offerValidFrom,
        };
    }

    // Organiser
    if (slice.primary.included_organiser && slice.primary.organiserPerformerType === 'Person') {
        schema['organizer'] = {
            '@type': 'Person',
            name: organiserName,
        };
    } else {
        schema['organizer'] = {
            '@type': 'Organization',
            name: organiserName,
            url: organiserUrl,
        };
    }

    // Performer
    if (slice.primary.include_performer && slice.primary.performerType === 'Person') {
        schema['performer'] = {
            '@type': 'Person',
            name: performerName,
        };
    } else {
        schema['performer'] = {
            '@type': 'PerformingGroup',
            name: performerName,
        };
    }

    // useEffect(() => {
    //     const script = document.getElementById('schema-event');

    //     return () => {
    //         if (script) {
    //             script.remove();
    //         }
    //     };
    // }, []);

    UseScriptUnmount('schema-event');

    return (
        <>
            <Script
                id="schema-event"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
        </>
    );
};

export default SchemaEvent;
