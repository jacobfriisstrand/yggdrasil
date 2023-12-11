import Link from "next/link";

function SmallBands(props) {
  return (
    <div>
      {props.bands.slice(31, 70).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h4>{band.name}</h4>
        </Link>
      ))}
    </div>
  );
}

export default SmallBands;
