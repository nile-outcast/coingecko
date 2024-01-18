'use client'
import { Input } from 'src/shared/ui/input'
import { useAuthForm } from '../../features/auth/model'
import { Button } from '../../shared/ui/button'
import styles from './auth.module.css'

export const AuthForm = () => {
  const { loading, register, onSubmit, errors } = useAuthForm()

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        {...register('email')}
        label="Email"
        disabled={loading}
        type="text"
        error={errors.email?.message}
      />

      <Input
        {...register('password')}
        label="Password"
        disabled={loading}
        type="password"
        error={errors.password?.message ?? errors.root?.message}
      />

      <Button disabled={loading} type="submit">
        SignIn
      </Button>
    </form>
  )
}
