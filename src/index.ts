import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANISATION,
  apiKey: process.env.OPENAI_SECRET,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
