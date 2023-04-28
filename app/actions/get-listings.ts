import prisma from "@/app/libs/prismadb"
import { SafeListing } from "../types"

export interface IListingsParams{
  userId?: string
}

export default async function getListings(
  params: IListingsParams
): Promise<SafeListing[]> {
  try {
    const {userId} = params
    let query: any = {} 

    if(userId){
      query.userId = userId
    }
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    })

    const safeListings: SafeListing[] = listings.map((listing: any) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString()
    }))

    return safeListings
  } catch (error: any) {
    throw new Error(error)
  }
}
