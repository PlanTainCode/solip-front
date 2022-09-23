import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/elements/button'
import banner from '../public/images/home/banner.jpg'
import advantage_1_1 from '../public/images/home/advantage-1-1.jpg';
import advantage_2_1 from '../public/images/home/advantage-2-1.jpg';
import advantage_3_1 from '../public/images/home/advantage-3-1.jpg';
import work_1 from '../public/images/home/work-1.jpg';
import human_1 from '../public/images/team/human-1.jpg';
import human_2 from '../public/images/team/human-2.jpg';
import human_3 from '../public/images/team/human-3.jpg';
import IconSolip from '../components/icons/solip.svg';
import cn from 'classnames';
import MainLayout from '../components/layouts/mainLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderCard from '../components/modules/sliderCard';
import StepBlocks from '../components/modules/stepBlocks';
import Employee from '../components/elements/employee';
import SliderBanner from '../components/modules/sliderBanner';
import ContactMap from '../components/modules/contactMap';
import Form from '../components/modules/form';
import { fetcher } from "../lib/api";

const team = [
  {
    name: 'Зураб',
    position: 'Прораб-плиточник',
    image: human_1
  },
  {
    name: 'Александр',
    position: 'Маляр',
    image: human_2
  },
  {
    name: 'Виктор',
    position: 'Плиточник',
    image: human_3
  },
];

const slides = [
  {
    imageUrl: advantage_1_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
  {
    imageUrl: advantage_2_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
  {
    imageUrl: advantage_3_1,
    title: 'Дом ХХХХ',
    text: 'срок реалтзации ХХ дней',
  },
];

const blocks = [
  {
    title: 'Быстрая реализация проектов',
    text: 'Мы приступим к проекту сразу же после согласования и закончим его тогда, когда это нужно именно вам. Время – ценнейший ресурс, который мы для вас экономим.',
    slides: slides,
  },
  {
    title: 'Забота о природе',
    text: 'Мы заботимся о природе и уважаем пространство, в котором живем – поэтому в работе мы стараемся использовать экологичные материалы.',
    slides: slides,
  },
  {
    title: 'Высокое качество исполнения',
    text: 'Мы гарантируем высокое качество выполнения всех ремонтных работ благодаря штату профессионалов, имеющих большое портфолио в самых разных стилях и техниках стротельства.',
    slides: slides,
  },
];

const portfolio = [
  {
    imageUrl: work_1,
    title: 'гостевой домик',
    text: 'покрасили, облицевали, положили крышу',
    link: '/projects/content',
  },
  {
    imageUrl: work_1,
    title: 'гостевой домик 2',
    text: 'покрасили, облицевали, положили крышу 2',
    link: '/projects/content',
  },
];

export default function Home({ contactData }) {
  const contacts = contactData.attributes;

  return (
    <MainLayout>
      <Head>
        <title>Solip</title>
      </Head>

      <section className='relative text-silver rounded-b-3xl rounded-t-[40px] overflow-hidden h-[448px] lg:h-165 lg:rounded-t-[80px]' style={{transform: 'translate3d(0, 0, 0)'}}>
        <Image src={banner} alt='banner' layout='fill' objectFit='cover' style={{transform: 'translate3d(0, 0, 0)'}} placeholder='blur'/>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 lg:bg-black/40"></div>
        <div className="absolute left-0 top-0 right-0 bottom-0 pb-6 flex flex-col">
          <IconSolip style={{transform: 'translate3d(0, 0, 0)'}}/>
          <div className="px-5 flex-1 flex flex-col lg:px-8">
            <p className="t-40 mt-4 lg:w-107.5">ремонт домов и квартир в Гётеборге</p>
            <p className="paragraph t-24 mt-5 lg:absolute lg:right-8 lg:bottom-8 lg:w-[58%]">Ваш комфорт – наша главная задача. Мы поможем качественно и быстро воплотить ваши самые смелые идеи, применяя высокие стандарты качества и экологичности. Оперативная разработка проекта по вашему вкусу и начало работ в удобное для вас время.</p>
            <div className="mt-auto lg:absolute lg:left-8 lg:bottom-8 lg:w-80">
              <Button link='/about'>О нас</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cn(
        'rounded-3xl border border-black px-5 py-6 mt-14',
        'lg:flex lg:justify-between lg:items-center lg:border-2 lg:px-8 lg:py-7 lg:mt-20'
      )}>
        <p className="paragraph t-24 lg:max-w-[600px]">У вас уже есть проект, и вы хотите узнать его стоимость? Загрузите имеющуюся информацию и мы поможем вам с предварительным расчетом.</p>
        <div className="mt-6 lg:mt-0 lg:w-100">
          <Button color='green'>Загрузить</Button>
        </div>
      </section>

      <section className='mt-14 lg:mt-20'>
        <p className="paragraph t-24">У вас уже есть проект, и вы хотите узнать его стоимость? Загрузите имеющуюся информацию и мы поможем вам с предварительным расчетом.</p>
        <div className="mt-6">
          <Button link='/services' color='green'>Все услуги</Button>
        </div>
      </section>

      <section className='mt-14 lg:mt-24'>
        <div className="mb-8 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:mb-14">
          <h2 className="t-h1 text-green col-span-8">Наши преимущества</h2>
        </div>

        <StepBlocks blocks={blocks} betweenOffset='-16'/>
      </section>

      <section className="mt-14 lg:mt-20">
        <h2 className="t-h1 text-green">Наши работы</h2>

        <div className="mt-8 lg:mt-14">
          <SliderBanner slides={portfolio} showNavbar/>
        </div>

        <div className="mt-7 lg:mt-10">
          <Button color='black' link='/projects'>Остальные работы</Button>
        </div>
      </section>

      <section className='mt-16 lg:mt-24'>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">

          <div className={cn(
            'bg-white rounded-3xl px-5 py-6',
            'lg:col-span-7 lg:flex lg:flex-col lg:justify-between lg:px-12 lg:py-10',
          )}>
            <h3 className="t-h1 text-green">У вас остались вопросы?</h3>
            <div className="mt-4 lg:mt-12">
              <p className="t-24 paragraph">Для составления плана работ по готовому проекту, пожалуйста, загрузите его нажав кнопку ниже. И мы свяжемся с вами для обсуждения деталей.</p>
              <div className="mt-7 lg:mt-5">
                <Button color='green'>Загрузить</Button>
              </div>
            </div>
          </div>

          <div className="bg-green text-silver rounded-3xl px-5 py-6 mt-12 lg:col-span-5 lg:px-8 lg:py-10 lg:mt-0">
            <p className="t-24 lg:pr-28">Оставте свой номер и мы будем рады проконсультировать вас уже через 15 минут.</p>

            <div className="mt-8 lg:mt-10">
              <Form orientation='v'/>
            </div>
          </div>

        </div>
      </section>

      <section className="mt-16 lg:mt-24">
        <h2 className="t-h1 text-green w-1/2">Наши сотрудники</h2>

        <div className="mt-8">
          <div className="-mx-5 lg:hidden">
            <Swiper
              spaceBetween={16}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              width={320}
              autoHeight={true}
            >
              {team.map((employee, index) => (
                <SwiperSlide key={index}>
                  <div className="w-80">
                    <Employee {...employee}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:grid grid-cols-12 gap-x-10">
            {team.map((employee, index) => (
              <div key={index} className='col-span-4'>
                <Employee {...employee}/>
              </div>)
            )}
          </div>
        </div>

        <div className="mt-10">
          <Button color='black' link='team'>Остальные</Button>
        </div>
      </section>

      <section className='mt-20 lg:mt-24'>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">

          <div className="lg:col-span-6 relative">
            <h2 className="t-h1 text-green">Отзывы довольных клиентов</h2>

            <div className="mt-8 lg:absolute lg:bottom-10 lg:left-0 lg:w-full lg:mt-0 lg:flex lg:flex-col-reverse">
              <h3 className="t-h2 mt-6">Катарина Ланц</h3>

              <p className="paragraph t-24 mt-4 lg:pr-16 lg:mt-5">Обратилась Solip для ремонта своей первой собственной квартиры. Ализан быстро составил проект и команда приступила к работе. Вот уже три месяца я живу в квартире мечты и полностью довольна тем, что сделала выбор в пользу именно этой компании. Им удалось воплотить мои пожелания в жизнь.</p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-6">
            <SliderCard slides={slides}/>
          </div>

        </div>
      </section>

      <section className="mt-16 mb-16 lg:mt-20 lg:mb-20">
        <ContactMap
          companyName={contacts.company_name}
          address={contacts.address}
          phone={contacts.phone}
          email={contacts.email}
          schedule={contacts.schedule}
        />
      </section>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const contactResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-page`
  );

  return {
    props: {
      contactData: contactResponse.data,
    },
    revalidate: 10
  };
}