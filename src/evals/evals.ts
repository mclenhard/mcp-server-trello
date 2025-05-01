//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const trelloServerEval: EvalFunction = {
    name: 'trello-server Evaluation',
    description: 'Evaluates the listing of available Trello tools from the server',
    run: async () => {
        const result = await grade(openai("gpt-4"), "What are the available Trello tools?");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [trelloServerEval]
};
  
export default config;
  
export const evals = [trelloServerEval];