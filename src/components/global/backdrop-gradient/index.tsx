import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  container?: string
}

const BackdropGradient = ({ children, className, container }: Props) => {
  return (
    <div className={cn("relative w-full flex flex-col", container)}>
      <div
        className={cn(
          "absolute rounded-[50%] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl",
          className,
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default BackdropGradient
