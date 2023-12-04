import Link from "next/link";
import Image from "next/image";

const MenuCard = ({ data, route, style }) => {
  //https://daisyui.com/components/card/
  return (
    <div className={`rounded-lg ${style}`}>
      <Link
        href={{
          pathname: `/${route}`,
          query: { name: data.link },
        }}
      >
        <div className="card cursor-pointer flex flex-col items-center">
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={data.imgUrl} alt={data.description} />
          </figure>
          <div className="items-center text-center">
            <h2 className="text-base font-medium md:font-semibold font-sans md:font-mono tracking-tighter mt-2 text-[#808191]">
              {data.name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
