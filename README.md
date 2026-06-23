# CompIQ

CompIQ is a full-stack Compensation Intelligence Platform inspired by Levels.fyi. It helps users explore, compare, and manage structured compensation data across companies, levels, locations, and compensation components.

## Features

* Compensation Explorer
* Company Compensation Details
* Compensation Comparison
* Add Compensation Records
* Edit Compensation Records
* Delete Compensation Records
* Search Companies
* Sort Compensation Data
* Compensation Breakdown

  * Base Salary
  * Bonus
  * Stock Compensation
  * Total Compensation

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* PostgreSQL (Neon)

### ORM

* Prisma

## Architecture

Frontend (Next.js)
↓
API Routes
↓
Prisma ORM
↓
Neon PostgreSQL

## Project Structure

app/
├── add-salary/
├── compare/
├── salaries/
├── edit-salary/
├── api/
├── components/
├── dashboard/

prisma/
├── schema.prisma
├── migrations/
├── seed.js

lib/
├── prisma.ts

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Open:

http://localhost:3000

## Database Setup

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
```

Run Prisma migrations:

```bash
npx prisma migrate deploy
```

Seed sample data:

```bash
node prisma/seed.js
```

## Deployment

Recommended deployment:

* Vercel
* Neon PostgreSQL

## Future Improvements

* Authentication
* Compensation Analytics
* Level-Based Filtering
* Salary Trend Visualizations
* Compensation Insights Dashboard

## Author

Pratyush Panda

Built as a Full Stack Engineering project focusing on end-to-end systems, frontend-backend integration, deployment readiness, and architecture quality.
