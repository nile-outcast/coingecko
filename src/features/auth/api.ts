import type { TAuthForm } from './types'

type Result =
  | { type: 'success' }
  | {
      type: 'error'
      error: string
    }

const authData: TAuthForm = {
  email: 'example@mail.com',
  password: 'P@ss!234',
}

export const signIn = async (data: TAuthForm): Promise<Result> => {
  return new Promise((resolve) => {
    const isValid = data.email == authData.email && data.password == authData.password
    const response: Result = isValid
      ? { type: 'success' }
      : {
          type: 'error',
          error: 'Incorrect email or password',
        }
    setTimeout(() => resolve(response), 700)
  })
}
