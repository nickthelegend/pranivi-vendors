import * as React from "react"

const buttonVariants = {
  variant: {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  },
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = buttonVariants.variant[variant]
    const sizeClasses = buttonVariants.size[size]

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
