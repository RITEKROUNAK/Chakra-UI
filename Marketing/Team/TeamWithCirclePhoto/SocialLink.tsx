import { Link, LinkProps, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { SocialLinkIcon } from './SocialLinkIcon'

interface SocialLinkProps extends LinkProps {
  icon?: React.ElementType
  href: string
  label?: string
}

export const SocialLink = (props: SocialLinkProps) => {
  const { icon, href, label, children, ...rest } = props
  return (
    <Link
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      href={href}
      isExternal
      {...rest}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {icon && <SocialLinkIcon as={icon} />}
      {children}
    </Link>
  )
}
