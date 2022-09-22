import Image from "next/image";
import Link from "next/link";

export default function ShortPost({ imageUrl, title, description, link }) {
  return (
    <Link href={link}>
      <a className="block t-24">
        <div className="relative h-44 lg:h-75">
          <Image src={imageUrl} alt={title} layout='fill' className="rounded-3xl" objectFit="cover"/>
        </div>
        <p className="font-caption mt-5">{title}</p>
        <p className="paragraph mt-3 line-clamp-4">{description}</p>
      </a>
    </Link>
  );
}