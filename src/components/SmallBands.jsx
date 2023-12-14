import Link from "next/link";

function SmallBands(props) {
  return (
    <div className="my-4 flex flex-row flex-wrap justify-center gap-x-8 text-center text-lg uppercase leading-8 text-text-light  md:text-2xl">
      {props.bands.slice(31, 60).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h4 className="text-accent hover:underline">{band.name}</h4>
        </Link>
      ))}
    </div>
  );
}

export default SmallBands;
