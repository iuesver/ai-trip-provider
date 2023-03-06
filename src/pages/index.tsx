import axios from "axios";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface Data {
  title: string;
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
}

export default function Home({ data }: { data: Data[] }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Summarize all news in 3 lines for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>hi</div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${process.env.API_URL}`, {
    headers: {
      "X-Naver-Client-Id": `${process.env.API_ID}`,
      "X-Naver-Client-Secret": `${process.env.API_SECRET}`,
    },
    params: {
      query: "오늘의 뉴스",
      display: 10,
      sort: "sim",
      start: 1,
    },
  });
  const data = response.data.items;
  return { props: { data } };
};
