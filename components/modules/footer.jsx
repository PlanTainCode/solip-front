import cn from "classnames";
import Link from "next/link";
import Button from "../elements/button";
import Form from "./form";

function spliceIntoChunks(arr, chunkSize = 2) {
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

export default function Footer() {
  const menu = [
    { title: 'hem', link: '/' },
    { title: 'tjänster', link: '/services' },
    { title: 'vårt arbete', link: '/projects' },
    { title: 'kontakter', link: '/contacts' },
    { title: 'nyheter och kampanjer', link: '/news' },
    { title: 'användbar information', link: '/resources' },
    { title: 'om oss', link: '/about' },
    { title: 'rotvältranedräkning', link: '#' },
    { title: 'integritetspolicy', link: '/integritetspolicy' },
    { title: 'cookies', link: '/cookies' },
  ];

  const footerMenuChunks = spliceIntoChunks(menu, 4);
  const renderMenuItems = (items) => {
    return items.map(({link, title}) => (
      <li key={title}>
        <Link href={link}>
          <a className="text-silver/60 hover:underline underline-offset-2">{title}</a>
        </Link>
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
        'rounded-3xl bg-green text-silver px-5 py-6 mt-auto',
        'lg:flex lg:justify-between lg:items-center lg:px-8 lg:py-7'
      )}>
        <p className="paragraph t-24 max-w-[640px]">Solip kan hjälpa dig med ditt projekt från konstruktion och godkännande till driftsättning.</p>
        <div className="mt-6 lg:mt-0 lg:w-100">
          <Form orientation='v' short buttonText={'skicka förfrågan'} showDisclaimer/>
        </div>
      </section>

      <footer className="mt-12 bg-black rounded-t-3xl px-6 py-7 text-18px lg:p-10">
        <div className="lg:flex lg:gap-x-20">
          {footerMenuChunks.map(
            (items, index) => <RenderMenu items={items} key={index}/>
          )}

          <ul className='space-y-2 t-24 text-silver mt-8 lg:mt-0 lg:ml-auto lg:mr-10 lg:text-24px'>
            <li>
              <a href="tel:+46 73 542 76 22" className="hover:underline underline-offset-2">+46 73 542 76 22</a>
            </li>
            <li>
              <a href="mailto:info@solipbygg.se" className="hover:underline underline-offset-2">info@solipbygg.se</a>
            </li>
            <li>Måndag-fredag 10:00-18:00</li>
            <li>
              <a href="#" className="hover:underline underline-offset-2">Skatteinformation</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}