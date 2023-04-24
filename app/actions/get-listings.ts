import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        cratedAt: 'desc'
      }
    })

    const safeListings = listings.map((listing) => ({
      ...listing,
      cratedAt: listing.cratedAt.toISOString()
    }))

    return safeListings
  } catch (error: any) {
    throw new Error(error);
  }
}