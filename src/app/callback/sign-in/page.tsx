import { onSignInUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CompleteSigIn = async () => {
  // Skip Clerk auth if bypass is enabled
  if (process.env.NEXT_PUBLIC_BYPASS_AUTH === "true") {
    return redirect("/group/create")
  }

  const user = await currentUser()
  if (!user) return redirect("/sign-in")

  const authenticated = await onSignInUser(user.id)

  if (authenticated.status === 200) return redirect(`/group/create`)

  if (authenticated.status === 207)
    return redirect(
      `/group/${authenticated.groupId}/channel/${authenticated.channelId}`,
    )

  if (authenticated.status !== 200) {
    redirect("/sign-in")
  }
}

export default CompleteSigIn
