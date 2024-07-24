import { dashboard, expenses, transactions, trend } from '../utils/Icons'
export const menuItems = [
  {
    id:1,
    title: 'Dashboard',
    icon: dashboard,
    link: '/dashboard'
  },
  {
    id:2,
    title: 'Ver Transações',
    icon: transactions,
    link: '/dashboard'
  },
  {
    id:3,
    title: 'Receita',
    icon: trend,
    link: '/dashboard'
  },
  {
    id:4,
    title: 'Despesa',
    icon: expenses,
    link: '/dashboard'
  },
]