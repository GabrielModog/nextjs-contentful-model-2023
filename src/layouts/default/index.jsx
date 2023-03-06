import Link from 'next/link'

export default function DefaultLayout({ children }) {
  return (
    <>
      <header className='bg-stone-100 p-8'>
        <nav className='container'>
          <ul className='flex gap-4'>
            <li>
              <Link
                href='/'
                className='text-sm font-medium uppercase text-stone-500'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className='text-sm font-medium uppercase text-stone-500'
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container p-8'>{children}</main>
      <footer className='mx-auto text-xs font-medium uppercase text-stone-400'>
        <div>standard dummy text ever since the 1500s @ copyright</div>
      </footer>
    </>
  )
}
