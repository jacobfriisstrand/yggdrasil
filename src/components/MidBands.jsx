import Link from "next/link";
function MidBands(props) {
  return (
    <div>
      {props.bands.slice(11, 30).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h3>{band.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default MidBands;
