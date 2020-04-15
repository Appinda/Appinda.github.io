import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  // Append active class to active router link
  if (router.pathname === href) {
    if(className) className = `${className} active`
    else className = `active`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
