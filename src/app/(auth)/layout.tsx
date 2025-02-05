import { onAuthenticatedUser } from "@/actions/auth"
import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
  const user = await onAuthenticatedUser()

  // When using bypass auth, redirect to group creation
  if (process.env.NEXT_PUBLIC_BYPASS_AUTH === "true" && user.status === 200) {
    redirect("/group/create")
  }

  // For normal auth flow, redirect to sign-in callback
  if (user.status === 200) {
    redirect("/callback/sign-in")
  }

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col w-full items-center py-24">
        <h2 className="text-4xl font-bold text-themeTextWhite">
          Val-X Community
        </h2>
        <BackdropGradient
          className="w-4/12 h-2/6 opacity-40"
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 p-7 mt-16">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default AuthLayout
