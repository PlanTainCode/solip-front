import Head from "next/head";
import MainLayout from "../../components/layouts/mainLayout";
import ShortPost from "../../components/elements/shorPost";
import { getImageUrl } from "../../lib/image";
import { fetcher } from "../../lib/api";
import cn from "classnames";

const getResourceLinkBySlug = (slug) => {
  return `/resources/${slug}`;
};

export default function Resources({ resources }) {
  const posts = resources;

  return (
    <MainLayout>
      <Head>
        <title>Användbar information</title>
      </Head>
      <h1 className="t-h1 text-green">Användbar information</h1>
      <div className="mt-6 mb-16 grid grid-cols-1 gap-10 lg:mt-8 lg:mb-20 lg:grid-cols-6 lg:gap-y-14">
        {posts.map(({imageUrl, title, description, link}, index) => (
          <div className={cn({
            'col-span-full': index === 0,
            'lg:col-span-3': [1,2].includes(index),
            'lg:col-span-2': ![0,1,2].includes(index),
          })} key={title}>
            <ShortPost
              imageUrl={imageUrl}
              title={title}
              description={description}
              link={link}
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/resources?populate=image`
  );

  const resources = !response.data ? [] : response.data.map(({attributes}) => {
    return {
      imageUrl: getImageUrl(attributes.image.data.attributes.url),
      title: attributes.title,
      description: attributes.content,
      link: getResourceLinkBySlug(attributes.slug)
    }
  })

  return {
    props: {
      resources,
    },
    revalidate: 10
  };
}