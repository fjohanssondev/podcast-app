import prisma from "@lib/prisma";

export async function GET(request: Request){
  try {
    const podcasts = await prisma.podcast.findMany()
    return new Response(JSON.stringify(podcasts));
  } catch (e){
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}