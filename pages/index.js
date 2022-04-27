import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Miresevini tek Merrnjoftime</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5340716281741826"
          crossorigin="anonymous"
        ></script>
      </Head>

      <main>
        <Header title="Miresevini!" />
        <p className="description">Per me shume informacion kliko me poshte.</p>
      </main>

      <Footer />
    </div>
  );
}
