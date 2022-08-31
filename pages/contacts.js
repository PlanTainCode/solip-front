import Head from "next/head";
import MainLayout from "../components/layouts/mainLayout";
import ContactMap from "../components/modules/contactMap";
import Form from "../components/modules/form";

export default function Team() {

  return (
    <MainLayout>
      <Head>
        <title>Контакты</title>
      </Head>

      <div className="mb-14 lg:mt-10 lg:mb-20">
        <ContactMap/>
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