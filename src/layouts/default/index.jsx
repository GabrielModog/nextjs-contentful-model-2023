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
      <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400'>
        <div>Footer</div>
      </footer>
    </>
  )
}
