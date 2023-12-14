import Link from "next/link";
function MidBands(props) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-center text-2xl uppercase text-text-light md:my-10  md:text-4xl ">
      {props.bands.slice(11, 20).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h3 className="relative transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all  before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100 ">
            {band.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default MidBands;
