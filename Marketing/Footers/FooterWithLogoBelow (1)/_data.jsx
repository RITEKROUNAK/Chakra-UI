import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'Product',
    links: [
      {
        label: 'How it works',
        href: '#',
      },
      {
        label: 'Features',
        href: '#',
      },
      {
        label: 'Integrations',
        href: '#',
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      {
        label: 'Pricing',
        href: '#',
      },
      {
        label: 'Examples',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Learn Center',
        href: '#',
      },
      {
        label: 'Support',
        href: '#',
      },
      {
        label: 'Slack Community',
        href: '#',
      },
      {
        label: 'Events',
        href: '#',
      },
      {
        label: 'Terms of Service',
        href: '#',
      },
      {
        label: 'Privacy Policy',
        href: '#',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'Our Story',
        href: '#',
      },
      {
        label: 'Media Kit',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Email us',
        href: '#',
      },
    ],
  },
  {
    title: 'Get Started',
    links: [
      {
        label: 'Start for free',
        href: '#',
      },
      {
        label: 'Sign in',
        href: '#',
      },
      {
        label: 'Download MacOS',
        href: '#',
      },
      {
        label: 'Download Windows',
        href: '#',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: '#',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaTwitter />,
    href: '#',
  },
]
export const footerLinks = [
  {
    label: 'Terms of Service',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Offer terms',
    href: '#',
  },
  {
    label: 'Legal notice',
    href: '#',
  },
  {
    label: 'Sitemap',
    href: '#',
  },
]
