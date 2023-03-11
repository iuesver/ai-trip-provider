import axios from "axios";
import Head from "next/head";
import { GetServerSideProps } from "next";
import React, { useState, useEffect } from "react";

interface Data {
  title: string;
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
}

export default function Home({ data }: { data: Data[] }) {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/api", { prompt: prompt });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

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
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Enter a prompt:
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {response && <p>{response}</p>}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${process.env.NAVER_API_URL}`, {
    headers: {
      "X-Naver-Client-Id": `${process.env.NAVER_API_ID}`,
      "X-Naver-Client-Secret": `${process.env.NAVER_API_SECRET}`,
    },
    params: {
      query: "오늘의 뉴스",
      display: 100,
      sort: "sim",
      start: 1,
    },
  });
  const data = response.data.items;
  return { props: { data } };
};
