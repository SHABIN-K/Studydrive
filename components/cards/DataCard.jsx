import Link from "next/link";
import Image from "next/image";

const DataCard = ({
  hrefData,
  data,
  altMsg,
  style,
  styleContent,
  syleName,
  sem,
}) => {
  //https://daisyui.com/components/card/
  return (
    <Link href={hrefData} className={`rounded-lg ${style}`}>
      <div className={`card cursor-pointer items-center ${styleContent}`}>
        <div>
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={data.imgUrl} alt={altMsg} />
          </figure>
        </div>
        <div className="items-center text-center">
          <h2
            className={`text-base font-medium md:font-semibold font-sans md:font-mono mt-2 ${syleName}`}
          >
            {data.name}
            {sem && <span className="pl-1.5">{sem}</span>}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default DataCard;
