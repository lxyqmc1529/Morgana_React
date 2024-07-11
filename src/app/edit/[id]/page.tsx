'use client'
import EditLeftPanel from "../components/EditLeftPanel"
import EditCanvas from "../components/EditCanvas";
import RightPanel from "../components/EditRightPanel";
export default function EditPage({parmas} :{parmas:{id:string}}) {

  return <div className="w-full h-full">
    <div className="flex h-[80px] shadow-md bg-white items-center px-12 border border-solid border-slate-100">header</div>
    <div className="flex w-full h-[calc(100vh-80px)]">
      <section className="w-[330px]  bg-white shadow-md pr-4">
        <EditLeftPanel />
      </section>
      <main className="flex-1 h-full flex items-center justify-center mt-20">
        <EditCanvas />
        </main> 
      <section className="w-[330px]  bg-white shadow-md py-4">
        <div className="">
          <RightPanel />
        </div>
      </section>
    </div>
  </div>
} 

//目录建成这个样子就可以自动获取到id（妙） 