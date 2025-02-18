import Layout from "@/components/Layout";
import { resolveComponents } from "@/components/resolver";
import ContentfulClient from "@/utils/contentful";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await ContentfulClient.getEntries({ content_type: "page" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = response.items.map((item: any) => {
    const slug = item.fields.url === "/" ? [] : [item.fields.url];
    return { params: { page: slug } };
  })

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = params?.page ? `/${(Array.isArray(params.page) ? params.page[0] : params.page)}` : "/";
  const response = await ContentfulClient.getEntries({
    content_type: "page",
    "fields.url": url.replace(/^\/+/, ''),
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
      {resolveComponents(data)}
    </Layout>
  )
}
