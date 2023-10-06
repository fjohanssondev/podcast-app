import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@lib/prisma";
import { Session } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  strategy: "jwt",
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
  callbacks: {
    session ({ session, user }: { session: Session, user: any }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }