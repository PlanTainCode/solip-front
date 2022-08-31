import Head from "next/head";
import MainLayout from "../../components/layouts/mainLayout";
import image from '../../public/images/project/image-0.jpg';
import cn from "classnames";
import ShortPost from "../../components/elements/shorPost";

const posts = [
  {
    image: image,
    title: 'Заголовок новости 1',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.',
    link: '/news/content',
  },
  {
    image: image,
    title: 'Заголовок новости 2',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.',
    link: '/news/content',
  },
  {
    image: image,
    title: 'Заголовок новости 3',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.',
    link: '/news/content',
  },
  {
    image: image,
    title: 'Заголовок новости 4',
    description: 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.',
    link: '/news/content',
  },
];

export default function News() {
  return (
    <MainLayout>
      <Head>
        <title>Новости</title>
      </Head>
      <h1 className="t-h1 text-green">Новости</h1>
      <div className="mt-6 mb-16 grid grid-cols-1 gap-10 lg:mt-8 lg:mb-20 lg:grid-cols-6 lg:gap-y-14">
        {posts.map(({image, title, description, link}, index) => (
          <div className={cn({
            'col-span-full': index === 0,
            'col-span-3': [1,2].includes(index),
            'col-span-2': ![0,1,2].includes(index),
          })} key={title}>
            <ShortPost
              image={image}
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