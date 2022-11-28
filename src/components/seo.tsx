import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultSEO } from 'src/config/seo';

type SEOProps = {
  title?: string;
  description?: string;
};

export const SEO = ({ title, description }: SEOProps) => {
  const router = useRouter();

  const { title: defaultTitle, description: defaultDescription, domain, lang, image } = defaultSEO;

  const theme = {
    contentColor: 'hsl(180, 4%, 5%)',
    titleColor: 'hsl(0, 0%, 100%)',
  };

  const seo = {
    lang,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `https://${domain}${router.pathname}`,
    image,
    domain,
  };

  return (
    <Head>
      {/* TODO: Find a way to change lang dynamically */}
      {/* <html lang={seo.lang} /> */}
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="theme-color" content={theme.contentColor} />
      <meta name="referrer" content="origin" />
      <meta name="msapplication-TitleColor" content={theme.titleColor} />
      <meta name="msapplication-TileImage" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="Website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={seo.lang} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={seo.domain} />
      <meta property="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};
