import { onAuthenticatedUser } from "@/actions/auth"
import ExploreHero from "./_components/explore-hero"

const ExploreLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await onAuthenticatedUser()

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-black/95">
      <ExploreHero user={user} />
      <div className="relative z-10 flex-1 container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}

export default ExploreLayout
