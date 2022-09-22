import Image from "next/image";

const InfoBlock = ({ title, content, imageUrl }) => {
  return (
    <div>
      {imageUrl && (
        <div className="relative h-44 mb-5 lg:h-75">
          <Image src={imageUrl} alt={title} layout='fill' className="rounded-3xl" objectFit="cover"/>
        </div>
      )}
      {title && <p className="font-caption mb-3">{title}</p>}
      {content && <div className="paragraph" dangerouslySetInnerHTML={{__html: content}}/>}
    </div>
  );
}

export default InfoBlock;