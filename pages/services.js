import Head from "next/head";
import ServicePost from "../components/elements/servicePost";
import MainLayout from "../components/layouts/mainLayout";

import image_1 from '../public/images/services/service-1.jpg';
import image_2 from '../public/images/services/service-2.jpg';
import image_3 from '../public/images/services/service-3.jpg';

const posts = [
  {
    image: image_1,
    title: 'Название 1',
    price: '1000₽',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт.',
  },
  {
    image: image_2,
    title: 'Название 2',
    price: '2000₽',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт.',
  },
  {
    image: image_3,
    title: 'Название 3',
    price: '3000₽',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт.',
  },
];

export default function Materials() {
  return (
    <MainLayout>
      <Head>
        <title>Услуги</title>
      </Head>

      <h1 className="t-h1 text-green">Услуги</h1>
      <div className="mt-10 mb-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-10 lg:mb-20">
        {posts.map(({ title, description, price, image }) => (
          <ServicePost key={title} title={title} description={description} price={price} image={image}/>
        ))}
      </div>
    </MainLayout>
  );
}