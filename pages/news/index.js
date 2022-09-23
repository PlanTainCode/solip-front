import Head from "next/head";
import MainLayout from "../../components/layouts/mainLayout";
import image from '../../public/images/project/image-0.jpg';
import cn from "classnames";
import ShortPost from "../../components/elements/shorPost";
import { fetcher } from "../../lib/api";
import { getImageUrl } from "../../lib/image";

const getNewsLinkBySlug = (slug) => {
  return `/news/${slug}`;
};

export default function News({ news }) {
  const posts = news;

  return (
    <MainLayout>
      <Head>
        <title>Новости</title>
      </Head>
      <h1 className="t-h1 text-green">Новости</h1>
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/allnews?populate=image`
  );

  const news = !response.data ? [] : response.data.map(({attributes}) => {
    return {
      imageUrl: getImageUrl(attributes.image.data.attributes.url),
      title: attributes.title,
      description: attributes.content,
      link: getNewsLinkBySlug(attributes.slug)
    }
  })

  return {
    props: {
      news,
    },
    revalidate: 10
  };
}