import Head from "next/head";
import { useState } from "react";
import Button from "../components/elements/button";
import Employee from "../components/elements/employee";
import MainLayout from "../components/layouts/mainLayout";
import { fetcher } from '../lib/api';
import { getImageUrl } from '../lib/image';
import { marked } from 'marked';

export default function Team({employees, page}) {
  const { title, content } = page;
  const team = employees.map(({id, attributes}) => {
    return {
      id: id,
      name: attributes.name,
      position: attributes.position,
      image: getImageUrl(attributes.image.data.attributes.url),
    }
  });
  const [showMore, setShowMore] = useState(false);
  const shortCount = 6;
  const list = showMore ? team : team.slice(0, shortCount);

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="t-h1 text-green">{title}</h1>
      <div className="mt-4 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="paragraph t-24 lg:col-span-11">
          <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
      </div>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {list.map(({ name, position, image}, index) => (
          <div key={index} className=''>
            <Employee name={name} position={position} image={image}/>
          </div>)
        )}
      </div>
      <div className="mt-6 mb-14 lg:mt-10 lg:mb-24">
        {team.length > list.length && <Button color='black' onClick={() => setShowMore(true)}>Остальные</Button>}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const employeesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/employees?populate=*`
  );

  const pageResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/team-page`
  );

  const pageAttributes = pageResponse.data.attributes;

  return {
    props: {
      employees: employeesResponse.data,
      page: {
        title: pageAttributes.title,
        content: marked.parse(pageAttributes.content)
      }
    },
    revalidate: 10
  };
}