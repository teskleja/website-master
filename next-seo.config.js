const title = "Panji Ariyo";
const description = "Amateur Writer type of";

const SEO = {
  title,
  description,
  canonical: "https://danielwirtz.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://danielwirtz.com",
    title,
    description,
    images: [
      {
        url: "https://danielwirtz.com/static/images/avatar-small.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@wirtzdan",
    site: "@wirtzdan",
    cardType: "summary_large_image",
  },
};

export default SEO;
