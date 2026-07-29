import { Link, useSearch } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AuthLayout } from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })

  return (
    <AuthLayout>
      <Card className='max-w-sm gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>ورود</CardTitle>
          <CardDescription>
            ایمیل و رمز عبور خود را در قسمت زیر وارد کنید تا وارد{' '}
            <br className='max-sm:hidden' /> حساب کاربری خود شوید.
             حساب کاربری ندارید؟ {' '}
            <Link
              to='/sign-up'
              className='text-nowrap underline underline-offset-4 hover:text-primary'
            >
              ثبت‌نام
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm redirectTo={redirect} />
        </CardContent>
        <CardFooter>
          <p className='px-8 text-center text-sm text-muted-foreground'>
            با کلیک روی ورود، شما با موارد زیر موافقت می‌کنید.{' '}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              شرایط استفاده از خدمات
            </a>{' '}
            و{' '}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              سیاست حفظ حریم خصوصی
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
