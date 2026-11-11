# SafetyReport — Aviation Voluntary Reporting System

A Next.js + Supabase starter application for voluntary aviation safety reporting.

## Included in this starter
- Public reporting landing page and voluntary report form.
- Anonymous or confidential identified reporting option.
- Server-side validation and generated report reference.
- PostgreSQL schema with row-level security.
- Restricted staff sign-in and basic report status dashboard.
- GitHub/Vercel-ready Next.js project structure.

## Important safety, privacy and operational limitations
This is a development starter, **not a certified or production-approved safety reporting system**. Do not collect real operational reports or personal data until the owner has completed a privacy impact assessment, legal review, security testing, backup/recovery design, retention and deletion policy, incident response plan, access-control review and operational acceptance. The sample form text is not a substitute for an approved just-culture/confidentiality policy. Anonymous submissions are not technically guaranteed untraceable: hosting, network and security logs may contain metadata. Configure log minimization and retention with competent privacy/security advice.

This version does not yet include file uploads, case narrative viewer, reporter follow-up messaging, public reference tracking, formal risk matrix, investigation workflow, safety recommendations, configurable retention, audit trail, rate limiting/CAPTCHA, email notifications, export/reporting or multi-tenant organizations. Add and test these before operational deployment. The dashboard is intentionally basic. Never expose the Supabase service-role key in client-side code.

## 1. Create Supabase project
1. Create a project at https://supabase.com.
2. Open SQL Editor and run `supabase/migrations/001_initial_schema.sql`.
3. In Authentication, create your first staff user (email/password).
4. Copy that user's UUID from Authentication > Users.
5. Run the commented `insert into public.staff_roles...` statement in SQL Editor, replacing `AUTH_USER_UUID` with the UUID and setting role to `safety_admin`.
6. In Project Settings > API, copy the Project URL, anon/public key and service_role key.

## 2. Configure local environment
Copy `.env.example` to `.env.local` and populate:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only; never use a `NEXT_PUBLIC_` prefix)

## 3. Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## 4. Push to GitHub
Create an empty GitHub repository. Then run:
```bash
git init
git add .
git commit -m "Initial SafetyReport aviation VRS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
Do not commit `.env.local` or secrets.

## 5. Deploy to Vercel
1. Sign in to https://vercel.com and choose Add New > Project.
2. Import the GitHub repository.
3. Keep the detected Next.js settings.
4. Add the three environment variables above in Project Settings > Environment Variables (Production, Preview and Development as appropriate).
5. Deploy. Redeploy after changing environment variables.
6. In Supabase Auth URL Configuration, set the production Site URL to your Vercel domain and add the required redirect URLs if using email authentication.

## 6. Before real-world use
- Implement and test rate limiting and bot protection at the API edge.
- Decide governance: system owner, safety manager, authorized reviewers and escalation routes.
- Define confidentiality, non-punitive/just-culture, mandatory-reporting boundary, data protection, retention and disclosure rules for the applicable jurisdiction.
- Separate reporter identity from report content in the database with stricter permissions and access logging.
- Add immutable audit events for every case access/change; do not rely only on database timestamps.
- Add secure attachment scanning and private storage if attachments are enabled.
- Conduct threat modelling, penetration testing, RLS tests and backup/restore drills.
- Validate the workflow against ICAO Annex 19, Doc 9859 and applicable State regulations and approved procedures. This software does not itself establish regulatory compliance.
