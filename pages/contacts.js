import Head from "next/head";
import MainLayout from "../components/layouts/mainLayout";
import ContactMap from "../components/modules/contactMap";
import Form from "../components/modules/form";
import { fetcher } from "../lib/api";

export default function Team({ pageData }) {
  const { title, company_name, address, email, phone, schedule } = pageData.attributes;

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="t-h1 text-green">{title}</h1>

      <div className="mb-14 mt-8 lg:mt-12 lg:mb-20">
        <ContactMap
          companyName={company_name}
          address={address}
          email={email}
          phone={phone}
          schedule={schedule}
        />
        <p className="mt-10 t-24 lg:w-1/2 lg:mt-6">
          Оставте свой номер и мы будем рады проконсультировать вас уже через 15 минут.
        </p>

        <div className="mt-4 lg:mt-5">
          <Form orientation="h"/>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const pageResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-page`
  );

  return {
    props: {
      pageData: pageResponse.data,
    }
  };
}