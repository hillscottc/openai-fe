import {Configuration, OpenAIApi} from "openai";
import axios from "axios";

const authHeader = `Bearer ${process.env.REACT_APP_OPENAI_KEY}`

// export const fetchChat = async (person1, person2, topic, isRap=false) => {
export const fetchChat = async ({persons, topic, isRap = false}) => {
  // Uses the openai library
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  // Silences warning https://community.openai.com/t/error-set-unsafe-header-user-agent-implement-chatgpt/264305
  configuration.baseOptions.headers = {
    Authorization: authHeader,
  };
  const openai = new OpenAIApi(configuration);

  const chatInto = isRap ? "Write a rap battle" : "create a discussion"
  let content = `${chatInto} between ${persons[0]} and ${persons[1]}`
  if (topic) content += ` discussing ${topic}`

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content },
    ],
    temperature: 0.8,
    max_tokens: 1024,
  });
  return response.data.choices[0].message?.content;
};

export const fetchCompleter = async (input) => {
  // Uses axios to query openai endpoint
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Complete this sentence: "${input}"`,
      model: "text-davinci-002",
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    }
  );
  return response.data.choices[0].text;
};