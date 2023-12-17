import Link from "next/link";
function MidBands(props) {
  return (
    <div className="my-10 flex flex-row flex-wrap justify-around gap-4 text-2xl text-text-light  md:text-4xl ">
      {props.bands.slice(11, 30).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h3 className="relative font-subheading transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-accent before:opacity-0 before:transition-all  before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100 ">
            {band.name}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default MidBands;
