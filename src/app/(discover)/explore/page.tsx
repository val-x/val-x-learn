import { onGetExploreGroup } from "@/actions/groups"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import ExploreLayout from "./_components/explore-layout"

const ExplorePage = async () => {
  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ["fitness"],
    queryFn: () => onGetExploreGroup("fitness", 0),
  })

  await query.prefetchQuery({
    queryKey: ["music"],
    queryFn: () => onGetExploreGroup("music", 0),
  })

  await query.prefetchQuery({
    queryKey: ["lifestyle"],
    queryFn: () => onGetExploreGroup("lifestyle", 0),
  })

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <ExploreLayout />
    </HydrationBoundary>
  )
}

export default ExplorePage
