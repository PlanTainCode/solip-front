import Head from "next/head";
import { useState } from "react";
import Button from "../../components/elements/button";
import ShortPost from "../../components/elements/shorPost";
import MainLayout from "../../components/layouts/mainLayout";
import { fetcher } from "../../lib/api";
import { getImageUrl } from '../../lib/image';

const getProjectLinkBySlug = (slug) => {
  return `/projects/${slug}`;
};

export default function Projects({projects}) {
  const [showMore, setShowMore] = useState(false);
  const shortCount = 6;
  const posts = projects;
  const list = showMore ? posts : posts.slice(0, shortCount);

  return (
    <MainLayout>
      <Head>
        <title>Портфолио</title>
      </Head>
      <h1 className="t-h1 text-green">Портфолио</h1>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-y-14">
        {posts.map(({imageUrl, title, description, link}, index) => (
          <ShortPost
            key={index}
            imageUrl={imageUrl}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
      <div className="mt-10 mb-16 lg:mt-16 lg:mb-20">
        {posts.length > list.length && (
          <Button color="black" onClick={() => setShowMore(true)}>Смотреть еще</Button>
        )}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const projectsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=image`
  );

  return {
    props: {
      projects: projectsResponse.data.map(({attributes}) => {
        return {
          imageUrl: getImageUrl(attributes.image.data.attributes.url),
          title: attributes.title,
          description: attributes.content,
          link: getProjectLinkBySlug(attributes.slug)
        }
      })
    },
    revalidate: 10
  };
}