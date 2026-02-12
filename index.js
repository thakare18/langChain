import {config} from 'dotenv';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"


config();


// model creation 

const model = new ChatGoogleGenerativeAI({
    model: "gemini-3-flash-preview",
    apiKey: process.env.GEMINI_API_KEY
})

// chat creation

model.invoke("best google gemini model for coding").then(console.log)