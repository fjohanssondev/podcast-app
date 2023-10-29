import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { Session } from "next-auth/types"

export default {
  debug: false,
  providers: [
    GitHub({
      account() {},
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    session ({ session, user }: { session: Session, user: any }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
} satisfies NextAuthConfig