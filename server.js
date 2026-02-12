import {config} from 'dotenv';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import {PromptTemplate} from "@langchain/core/prompts"



config();


// model creation 

const model = new ChatGoogleGenerativeAI({
    model: "gemini-3-flash-preview",
    apiKey: process.env.GEMINI_API_KEY
})

// chat creation

// model.invoke("how to get off campus job").then(response => {
//     console.log(response.content);
// })


// prompt template creation 

const promptTemplate = PromptTemplate.fromTemplate(
    `explain {topic} in a very simple way like ELI5, make sure to include a core concept and avoid unnecessary jargon. make the answer an concise as possible.`
)

const chain = promptTemplate.pipe(model)

chain.invoke({topic: "mba cet avg persentile for top college in maharastra for obc student in mumbai"}).then(response => {
    console.log(response);
})