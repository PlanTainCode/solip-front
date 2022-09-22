import Image from "next/image";

export default function ServicePost({ title, description, price, image }) {
  return (
    <div className="relative">
      <div className="relative h-56">
        <Image alt='' src={image} layout='fill' objectFit="cover" className="rounded-3xl"/>
      </div>
      <p className="font-caption text-16px mt-6 lg:mt-7">{title}</p>
      <p className="font-caption text-16px mt-3">{price}</p>
      <p className="text-14px mt-2 line-clamp-4">{description}</p>
    </div>
  );
}