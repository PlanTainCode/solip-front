import Image from "next/image";
import image from '../../public/images/project/image-1.jpg';
import MainLayout from "../../components/layouts/mainLayout";
import Head from "next/head";

export default function ResourcePost() {
  const title = 'Заголовок новости';
  const description = 'Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.';

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="t-24 mb-14 lg:mb-20">
        <div className="relative h-44 lg:h-75">
          <Image src={image} alt={title} layout='fill' className="rounded-3xl" objectFit="cover"/>
        </div>
        <p className="font-caption mt-5">{title}</p>
        <p className="paragraph mt-3">{description}</p>
      </div>
    </MainLayout>
  );
}