import {
  BarChart3,
  BookOpen,
  Building2,
  CreditCard,
  FileText,
  Globe,
  Home,
  LayoutGrid,
  MessageSquare,
  Settings,
  Users,
  Video,
  Zap,
} from "lucide-react"

export type MenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
  section?: boolean
  integration?: boolean
}

export type GroupMenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
}

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <CreditCard className="w-4 h-4" />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explore",
    icon: <LayoutGrid className="w-4 h-4" />,
    path: "/explore",
  },
]

export const GROUP_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Overview",
    icon: <BarChart3 className="w-4 h-4" />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Courses",
    icon: <BookOpen className="w-4 h-4" />,
    path: "#courses",
    section: true,
  },
  {
    id: 2,
    label: "Events",
    icon: <Video className="w-4 h-4" />,
    path: "/events",
  },
  {
    id: 3,
    label: "Members",
    icon: <Users className="w-4 h-4" />,
    path: "/members",
  },
  {
    id: 4,
    label: "About",
    icon: <FileText className="w-4 h-4" />,
    path: "/about",
  },
  {
    id: 5,
    label: "Chat",
    icon: <MessageSquare className="w-4 h-4" />,
    path: "/chat",
  },
]

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
  {
    id: 0,
    label: "General",
    icon: <Settings className="w-4 h-4" />,
    path: "",
  },
  {
    id: 1,
    label: "Subscriptions",
    icon: <CreditCard className="w-4 h-4" />,
    path: "subscriptions",
  },
  {
    id: 2,
    label: "Business",
    icon: <Building2 className="w-4 h-4" />,
    path: "business",
  },
  {
    id: 3,
    label: "Domain Config",
    icon: <Globe className="w-4 h-4" />,
    path: "domains",
  },
  {
    id: 4,
    label: "Integration",
    icon: <Zap className="w-4 h-4" />,
    path: "integrations",
    integration: true,
  },
]

type IntegrationsListItemProps = {
  id: string
  name: "stripe"
  logo: string
  description: string
  title: string
  modalDescription: string
}

export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
  {
    id: "1",
    name: "stripe",
    description:
      "Stripe is the fastest and easiest way to integrate payments and financial services into your software platform or marketplace.",
    logo: "914be637-39bf-47e6-bb81-37b553163945",
    title: "Connect Stripe Account",
    modalDescription:
      "The world's most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.",
  },
]
