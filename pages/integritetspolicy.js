/* eslint-disable react/no-children-prop */
import MainLayout from "../components/layouts/mainLayout";
import Head from "next/head";
import { fetcher } from "../lib/api";
import ReactMarkdown from "react-markdown";

export default function Integritetspolicy({ pageData }) {
    console.log(pageData)
    return (
        <MainLayout>
            <Head>
                <title>{pageData.attributes.title}</title>
            </Head>
            
            <h1 className="t-h1 text-green">{pageData.attributes.title}</h1>

            <div className="mt-8 mb-8 space-y-4 lg:mt-10 lg:mb-10 lg:space-y-6 articles">
                <ReactMarkdown children={pageData.attributes.Text} />
            </div>
        </MainLayout>
    );
}

export async function getStaticProps() {
  const pageResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/integritetspolicy`
  );

  return {
    props: {
      pageData: pageResponse.data,
    },
    revalidate: 10
  };
}