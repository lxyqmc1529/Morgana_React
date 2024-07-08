import { Avatar, Popover } from "antd";
import { getServerSession } from '@/server/auth'
import { redirect } from "next/navigation";
export default async function DashboardListLayout({ children }: {chilren: React.ReactNode}) {
  const session = await getServerSession()
  //在此处可以直接去调用服务端的api，而在传统项目中不可行
  //这也是next.js的优势，例如一些直接操作数据库的服务也可以直接写在组件里（妙啊）
  if (!session) {
    redirect("/api/auth/signin")
  }

  return <div className="w-full h-screen bg-slate-100">
    {children}
  </div>
} 