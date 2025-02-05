import { cn } from "@/lib/utils"

type Props = {
  element?: "H1" | "H2"
  children: React.ReactNode
  className?: string
}

const GradientText = ({ children, className, element }: Props) => {
  const gradientClasses =
    "text-white font-black tracking-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 [text-shadow:_0_1px_20px_rgb(255_255_255_/_40%)]"

  switch (element) {
    case "H1":
      return <h1 className={cn(className, gradientClasses)}>{children}</h1>
    case "H2":
      return <h2 className={cn(className, gradientClasses)}>{children}</h2>
    default:
      return <p className={cn(className, gradientClasses)}>{children}</p>
  }
}

export default GradientText
