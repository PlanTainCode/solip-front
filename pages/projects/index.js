import Head from "next/head";
import { useState } from "react";
import Button from "../../components/elements/button";
import ShortPost from "../../components/elements/shorPost";
import MainLayout from "../../components/layouts/mainLayout";
import image from '../../public/images/home/banner.jpg';

const posts = [
  {
    image: image,
    title: 'Название проекта 1',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь',
    link: '/projects/content',
  },
  {
    image: image,
    title: 'Название проекта 2',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь',
    link: '/projects/content',
  },
  {
    image: image,
    title: 'Название проекта 3',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь',
    link: '/projects/content',
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const shortCount = 6;
  const list = showMore ? posts : posts.slice(0, shortCount);

  return (
    <MainLayout>
      <Head>
        <title>О нас</title>
      </Head>
      <h1 className="t-h1 text-green">Портфолио</h1>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-y-14">
        {posts.map(({image, title, description, link}, index) => (
          <ShortPost key={index} image={image} title={title} description={description} link={link}/>
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