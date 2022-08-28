import Head from "next/head";
import { useState } from "react";
import Button from "../components/elements/button";
import Employee from "../components/elements/employee";
import MainLayout from "../components/layouts/mainLayout";
import human_1 from '../public/images/team/human-1.jpg';
import human_2 from '../public/images/team/human-2.jpg';
import human_3 from '../public/images/team/human-3.jpg';
import human_4 from '../public/images/team/human-4.jpg';
import human_5 from '../public/images/team/human-5.jpg';
import human_6 from '../public/images/team/human-6.jpg';

const team = [
  {
    name: 'Зураб',
    job: 'Прораб-плиточник',
    image: human_1
  },
  {
    name: 'Александр',
    job: 'Маляр',
    image: human_2
  },
  {
    name: 'Виктор',
    job: 'Плиточник',
    image: human_3
  },
  {
    name: 'Аслан',
    job: 'Плотник',
    image: human_4
  },
  {
    name: 'Халит',
    job: 'Плотник',
    image: human_5
  },
  {
    name: 'Алихан',
    job: 'Директор',
    image: human_6
  },
  {
    name: 'Зураб',
    job: 'Прораб-плиточник',
    image: human_1
  },
  {
    name: 'Александр',
    job: 'Маляр',
    image: human_2
  },
  {
    name: 'Виктор',
    job: 'Плиточник',
    image: human_3
  },
];

export default function Team() {
  const [showMore, setShowMore] = useState(false);
  const shortCount = 6;
  const list = showMore ? team : team.slice(0, shortCount);

  return (
    <MainLayout>
      <Head>
        <title>Наши сотрудники</title>
      </Head>
      <h1 className="t-h1 text-green">Наши сотрудники</h1>
      <div className="mt-4 lg:grid lg:grid-cols-12 lg:gap-10">
        <p className="paragraph t-24 lg:col-span-11">Познакомьтесь с нашими сотрудниками. Каждый из них будет рад внести свой вклад в ваш ремонт. Мы подбираем сотрудников опираясь на их опыт, качество исполнения работ и готовность совершенствоваться в своей нише. Они помогут вам быстро реализовать даже самые смелые идеи на должном уровне профессионализма.</p>
      </div>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {list.map((employee, index) => (
          <div key={index} className=''>
            <Employee {...employee}/>
          </div>)
        )}
      </div>
      <div className="mt-6 mb-14 lg:mt-10 lg:mb-24">
        {team.length > list.length && <Button color='black' onClick={() => setShowMore(true)}>Остальные</Button>}
      </div>
    </MainLayout>
  );
}