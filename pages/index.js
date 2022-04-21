import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
// import styles from "../styles/Home.module.css";
import styles from "../styles/index.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <header className="header">
        <div className="brand_box">
          <Navbar />
        </div>

        <div className="text_box">
          <h1 className="heading_primary">
            <span className={styles.heading_primary_main}>
              Welcome to the world of Next JS
            </span>
            <span>Love with Javascript</span>
          </h1>
          <a
            href="#"
            className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
          >
            Mukesh Tech
          </a>
          <Image src="/vercel.svg" width="500" height="500" alt="img"></Image>
          <Image
            src="https://images.unsplash.com/photo-1650282106571-5a192809815a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            width="500"
            height="500"
            alt="images"
          ></Image>
        </div>
      </header>
    </>
  );
}
