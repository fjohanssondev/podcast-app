import { auth } from "@base/auth";
import prisma from "@lib/prisma";

export async function GET(request: Request){

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const session = await auth()

  if (!session) {
    return new Response("Unauthorized access detected", {
      status: 401,
    });
  }

  try {
    const data = await prisma.user.findFirst({
      where: {
        id: id as string
      },
      include: {
        following: true,
        followedBy: true,
        profile: {
          select: {
            bio: true,
            location: true,
          }
        }
      }
    });
   
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}