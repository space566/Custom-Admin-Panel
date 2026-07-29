import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Circle,
  CheckCircle,
  AlertCircle,
  Timer,
  HelpCircle,
  CircleOff,
} from 'lucide-react'

export const labels = [
  {
    value: 'bug',
    label: 'باگ',
  },
  {
    value: 'feature',
    label: 'قابلیت',
  },
  {
    value: 'documentation',
    label: 'مستندات',
  },
]

export const statuses = [
  {
    label: 'در صف انجام',
    value: 'backlog' as const,
    icon: HelpCircle,
  },
  {
    label: 'برای انجام',
    value: 'todo' as const,
    icon: Circle,
  },
  {
    label: 'در حال انجام',
    value: 'in progress' as const,
    icon: Timer,
  },
  {
    label: 'انجام شده',
    value: 'done' as const,
    icon: CheckCircle,
  },
  {
    label: 'لغو شده',
    value: 'canceled' as const,
    icon: CircleOff,
  },
]

export const priorities = [
  {
    label: 'کم',
    value: 'low' as const,
    icon: ArrowDown,
  },
  {
    label: 'متوسط',
    value: 'medium' as const,
    icon: ArrowRight,
  },
  {
    label: 'زیاد',
    value: 'high' as const,
    icon: ArrowUp,
  },
  {
    label: 'بحرانی',
    value: 'critical' as const,
    icon: AlertCircle,
  },
]
