import { Avatar,Popover } from "antd";
import { getServerSession } from '@/server/auth'
import { redirect } from "next/navigation";
export default async function DashboardListLayout({
  children,
}):Readonly<{
  chilren: React.ReactNode;
}> {
  const session = await getServerSession()
  //在此处可以直接去调用服务端的api，而在传统项目中不可行
  //这也是next.js的优势，例如一些直接操作数据库的服务也可以直接写在组件里（妙啊）
  if(!session){
    redirect("/api/auth/signin")
  }else{
   
  }

  return <div className="w-full min-h-screen bg-slate-100">
    <div className="w-full h-[80px] bg-white shadow-md px-8 flex items-center justify-between">
      <div className="flex items-center text-lg font-bold text-slate-700" >
        <img src="/vercel.svg" className="w-8 h-8 mr-2" alt="logo" />
       Mogana 问卷星
      </div>
      <Popover content={
        <div className="min-w-20">
          <div>{session?.user?.name}</div>
        </div>
      }>
        <Avatar size="large" icon="user" src={session?.user?.image} />
      </Popover>
    </div>
    <div className="container">
      {children}
    </div>
  </div>
} 