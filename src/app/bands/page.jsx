import MidBands from "@/components/MidBands";
import SmallBands from "@/components/SmallBands";
import TopBands from "@/components/TopBands";

async function page() {
  const bands = await fetch("http://localhost:8080/bands/").then((res) =>
    res.json(),
  );

  return (
    <>
      <div className="mx-auto my-8 flex flex-col items-center [max-width:1000px]">
        <TopBands bands={bands} />
        <MidBands bands={bands} />
        <SmallBands bands={bands} />
      </div>
    </>
  );
}

export default page;
