import { type ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantClasses = {
      default: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
      cta: "bg-[#FFB703] text-black hover:bg-[#FFB703] focus:ring-[#FFB703] rounded-sm",
    }

    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 py-1 text-sm",
      lg: "h-12 px-6 py-3 text-base",
      icon: "h-10 w-10",
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return <button className={classes} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

export { Button }