import { Helmet } from 'react-helmet-async';

function SEO({ title, description, image }) {
  return (
    <Helmet>
      <title>{title} | Parisa Mirhosseini - Software Engineer</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
