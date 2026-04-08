import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
    titleKey: string;
    descriptionKey: string;
    type?: string;
    image?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    titleKey,
    descriptionKey,
    type = 'website',
    image = 'https://kazihub.digital/logo.png',
    url = 'https://kazihub.digital'
}) => {
    const { t } = useLanguage();
    const pageTitle = `${t(titleKey)} | KaziHub Digital Agency`;
    const pageDescription = t(descriptionKey);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
