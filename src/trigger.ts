import { TriggerClient } from '@trigger.dev/sdk'

export const client = new TriggerClient({
	id: 'meme-generator-X2L8',
	apiKey: process.env.TRIGGER_API_KEY,
	apiUrl: process.env.TRIGGER_API_URL,
})
