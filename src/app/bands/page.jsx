import MidBands from "@/components/MidBands";
import SmallBands from "@/components/SmallBands";
import TopBands from "@/components/TopBands";

async function page() {
  const bands = await fetch(
    "https://funky-melodious-jingle.glitch.me/bands/",
  ).then((res) => res.json());

  return (
    <>
      <h1 className="text-center font-heading text-4xl sm:text-5xl">Acts</h1>
      <div className="mx-auto my-8 flex flex-col items-center [max-width:1000px]">
        <TopBands bands={bands} />
        <MidBands bands={bands} />
        <SmallBands bands={bands} />
      </div>
    </>
  );
}

export default page;
