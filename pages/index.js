import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/elements/button'
import banner from '../public/images/home/banner.jpg'
import advantage_1_1 from '../public/images/home/advantage-1-1.jpg';
import advantage_2_1 from '../public/images/home/advantage-2-1.jpg';
import advantage_3_1 from '../public/images/home/advantage-3-1.jpg';
import work_1 from '../public/images/home/work-1.jpg';
import human_1 from '../public/images/home/human-1.jpg';
import human_2 from '../public/images/home/human-2.jpg';
import human_3 from '../public/images/home/human-3.jpg';

export default function Home() {
  return (
    <div>
      <div className="container">
        <section className='relative mt-20 text-silver'>
          <Image src={banner} alt='banner' className='block rounded-b-3xl rounded-t-[80px]' layout='responsive' />
          <p className="text-40px absolute left-8 top-[240px] w-[430px]">ремонт домов и квартир в Гётеборге</p>
          <p className="paragraph text-24px absolute right-8 bottom-8 w-[660px]">Ваш комфорт – наша главная задача. Мы поможем качественно и быстро воплотить ваши самые смелые идеи, применяя высокие стандарты качества и экологичности. Оперативная разработка проекта по вашему вкусу и начало работ в удобное для вас время.</p>
          <div className="absolute left-8 bottom-8 w-[330px]">
            <Button>О нас</Button>
          </div>
        </section>

        <section className='flex justify-between items-center rounded-3xl border-2 border-black px-8 py-7 mt-20'>
          <p className="paragraph text-24px max-w-[600px]">У вас уже есть проект, и вы хотите узнать его стоимость? Загрузите имеющуюся информацию и мы поможем вам с предварительным расчетом.</p>
          <div className="w-[400px]">
            <Button color='green'>Загрузить</Button>
          </div>
        </section>

        <section className='mt-20'>
          <div className="grid grid-cols-12 gap-x-10 mb-14">
            <h2 className="text-h1 text-green col-span-8">Наши преимущества</h2>
          </div>

          <div className="-space-y-16">
            <div className="grid grid-cols-12 gap-x-10">
              <div className="col-span-6">
                <div className="relative">
                  <Image src={advantage_1_1} alt='1' className='block w-full rounded-3xl' layout='responsive' />

                  <div className="absolute left-0 top-12 right-0 border-t-2 border-silver">
                    <div className="w-1/3 h-2.5 bg-silver"></div>
                  </div>

                  <div className="absolute w-[450px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-5">
                    <p className="text-h2">Дом ХХХХ</p>
                    <p className="text-24px mt-1">срок реалтзации ХХ дней</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="w-2 h-2 mx-1 rounded-full border border-green bg-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                </div>
              </div>

              <div className="col-span-6 flex items-center pb-16">
                <div className="pr-10">
                  <p className="text-display text-green">01.</p>
                  <p className="text-h2">Быстрая реализация проектов</p>
                  <p className='paragraph text-24px mt-6'>Мы приступим к проекту сразу же после согласования и закончим его тогда, когда это нужно именно вам. Время – ценнейший ресурс, который мы для вас экономим.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-10">
              <div className="col-span-6 flex items-center pb-16">
                <div className="pr-10">
                  <p className="text-display text-green">02.</p>
                  <p className="text-h2">Забота о природе</p>
                  <p className='paragraph text-24px mt-6'>Мы заботимся о природе и уважаем пространство, в котором живем – поэтому в работе мы стараемся использовать экологичные материалы.</p>
                </div>
              </div>

              <div className="col-span-6">
                <div className="relative">
                  <Image src={advantage_2_1} alt='1' className='block w-full rounded-3xl' layout='responsive' />

                  <div className="absolute left-0 top-12 right-0 border-t-2 border-silver">
                    <div className="w-1/3 h-2.5 bg-silver relative left-1/3"></div>
                  </div>

                  <div className="absolute w-[450px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-5">
                    <p className="text-h2">Дом ХХХХ</p>
                    <p className="text-24px mt-1">материалы на ХХ% экологичнее</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green bg-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-10">
              <div className="col-span-6">
                <div className="relative">
                  <Image src={advantage_3_1} alt='1' className='block w-full rounded-3xl' layout='responsive' />

                  <div className="absolute left-0 top-12 right-0 border-t-2 border-silver">
                    <div className="w-1/3 h-2.5 bg-silver relative left-2/3"></div>
                  </div>

                  <div className="absolute w-[450px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-5">
                    <p className="text-h2">Дом ХХХХ</p>
                    <p className="text-24px mt-1">что то про качество</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green bg-green"></div>
                </div>
              </div>

              <div className="col-span-6 flex items-center pb-16">
                <div className="pr-10">
                  <p className="text-display text-green">03.</p>
                  <p className="text-h2">Высокое качество исполнения</p>
                  <p className='paragraph text-24px mt-6'>Мы гарантируем высокое качество выполнения всех ремонтных работ благодаря штату профессионалов, имеющих большое портфолио в самых разных стилях и техниках стротельства.</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="mt-20">
          <h2 className="text-h1 text-green">Наши работы</h2>

          <div className="mt-14">
            <div className="overflow-hidden rounded-3xl relative text-0">
              <Image src={work_1} alt='Работа 1' className='block w-full' layout='responsive' />
              <div className="absolute left-0 top-0 w-full h-full bg-black/40"></div>
              <div className="absolute left-0 top-14 right-0 border-t-2 border-silver">
                <div className="w-1/3 h-2.5 bg-silver relative"></div>
              </div>

              <div className="absolute -bottom-[70px] -left-3 text-display-lg text-white pointer-events-none">01.</div>

              <div className="absolute left-8 bottom-5 w-[330px]">
                <Button>Подробнее</Button>
              </div>

              <div className="absolute w-[450px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-5">
                <p className="text-h2">гостевой домик</p>
                <p className="text-24px mt-1">покрасили, облицевали, положили крышу</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button color='black'>Остальные работы</Button>
          </div>
        </section>

        <section className='mt-24'>
          <div className="grid grid-cols-12 gap-x-10">

            <div className="col-span-7 bg-white rounded-3xl px-12 py-10">
              <h3 className="text-h1 text-green">У вас остались вопросы?</h3>
              <p className="mt-12 text-24px paragraph">Для составления плана работ по готовому проекту, пожалуйста, загрузите его нажав кнопку ниже. И мы свяжемся с вами для обсуждения деталей.</p>
              <div className="mt-5">
                <Button color='green'>Загрузить</Button>
              </div>
            </div>

            <div className="col-span-5 bg-green text-silver rounded-3xl px-8 py-10">
              <p className="text-24px pr-32">Оставте свой номер и мы будем рады проконсультировать вас уже через 15 минут.</p>

              <div className="mt-12 space-y-5">
                <input type="text" className='block w-full bg-white text-black rounded-lg px-5 py-4 text-20px' placeholder='Имя' />
                <input type="tel" className='block w-full bg-white text-black rounded-lg px-5 py-4 text-20px' placeholder='+46 73 542 76 22' />

                <Button color='black'>Консультация</Button>
              </div>

              <div className="mt-5 text-12px">
                <p>Нажимая на кнопку, ты соглашаешься с Договором Публичной Оферты и обработкой своих персональных данных.</p>
                <div className="mt-4">
                  <p>
                    <a href="#" className="underline underline-offset-2">Договор Публичной Оферты</a>
                  </p>
                  <p>
                    <a href="#" className="underline underline-offset-2">Политика конфиденциальности</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-h1 text-green w-1/2">Наши сотрудники</h2>

          <div className="mt-8 grid grid-cols-12 gap-x-10">

            <div className="col-span-4 relative rounded-3xl overflow-hidden">
              <Image src={human_1} alt='1' layout='responsive' className='block w-full' />

              <div className="absolute w-[300px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-8">
                <p className="text-h2">Зураб</p>
                <p className="text-24px mt-2">Прораб-плиточник</p>
              </div>
            </div>

            <div className="col-span-4 relative rounded-3xl overflow-hidden">
              <Image src={human_2} alt='1' layout='responsive' className='block w-full' />

              <div className="absolute w-[300px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-8">
                <p className="text-h2">Александр </p>
                <p className="text-24px mt-2">Маляр</p>
              </div>
            </div>

            <div className="col-span-4 relative rounded-3xl overflow-hidden">
              <Image src={human_3} alt='1' layout='responsive' className='block w-full' />

              <div className="absolute w-[300px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-8">
                <p className="text-h2">Виктор</p>
                <p className="text-24px mt-2">Плиточник</p>
              </div>
            </div>

          </div>

          <div className="mt-10">
            <Button color='black'>Остальные</Button>
          </div>
        </section>

        <section className='mt-24'>
          <div className="grid grid-cols-12 gap-x-10">

            <div className="col-span-6 relative">
              <h2 className="text-h1 text-green">отзывы довольных клиентов</h2>

              <div className="absolute bottom-10 left-0 w-full">
                <p className="paragraph text-24px pr-16">Обратилась Solip для ремонта своей первой собственной квартиры. Ализан быстро составил проект и команда приступила к работе. Вот уже три месяца я живу в квартире мечты и полностью довольна тем, что сделала выбор в пользу именно этой компании. Им удалось воплотить мои пожелания в жизнь.</p>

                <h3 className="text-h2 mt-6">Катарина Ланц</h3>
              </div>
            </div>

            <div className="col-span-6">
              <div className="relative">
                  <Image src={advantage_1_1} alt='1' className='block w-full rounded-3xl' layout='responsive' />

                  <div className="absolute w-[450px] bottom-0 right-0 bg-silver rounded-tl-3xl pt-7 px-8 pb-5">
                    <p className="text-h2">Дом Катарины Ланц</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="w-2 h-2 mx-1 rounded-full border border-green bg-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                  <div className="w-2 h-2 mx-1 rounded-full border border-green"></div>
                </div>
            </div>

          </div>
        </section>

        <section className='flex justify-between items-center rounded-3xl bg-green text-silver px-8 py-7 mt-20'>
          <p className="paragraph text-24px max-w-[680px]">Вам нужно построить дом или помещение? Solip может помочь вам с реализацией ваших задумок – с этапа проекта и получения одобрения до сдачи в эксплуатацию.</p>
          <div className="w-[400px]">
            <Button color='black'>Перейти</Button>
          </div>
        </section>

        <footer className="mt-10 bg-black rounded-t-3xl p-10">
          <div className="flex gap-x-20">
            <ul className='space-y-2'>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">главная</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">услуги</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">портфолио</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">новости</a>
              </li>
            </ul>

            <ul className='space-y-2'>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">полезные статьи</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">о нас</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">корневой вычет</a>
              </li>
              <li>
                <a href="#" className="text-18px text-silver/60 hover:underline underline-offset-2">политика конфиденциальности</a>
              </li>
            </ul>

            <ul className='space-y-2 text-24px text-silver ml-auto mr-10'>
              <li>
                <a href="#" className="hover:underline underline-offset-2">+46 73 542 76 22</a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-2">info@solipbygg.se</a>
              </li>
              <li>пн-пт 10:00-18:00</li>
              <li>
                <a href="#" className="hover:underline underline-offset-2">налоговая информация</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
