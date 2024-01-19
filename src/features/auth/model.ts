import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { z } from 'zod'
import { signIn } from './api'
import type { TAuthForm } from './types'

const formFields: Array<keyof TAuthForm> = ['email', 'password']

const AuthScheme = z.object({
  email: z.string().email(),
  password: z
    .string()
    .length(8, 'Must be exactly 8 characters long')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character required')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character required')
    .regex(new RegExp('.*\\d.*'), 'One number required')
    .regex(new RegExp('.*[!@#$%^&*,.()-_=+].*'), 'One special character required'),
})

export const useAuthForm = () => {
  const { replace } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TAuthForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(AuthScheme),
  })

  const { trigger, isMutating } = useSWRMutation('/api/login', signIn, {
    onSuccess: (res) => {
      if (res.type == 'error') {
        formFields.forEach((field) => setError(field, { message: res.error }))
      } else {
        replace('/')
      }
    },
  })

  const onSingIn = (data: TAuthForm) => trigger(data)

  return { errors, register, onSubmit: handleSubmit(onSingIn), loading: isMutating }
}
