'use client'
import { useAuthForm } from 'src/features/auth'
import { Button } from 'src/shared/ui/button'
import { Input } from 'src/shared/ui/input'
import styles from './auth.module.css'

export const AuthForm = () => {
  const { loading, register, onSubmit, errors } = useAuthForm()

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        {...register('email')}
        className={errors.email?.message && styles.form_input_error}
        label="Email"
        disabled={loading}
        type="text"
        error={errors.email?.message}
      />

      <Input
        {...register('password')}
        className={errors.password?.message && styles.form_input_error}
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
