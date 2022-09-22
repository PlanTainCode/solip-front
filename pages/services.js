import Head from "next/head";
import { useState } from "react";
import ServicePost from "../components/elements/servicePost";
import MainLayout from "../components/layouts/mainLayout";
import { fetcher } from "../lib/api";
import { getImageUrl } from '../lib/image';
import cn from "classnames";

export default function Services({servicesData, categoriesData}) {
  const posts = servicesData.map(({id, attributes}) => {
    return {
      id: id,
      title: attributes.title,
      description: attributes.description,
      price: attributes.price,
      image: getImageUrl(attributes.image.data.attributes.url),
      categoriesId: attributes.categories.data.map(({id}) => id),
    }
  });

  const [categories, setCategories] = useState(
    categoriesData.map(({ attributes, id }) => {
      return {
        id,
        text: attributes.title,
        isActive: false
      }
    })
  );

  const [activeCategoryId, setActiveCategoryId] = useState(null);

  let filteredPosts = posts;

  if (activeCategoryId) {
    filteredPosts = posts.filter(({ categoriesId }) => categoriesId.includes(activeCategoryId))
  }

  const setActiveCategory = (activeId) => {
    setCategories(categories.map((category) => {
      return {
        ...category,
        isActive: category.id === activeId
      }
    }));
  }

  return (
    <MainLayout>
      <Head>
        <title>Услуги</title>
      </Head>

      <h1 className="t-h1 text-green">Услуги</h1>

      <div className="overflow-x-auto mt-10 -mx-6 lg:mt-12">
        <div className="flex px-6">
          {categories.map(({ id, text, isActive }) =>
            <div
              key={id}
              className={
                cn('px-6 py-1 border border-black rounded-full text-14px mr-2 mb-4 transition-colors duration-100 cursor-pointer lg:text-18px lg:hover:bg-black lg:hover:text-white', {
                  'bg-black text-white': isActive,
                  'text-black': !isActive,
                })
              }
              onClick={() => {
                isActive ? setActiveCategoryId(null) : setActiveCategoryId(id);
                setActiveCategory(id);
              }}
            >{text}</div>
          )}
        </div>
      </div>

      <div className="mt-8 mb-14 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-4 lg:gap-10 lg:mb-20">
        {filteredPosts
          .map(({ title, description, price, image }) => (
            <ServicePost key={title} title={title} description={description} price={price} image={image}/>
        ))}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=*`
  );

  const serviceСategoriesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/service-categories`
  );

  return {
    props: {
      servicesData: servicesResponse.data,
      categoriesData: serviceСategoriesResponse.data,
    }
  };
}