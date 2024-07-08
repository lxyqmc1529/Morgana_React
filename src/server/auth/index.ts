import { AuthOptions ,DefaultSession,getServerSession as nextAuthGetServerSession } from 'next-auth';
import GithubProvider  from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/server/db';
import { Adapter } from 'next-auth/adapters';
//在此处改造一下next-auth的类型定义，使其可以正确的识别session
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: AuthOptions = {
  adapter:DrizzleAdapter(db as any) as Adapter,
  callbacks:{
    async session({session, user}) {
      if(session.user && user){
        session.user.id =   user.id;
      }
      return session;
  }

},
  providers: [
    GithubProvider({
      clientId: 'Ov23liyyQDfhBOQjY3oU',
      clientSecret: '3e12cbb9e1f4a026e01d3496d89a3f33a432cc09',
    }),]
}

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}