import Link from "next/link";
import Image from "next/image";
function TopBands(props) {
  return (
    <div className="flex flex-col gap-4">
      {props.bands.slice(0, 10).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <div className="flex flex-row items-center justify-center ">
            <h2 className="relative text-center font-heading text-2xl uppercase text-text-light transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all before:duration-500  before:content-[''] hover:before:w-full hover:before:opacity-100 md:text-4xl ">
              {band.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TopBands;
