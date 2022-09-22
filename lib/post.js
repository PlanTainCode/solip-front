import { marked } from 'marked';
import { getImageUrl } from './image';
import Block from "../components/modules/block";
import InfoBlock from "../components/elements/infoBlock";
import SliderBanner from '../components/modules/sliderBanner';

export const generateBlocks = (blocks) => {
  return blocks.map((block) => {
    if (['content.infoblock', 'content.infoblock-1-2'].includes(block.__component)) {
      const image = block.image.data;
      return {
        type: block.__component,
        imageUrl: image ? getImageUrl(block.image.data.attributes.url) : null,
        title: block.title,
        content: marked.parse(block.content)
      };
    }

    if (block.__component === 'content.big-slider') {
      const slide = block.slide;
      return {
        type: block.__component,
        slides: slide.map(({ id, content, image, title }) => {
          return {
            id,
            title,
            text: content,
            imageUrl: getImageUrl(image.data.attributes.url)
          };
        })
      };
    }

    if (block.__component === 'content.test') {
      const slider = block.slider;
      return {
        type: block.__component,
        title: block.title || null,
        text: block.description ? marked.parse(block.description) : null,
        slides: slider.map(({ id, content, image, title }) => {
          return {
            id,
            title,
            text: content,
            imageUrl: getImageUrl(image.data.attributes.url)
          };
        })
      };
    }

    return {
      type: null
    };
  });
}

export const renderBlock = (blockData, key) => {
  switch (blockData.type) {
    case 'content.infoblock':
      return (
        <div className="lg:col-span-full" key={key}>
          <InfoBlock
            title={blockData.title}
            content={blockData.content}
            imageUrl={blockData.imageUrl}
          />
        </div>
      )

    case 'content.infoblock-1-2':
      return (
        <div className="lg:col-span-1" key={key}>
          <InfoBlock
            title={blockData.title}
            content={blockData.content}
            imageUrl={blockData.imageUrl}
          />
        </div>
      )

    case 'content.big-slider':
      return (
        <div className="lg:col-span-full" key={key}>
          <SliderBanner slides={blockData.slides} showNavbar/>
        </div>
      )

    case 'content.test':
      return (
        <div className="lg:col-span-full" key={key}>
          <Block
            title={blockData.title}
            text={blockData.text}
            slides={blockData.slides}
            showNavbar
          />
        </div>
      )

    default:
      return <></>;
  }
};