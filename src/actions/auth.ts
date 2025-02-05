"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

// Test user for development bypass
const TEST_USER = {
  id: "test123",
  clerkId: "test_clerk_id",
  firstname: "Test",
  lastname: "User",
  image: "https://via.placeholder.com/150",
  status: 200,
}

// Development flag - set to true only for testing
const BYPASS_AUTH = process.env.NEXT_PUBLIC_BYPASS_AUTH === "true"

export const onAuthenticatedUser = async () => {
  // Bypass auth in development if flag is set
  if (BYPASS_AUTH) {
    console.log("⚠️ Using test user - Auth bypass enabled")
    return {
      status: 200,
      id: TEST_USER.id,
      username: `${TEST_USER.firstname} ${TEST_USER.lastname}`,
      image: TEST_USER.image,
    }
  }

  try {
    const clerk = await currentUser()
    if (!clerk) return { status: 404 }

    const user = await client.user.findUnique({
      where: {
        clerkId: clerk.id,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
      },
    })

    if (user) {
      return {
        status: 200,
        id: user.id,
        username: `${user.firstname} ${user.lastname}`,
        image: clerk.imageUrl,
      }
    }

    // If no user found in DB but Clerk user exists, create the user
    const newUser = await onSignUpUser({
      firstname: clerk.firstName ?? "User",
      lastname: clerk.lastName ?? String(clerk.id),
      image: clerk.imageUrl,
      clerkId: clerk.id,
    })

    if (newUser.status === 200) {
      return {
        status: 200,
        id: newUser.id,
        username: `${clerk.firstName} ${clerk.lastName}`,
        image: clerk.imageUrl,
      }
    }

    return { status: 404 }
  } catch (error) {
    console.error("Auth error:", error)
    return { status: 400 }
  }
}

export const onSignUpUser = async (data: {
  firstname: string
  lastname: string
  image: string
  clerkId: string
}) => {
  try {
    const createdUser = await client.user.create({
      data: {
        ...data,
      },
    })

    if (createdUser) {
      return {
        status: 200,
        message: "User successfully created",
        id: createdUser.id,
      }
    }

    return {
      status: 400,
      message: "User could not be created! Try again",
    }
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    }
  }
}

export const onSignInUser = async (clerkId: string) => {
  try {
    const loggedInUser = await client.user.findUnique({
      where: {
        clerkId,
      },
      select: {
        id: true,
        group: {
          select: {
            id: true,
            channel: {
              select: {
                id: true,
              },
              take: 1,
              orderBy: {
                createdAt: "asc",
              },
            },
          },
        },
      },
    })

    if (loggedInUser) {
      if (loggedInUser.group.length > 0) {
        return {
          status: 207,
          id: loggedInUser.id,
          groupId: loggedInUser.group[0].id,
          channelId: loggedInUser.group[0].channel[0].id,
        }
      }

      return {
        status: 200,
        message: "User successfully logged in",
        id: loggedInUser.id,
      }
    }

    return {
      status: 400,
      message: "User could not be logged in! Try again",
    }
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    }
  }
}
