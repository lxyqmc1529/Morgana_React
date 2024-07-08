import NextAuth from "next-auth";
import { authOptions } from "@/server/auth";

const handler = NextAuth(authOptions)

export { handler as GET,handler as POST };

//这是next提供的一种服务