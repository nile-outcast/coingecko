import type { TAuthForm } from './types'

type Result =
  | { type: 'success' }
  | {
      type: 'error'
      error: string
    }

export const signIn = async (url: string, { arg }: { arg: TAuthForm }): Promise<Result> => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  })

  return res.json()
}
