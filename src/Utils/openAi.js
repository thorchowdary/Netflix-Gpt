import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API,
});
export default openAi;
