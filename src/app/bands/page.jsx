import MidBands from "@/components/MidBands";
import SmallBands from "@/components/SmallBands";
import TopBands from "@/components/TopBands";

import styles from ".//Bands.module.css";

async function page() {
  const bands = await fetch("http://localhost:8080/bands/").then((res) => res.json());

  return (
    <>
      <h1>This is the bands page</h1>
      <div className={styles.bandFlex}>
        <TopBands bands={bands} />
        <MidBands bands={bands} />
        <SmallBands bands={bands} />
      </div>
    </>
  );
}

export default page;
