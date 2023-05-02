import { Board } from '@/components/Board'

export default function Home() {

  return (
    <main className="flex justify-center w-full h-screen bg-slate-900 p-12">
      <div className='flex w-[48rem] h-[34rem] justify-center p-4 bg-slate-800 rounded-md overflow-hidden'>

        <Board />
        
      </div>
    </main>
  )
}
