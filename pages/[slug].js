import PageLayout from "@/layouts/page";
import NotionPage from "@/components/notion-page";
import { getAllPages, getPageByPageId } from "@/lib/notion/api";

export default function Page({ page, recordMap, showNavigation }) {
  return (
    <PageLayout page={page} showNavigation={showNavigation}>
      <NotionPage recordMap={recordMap} />
    </PageLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const pages = await getAllPages({ pageSize: 9999 });
  const page = pages.results.find((p) => p.slug === slug);

  if (!page || !page.isPublished) {
    return {
      notFound: true,
    };
  }

  const recordMap = await getPageByPageId(page.id); // Fetch the record map for the page

  if (!recordMap) {
    return {
      notFound: true, // Handle case where the page is not found
    };
  }

  return {
    props: {
      page,
      recordMap,
      showNavigation: page.showNavigation || false, // Fetch showNavigation property
    },
    revalidate: 10,
  };
};
