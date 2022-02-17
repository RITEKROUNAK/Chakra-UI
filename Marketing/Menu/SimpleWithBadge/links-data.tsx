import * as React from 'react'
import { HiChatAlt, HiChartBar, HiPlay, HiMail } from 'react-icons/hi'

interface Link {
  href: string
  title: string
  description: string
  icon: React.ReactElement
  new?: boolean
}

export const links: Link[] = [
  {
    href: '#',
    title: 'API Reference',
    description: 'Read the full documentation for our products',
    icon: <HiChartBar />,
  },
  {
    href: '#',
    title: 'Quickstarts',
    description: 'Get the fundamentals with tutorials',
    icon: <HiChatAlt />,
  },
  {
    href: '#',
    title: 'API Status',
    description: 'Live monitoring of our APIs and services',
    icon: <HiPlay />,
    new: true,
  },
  {
    href: '#',
    title: 'Changelog',
    description: 'See new additions and changes to our platform',
    icon: <HiMail />,
  },
]
