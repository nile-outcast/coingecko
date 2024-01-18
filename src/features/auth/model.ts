import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
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

  const [loading, setLoading] = useState(false)

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

  const onSingIn = async (data: TAuthForm) => {
    try {
      setLoading(true)

      const res = await signIn(data)

      if (res.type == 'error') {
        formFields.forEach((field) => setError(field, { message: res.error }))
      } else {
        replace('/')
      }
    } finally {
      setLoading(false)
    }
  }

  return { errors, register, onSubmit: handleSubmit(onSingIn), loading }
}
