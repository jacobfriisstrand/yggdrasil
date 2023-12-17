import Link from "next/link";
import Image from "next/image";
function TopBands(props) {
  return (
    <div className="grid grid-cols-1 gap-2 text-center text-2xl uppercase  text-text-light md:text-4xl">
      {props.bands.slice(0, 10).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="https://source.unsplash.com/random/400x400"
              alt="artist image"
              width={100}
              height={100}
              className="rounded-2xl"
            />
            <h2 className=" relative font-heading transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all  before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100 ">
              {band.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TopBands;
