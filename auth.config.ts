import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { Session } from "next-auth/types"

export default {
  debug: false,
  providers: [
    GitHub({
      /* account(account) {
        const refresh_token_expires_at =
          Math.floor(Date.now() / 1000) + Number(account.refresh_token_expires_in)
        return {
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          refresh_token_expires_at
        }
      }, */
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  /* callbacks: {
    session ({ session, user }: { session: Session, user: any }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  }, */
} satisfies NextAuthConfig