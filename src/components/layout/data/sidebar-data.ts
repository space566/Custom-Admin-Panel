import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'پنل مدیریت',
      logo: Command,
      plan: 'ادمین + مدیر',
    },
  ],
  navGroups: [
    {
      title: 'عمومی',
      items: [
        {
          title: 'داشبورد',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'وظایف',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'برنامه‌ها',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'گفتگوها',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'کاربران',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'صفحات',
      items: [
        {
          title: 'احراز هویت',
          icon: ShieldCheck,
          items: [
            {
              title: 'ورود',
              url: '/sign-in',
            },
            {
              title: 'ورود (دو ستونه)',
              url: '/sign-in-2',
            },
            {
              title: 'ثبت‌نام',
              url: '/sign-up',
            },
            {
              title: 'فراموشی رمز عبور',
              url: '/forgot-password',
            },
            {
              title: 'کد تأیید',
              url: '/otp',
            },
          ],
        },
        {
          title: 'خطاها',
          icon: Bug,
          items: [
            {
              title: 'دسترسی غیرمجاز',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'دسترسی ممنوع',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'صفحه یافت نشد',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'خطای داخلی سرور',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'خطای حالت تعمیر و نگهداری',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: 'سایر',
      items: [
        {
          title: 'تنظیمات',
          icon: Settings,
          items: [
            {
              title: 'پروفایل',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'حساب کاربری',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'ظاهر',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'اعلان‌ها',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'نمایش',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'مرکز راهنما',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
