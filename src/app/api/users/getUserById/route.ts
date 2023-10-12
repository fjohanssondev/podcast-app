import { getCurrentSession } from "@lib/getCurrentSession";
import prisma from "@lib/prisma";

export async function GET(request: Request){

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const session = await getCurrentSession()

  if (!session) {
    return new Response("Unauthorized access detected", {
      status: 401,
    });
  }

  const data = await prisma.user.findUnique({
    where: {
      id: id as string
    }
  })

  return Response.json(data)
}