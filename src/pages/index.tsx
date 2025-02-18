import { Hero } from "@/components/Hero";
import Layout from "@/components/Layout";
import { resolveComponents } from "@/components/resolver";
import ContentfulClient from "@/utils/contentful";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await ContentfulClient.getEntries({
    content_type: "page",
    "fields.url": "/homepage",
    limit: 1,
  })

  if (!response.items.length) {
    return { notFound: true }
  }

  const data = response.items[0].fields.blocks || []

  return {
    props: { data },
  };
};

export default function Page({ data }: { data: unknown }) {
  return (
    <Layout>
      <Hero />
      {resolveComponents(data)}
    </Layout>
  )
}
