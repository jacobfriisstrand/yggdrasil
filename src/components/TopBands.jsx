import Link from "next/link";
function TopBands(props) {
  return (
    <div className="my-4 flex flex-col gap-y-4 text-center text-3xl uppercase  text-text-light md:text-5xl">
      {props.bands.slice(0, 10).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h2 className="relative transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all  before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100 ">
            {band.name}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default TopBands;
