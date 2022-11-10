import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "115733808034-o5597iqna14piccck388gf5860s76krt.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "TPQynH+/cMweDkteOmLNp0Q1smVaCn23GsnEruvNvdA=",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token, user }) {
      const sessionUser = { ...session.user, ...user };

      return Promise.resolve({
        ...session,
        user: sessionUser,
      });
    },
  },
});
