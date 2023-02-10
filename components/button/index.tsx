import * as React from 'react'
import { WithChildren } from '@app/types'

interface ButtonProps extends WithChildren {
  onClick: () => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`bg-yellow-650 rounded-lg flex items-center justify-center h-12 w-full mt-4 ${className}`}>
      <p className="font-bold">{children}</p>
    </button>
  )
}

export default Button
