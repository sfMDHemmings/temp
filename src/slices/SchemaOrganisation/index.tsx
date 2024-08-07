'use client';
import { useEffect } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Script from 'next/script';
import UseScriptUnmount from '@/hooks/UseScriptUnmount';

/**
 * Props for `SchemaOrganisation`.
 */
export type SchemaOrganisationProps = SliceComponentProps<Content.SchemaOrganisationSlice>;

/**
 * Component for "SchemaOrganisation" Slices.
 */
const SchemaOrganisation = ({ slice }: SchemaOrganisationProps): JSX.Element => {
    const {
        name,
        logo,
        url,
        streetAddress,
        addressLocality,
        addressRegion,
        addressCountry,
        facebook,
        instagram,
        linkedin,
        twitter,
    } = slice.primary;

    const organisationTypeMap: { [key: string]: string | null } = {
        airline: 'Airline',
        consortium: 'Consortium',
        corporation: 'Corporation',
        educationalorganizationelementaryschool: 'ElementarySchool',
        educationalorganizationhighschool: 'HighSchool',
        educationalorganizationmiddleschool: 'MiddleSchool',
        educationalorganizationpreschool: 'PreSchool',
        educationalorganizationschool: 'School',
        educationalorganizationother: 'EducationalOrganization',
        fundingscheme: 'FundingScheme',
        governmentorganization: 'governmentOrganization',
        librarysystem: 'librarySystem',
        medicalorganization: 'medicalOrganization',
        ngo: 'NGO',
        newsmediaorganization: 'Dentist',
        newsmediaorganizationdiagnosticlab: 'DiagnosticLab',
        newsmediaorganizationHospital: 'Hospital',
        newsmediaorganizationmedicalclinic: 'MedicalClinic',
        newsmediaorganizationpharmacy: 'Pharmacy',
        newsmediaorganizationphysician: 'Physician',
        newsmediaorganizationveterinarycare: 'VeterinaryCare',
        newsmediaorganizationother: 'NewsMediaOrganization',
        organization: 'Organization',
        performinggroupdancegroup: 'DanceGroup',
        performinggroupmusicgroup: 'MusicGroup',
        performinggrouptheatergroup: 'TheaterGroup',
        performinggroupother: 'PerformingGroup',
        projectfundingagency: 'FundingAgency',
        projectresearchproject: 'ResearchProject',
        projectother: 'Project',
        sportsorganizationsportsteam: 'SportsTeam',
        sportsorganizationother: 'SportsOrganization',
        workersunion: 'WorkersUnion',
    };

    // Create schema data object
    const schema = {
        '@context': 'http://schema.org/',
        '@type': organisationTypeMap[slice?.primary?.type?.toLowerCase().replaceAll(' ', '').replaceAll('>', '')!],
        name: name,
        logo: logo,
        url: url,
        address: {
            '@type': 'PostalAddress',
            streetAddress: streetAddress,
            addressLocality: addressLocality,
            addressRegion: addressRegion,
            addressCountry: addressCountry,
        },
        sameAs: [] as string[],
    };

    if (slice.primary.include_social_profiles) {
        if (facebook) schema.sameAs.push(facebook);
        if (instagram) schema.sameAs.push(instagram);
        if (linkedin) schema.sameAs.push(linkedin);
        if (twitter) schema.sameAs.push(twitter);
    }

    // https://schema.org/
    // https://webcode.tools/structured-data-generator
    // https://support.schema.dev/portal/en/kb/articles/adding-schema-markup-to-your-pages#The_JSON-LD_Format

    // useEffect(() => {
    //     const script = document.getElementById('schema-organisation');

    //     return () => {
    //         if (script) {
    //             script.remove();
    //         }
    //     };
    // }, []);

    UseScriptUnmount('schema-organisation');

    return (
        <>
            <Script
                id="schema-organisation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />
        </>
    );
};

export default SchemaOrganisation;
