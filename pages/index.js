import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roll Productora</title>
        <meta name="description" content="Roll productora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/roll.png" alt="Roll Logo" width={200} height={100} />
        <h1>Sitio en construcción</h1>
      </main>
    </div>
  );
}
