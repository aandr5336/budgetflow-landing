import config from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config })
    const users = await payload.find({ collection: 'users', limit: 1 })
    return Response.json({
      ok: true,
      cmsUrl: process.env.CMS_URL || null,
      frontendUrl: process.env.FRONTEND_URL || null,
      hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
      dbHost: (process.env.DATABASE_URL || '').split('@')[1]?.split('/')[0] || null,
      userCount: users.totalDocs,
    })
  } catch (error) {
    const err = error as Error
    return Response.json(
      {
        ok: false,
        cmsUrl: process.env.CMS_URL || null,
        hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
        error: err?.message || String(error),
        stack: (err?.stack || '').slice(0, 800),
      },
      { status: 500 },
    )
  }
}
