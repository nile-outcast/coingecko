import type { TAuthForm } from './types'

type Result =
  | { type: 'success' }
  | {
      type: 'error'
      error: string
    }

export const signIn = async (data: TAuthForm): Promise<Result> => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res.json()
}
