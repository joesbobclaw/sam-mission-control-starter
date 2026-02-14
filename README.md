# Sam Mission Control

Activity dashboard for Sam - tracks actions, scheduled tasks, and provides transparency.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Files to update

- `app/data/activities.json` - Add new activities during heartbeats
- `app/data/scheduled.json` - Update recurring and one-time tasks

## Structure

```
app/
├── page.tsx          # Main dashboard
├── layout.tsx        # Root layout
├── globals.css       # Tailwind styles
└── data/
    ├── activities.json   # Activity feed data
    └── scheduled.json    # Scheduled tasks data
```
