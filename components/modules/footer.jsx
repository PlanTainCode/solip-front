import cn from "classnames";
import Button from "../elements/button";

function spliceIntoChunks(arr, chunkSize = 2) {
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

export default function Footer() {
  const footerMenu = [
    { link: '#', text: 'главная' },
    { link: '#', text: 'услуги' },
    { link: '#', text: 'портфолио' },
    { link: '#', text: 'новости' },
    { link: '#', text: 'полезные статьи' },
    { link: '#', text: 'о нас' },
    { link: '#', text: 'корневой вычет' },
    { link: '#', text: 'политика конфиденциальности' },
  ];

  const footerMenuChunks = spliceIntoChunks(footerMenu, 4);
  const renderMenuItems = (items) => {
    return items.map(({link, text}) => (
      <li key={text}>
        <a href={link} className="text-silver/60 hover:underline underline-offset-2">{text}</a>
      </li>
    ))
  };
  const RenderMenu = ({items}) => {
    return (
      <ul className='space-y-2 mt-2 first-of-type:mt-0 lg:mt-0'>
        {renderMenuItems(items)}
      </ul>
    );
  };

  return (
    <>
      <section className={cn(
        'rounded-3xl bg-green text-silver px-5 py-6',
        'lg:flex lg:justify-between lg:items-center lg:px-8 lg:py-7'
      )}>
        <p className="paragraph t-24 max-w-[680px]">Вам нужно построить дом или помещение? Solip может помочь вам с реализацией ваших задумок – с этапа проекта и получения одобрения до сдачи в эксплуатацию.</p>
        <div className="mt-6 lg:mt-0 lg:w-100">
          <Button color='black'>Перейти</Button>
        </div>
      </section>

      <footer className="mt-12 bg-black rounded-t-3xl px-6 py-7 text-18px lg:p-10">
        <div className="lg:flex lg:gap-x-20">
          {footerMenuChunks.map(
            (items, index) => <RenderMenu items={items} key={index}/>
          )}

          <ul className='space-y-2 t-24 text-silver mt-8 lg:mt-0 lg:ml-auto lg:mr-10 lg:text-24px'>
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
    </>
  );
}