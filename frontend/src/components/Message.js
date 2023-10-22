import React from 'react'
import { Alert } from 'react-bootstrap'

/**
 * Renders a message component with the specified variant and children.
 *
 * @param {string} variant - The variant of the message component.
 * @param {ReactNode} children - The children to be rendered inside the message component.
 * @return {ReactElement} - The rendered message component.
 */
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
