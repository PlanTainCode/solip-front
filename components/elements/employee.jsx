import Image from "next/image";

export default function Employee({ name, position, image }) {
  return (
    <div className="relative rounded-3xl overflow-hidden h-100 lg:h-122.5" style={{transform: 'translate3d(0, 0, 0)'}}>
      <Image src={image} alt='1' layout='fill' className='block w-full' objectFit='cover' objectPosition='top' style={{transform: 'translate3d(0, 0, 0)'}}/>

      <div className="absolute w-[268px] bottom-0 right-0 bg-silver rounded-tl-3xl p-5 lg:w-75 lg:pt-7 lg:px-8 lg:pb-5" style={{transform: 'translate3d(0, 0, 0)'}}>
        { name && <p className="t-h2">{name}</p> }
        { position && <p className="t-24 mt-1">{position}</p> }
      </div>
    </div>
  );
};