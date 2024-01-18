import { NextResponse } from 'next/server'
import type { TAuthForm } from 'src/features/auth/types'
import { StorageKeys } from 'src/shared/constants'

const authData: TAuthForm = {
  email: 'example@mail.com',
  password: 'P@ss!234',
}

export async function POST(req: Request) {
  const body: TAuthForm = await req.json()

  if (body.email == authData.email && body.password == authData.password) {
    return NextResponse.json(
      { type: 'success' },
      { headers: { 'Set-Cookie': `${StorageKeys.TOKEN}=token;path=/` } }
    )
  }

  return NextResponse.json({ type: 'error', error: 'Incorrect email or password' })
}
