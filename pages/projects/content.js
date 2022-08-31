import Head from "next/head";
import Image from "next/image";
import MainLayout from "../../components/layouts/mainLayout";
import image_0 from '../../public/images/project/image-0.jpg';
import SliderCard from '../../components/modules/sliderCard';
import SliderBanner from "../../components/modules/sliderBanner";

import advantage_1_1 from '../../public/images/home/advantage-1-1.jpg';
import advantage_2_1 from '../../public/images/home/advantage-2-1.jpg';
import advantage_3_1 from '../../public/images/home/advantage-3-1.jpg';
import work_1 from '../../public/images/home/work-1.jpg';

const slides = [
  {
    image: advantage_1_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
  {
    image: advantage_2_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
  {
    image: advantage_3_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
];

const portfolio = [
  {
    image: work_1,
    title: 'гостевой домик',
    text: 'покрасили, облицевали, положили крышу',
  },
  {
    image: work_1,
    title: 'гостевой домик 2',
    text: 'покрасили, облицевали, положили крышу 2',
  },
];

export default function Team() {

  return (
    <MainLayout>
      <Head>
        <title>Название проекта</title>
      </Head>

      <h1 className="t-h1 text-green">Название проекта</h1>
      <div className="mt-4 mb-14 t-24 lg:mt-8 lg:mb-20">
        <div className="relative h-44 lg:h-75">
          <Image src={image_0} alt={''} layout='fill' className="rounded-3xl" objectFit="cover"/>
        </div>
        <p className="font-caption mt-5">Название проекта</p>
        <p className="paragraph mt-3">Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.</p>

        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="">
            <h3 className="t-h2 mt-6">Комната 1</h3>

            <p className="paragraph t-24 mt-4 lg:pr-16 lg:mt-5">Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.</p>
          </div>
          <div className="mt-5 lg:-order-1">
            <SliderCard slides={slides} showNavbar/>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative h-44 lg:h-75">
            <Image src={image_0} alt={''} layout='fill' className="rounded-3xl" objectFit="cover"/>
          </div>
          <p className="font-caption mt-5">Комната 2</p>
          <p className="paragraph mt-3">Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.</p>
        </div>

        <div className="mt-10 lg:mt-14">
          <SliderBanner slides={portfolio} showNavbar showDots/>
        </div>
      </div>
    </MainLayout>
  );
}