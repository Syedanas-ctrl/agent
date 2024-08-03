import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText, tool } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: google("models/gemini-1.5-flash"),
        system: 'You are a helpful assistant that answers questions about city/location. whenever you are invoking a tool, giveout a proper sentence formation response with the information the tool is providing.',
        messages: convertToCoreMessages(messages),
        tools: {
            weather: tool({
                description: 'Get the weather in a location',
                parameters: z.object({
                    location: z.string().describe('The location to get the weather for'),
                }),
                execute: async ({ location }) => ({
                    location,
                    temperature: 72 + Math.floor(Math.random() * 21) - 10,
                }),
            }),
            "city_info": tool({
                description: 'Get information about a city',
                parameters: z.object({
                    location: z.string().describe('The city to get information for'),
                }),
                execute: async ({ location }) => ({
                    location,
                    population: 1000000 + Math.floor(Math.random() * 1000000) - 500000,
                    area: 1000 + Math.floor(Math.random() * 1000) - 500,
                }),
            }),
        },
    });

    return result.toAIStreamResponse();
}