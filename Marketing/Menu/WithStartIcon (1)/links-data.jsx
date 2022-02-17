import * as React from 'react'
import { HiChatAlt, HiChartBar, HiPlay, HiMail } from 'react-icons/hi'

export const links = [
  {
    href: '#',
    title: 'Analytics',
    description: 'Get a better understanding of where you traffic is coming from',
    icon: <HiChartBar />,
  },
  {
    href: '#',
    title: 'Messaging',
    description: 'Control and orchestrate network calls in minutes',
    icon: <HiChatAlt />,
  },
  {
    href: '#',
    title: 'Video API',
    description: 'Build High-Definition video applications with ease.',
    icon: <HiPlay />,
  },
  {
    href: '#',
    title: 'Envelop Email API',
    description: 'Send, receive, and manage emails in one place',
    icon: <HiMail />,
  },
]
