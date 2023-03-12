import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { Configuration, OpenAIApi } from "openai";

const API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const prompt = req.body.prompt;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `'${prompt}'주소의 main content를 분석해줘.`,
      max_tokens: 2048,
      n: 1,
      temperature: 0.7,
    });
    res.status(200).json({ response: response.data.choices[0].text?.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something's wrong." });
  }
};

export default handler;
