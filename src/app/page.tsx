import { Suspense } from 'react'

export default function Page() {
  return (
    <main>
      <div className='m-10 text-center'>
        <p className='text-blue-500'>Hello Next.js 🚀</p>
        <Suspense fallback={<p>loading...</p>}></Suspense>
      </div>
    </main>
  )
}
