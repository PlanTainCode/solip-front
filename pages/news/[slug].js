import Image from "next/image";
import MainLayout from "../../components/layouts/mainLayout";
import Head from "next/head";
import { marked } from 'marked';
import { fetcher } from "../../lib/api";
import { generateBlocks, renderBlock } from "../../lib/post";
import { getImageUrl } from "../../lib/image";

export default function NewsPost({ news }) {
  const { title = '', content, imageUrl, blocks } = news;

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="t-h1 text-green">{title}</h1>
      <div className="mt-4 mb-14 t-24 lg:mt-8 lg:mb-20">
        <div className="relative h-44 lg:h-75">
          <Image src={imageUrl} alt={''} layout='fill' className="rounded-3xl" objectFit="cover"/>
        </div>
        {content && <div className="paragraph mt-5 lg:mt-6" dangerouslySetInnerHTML={{__html: content}}/>}

        {!!blocks.length && (
          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
            {blocks.map((block, index) => renderBlock(block, index))}
          </div>
        )}

      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const projectsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/allnews`
  );

  const paths = projectsResponse.data.map(({ attributes }) => {
    return {
      params: {
        slug: attributes.slug,
      },
    }
  });

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/allnews?populate=deep&filters[slug]=${params.slug}`
  );
  const data = response.data[0].attributes;
  const blocks = generateBlocks(data.blocks);

  return {
    props: {
      news: {
        title: data.title,
        content: marked.parse(data.content),
        imageUrl: getImageUrl(data.image.data.attributes.url),
        blocks
      },
    },
    revalidate: 1
  };
}