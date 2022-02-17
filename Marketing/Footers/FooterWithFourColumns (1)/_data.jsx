import { Badge, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'Company',
    links: [
      {
        label: 'Why Envelope',
        href: '#',
      },
      {
        label: 'Our story',
        href: '#',
      },
      {
        label: 'Careers',
        href: '#',
        badge: (
          <LightMode>
            <Badge colorScheme="blue" fontSize="0.625rem">
              Hiring
            </Badge>
          </LightMode>
        ),
      },
      {
        label: 'Press',
        href: '#',
      },
      {
        label: 'FAQ',
        href: '#',
      },
    ],
  },
  {
    title: 'Product',
    links: [
      {
        label: 'How it works',
        href: '#',
      },
      {
        label: 'Pricing',
        href: '#',
      },
      {
        label: 'Use Cases',
        href: '#',
      },
      {
        label: 'Integrations',
        href: '#',
      },
      {
        label: 'SAML SSO',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Partnerships',
        href: '#',
      },
      {
        label: 'Case studies',
        href: '#',
      },
      {
        label: 'Help Center',
        href: '#',
      },
      {
        label: 'Media Assets',
        href: '#',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'Login',
        href: '#',
      },
      {
        label: 'Twitter',
        href: '#',
      },
      {
        label: 'Chat with us',
        href: '#',
      },
      {
        label: 'Email us',
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
