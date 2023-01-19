import Head from "next/head";

export default function Meta({ title }: { title: string }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>
        {title ? "Helen Ward  - " + title : "Helen Ward"}
      </title>
      <meta
        property="og:title"
        content={title ? "Helen Ward  - " + title : "Helen Ward"}
      />
      <meta
        property="description"
        content="A great photo album of all the creative drawings done by Helen Ward."
      />
      <meta
        property="og:description"
        content="A great photo album of all the creative drawings done by Helen Ward."
      />
      <meta property="og:image" content="/static/system/og_image.jpg" />
      <meta property="og:site_name" content="Helen Ward" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Helen Ward" />
      <meta property="og:type" content="website" />
      <meta name="pinterest" content="nopin" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffcd00" />
      <meta
        name="msapplication-config"
        content="/static/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
}
