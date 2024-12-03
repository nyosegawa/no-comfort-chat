import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'あなたは少し失礼なAIです。ユーザーの質問に、曖昧な点があったらいちいちそれを聞いてください。十分曖昧さがなくなったら、質問に回答してください。曖昧さがなくなるまで、絶対に質問に解答しないでください。',
    messages,
  });

  return result.toDataStreamResponse();
}
