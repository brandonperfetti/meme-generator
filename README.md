# Meme Generator

## Prerequisites

This project assumes you have working knowledge of:

- [Trigger.dev](https://trigger.dev/)
- [OpenAI](https://openai.com/)
- [Imgflip](https://imgflip.com/)
- [Supabase](https://supabase.io/)
- [Resend](https://resend.io/)
- [Next.js](https://nextjs.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then create a `.env.local` file with the following contents:

```bash
TRIGGER_API_KEY=your_trigger_api_key
TRIGGER_API_URL=https://cloud.trigger.dev
OPENAI_API_KEY=your_openai_api_key
IMGFLIP_USERNAME=your_imgflip_username
IMGFLIP_PW=your_imgflip_password
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
BASE_URL=http://localhost:3000
```

Then run the development server:

```bash
npm run dev
```

Then in another terminal do:

```bash
npx @trigger.dev/cli@latest dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `src/pages/index.js`. The page
auto-updates as you edit the file.
