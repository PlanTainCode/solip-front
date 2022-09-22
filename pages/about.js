import Image from "next/image";
import MainLayout from "../components/layouts/mainLayout";
import StepBlocks from "../components/modules/stepBlocks";
import imageSolip from '../public/images/about/solip.png';
import imagePaper from '../public/images/about/paper.png'
import Head from "next/head";
import { fetcher } from "../lib/api";
import { getImageUrl } from '../lib/image';
import { marked } from 'marked';

export default function About({ pageData }) {
  const { title, content, caption, step, text_1 } = pageData.attributes;
  const contentList = content.split('\n\n');
  const stepList = step.map(({ id, description, title, slider }) => {
    const slides = slider.map(({ image, title, content }) => {
      return {
        imageUrl: getImageUrl(image.data.attributes.url),
        title,
        text: content
      }
    });

    return {
      id,
      title,
      text: description,
      slides
    }
  })

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <Image src={imageSolip} alt='' layout='responsive' placeholder="blur"/>
      <div className="mt-10 space-y-4 lg:mt-16 lg:space-y-6">
        {contentList.map((text, index) => (
          <div className="paragraph t-24"
            key={index}
            dangerouslySetInnerHTML={{__html: marked.parse(text)}}
          />
        ))}
      </div>

      {step && <>
        <h2 className="t-h1 text-green mt-16 mb-8 lg:mt-24 lb:mb-16">{caption}</h2>
        <StepBlocks blocks={stepList}/>
      </>}

      {text_1 &&
      <div className="bg-white rounded-3xl relative pl-5 pr-20 py-6 mt-14 mb-14 lg:my-40 lg:px-12 lg:py-20">
        <p className="paragraph t-24 lg:w-2/3 lg:pr-24">{text_1}</p>
        <div className="w-[124px] absolute top-1/2 -right-6 -translate-y-1/2 lg:w-1/2">
          <Image src={imagePaper} alt='' layout='responsive'/>
        </div>
      </div>}
    </MainLayout>
  );
}

export async function getStaticProps() {
  const pageResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=step.slider.image`
  );

  return {
    props: {
      pageData: pageResponse.data,
    }
  };
}