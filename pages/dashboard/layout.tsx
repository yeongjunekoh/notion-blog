import { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full h-full flex flex-row'>
      {/* 왼쪽 메뉴 */}
      <aside className='w-16 bg-gray-600 text-gray-100'>
        <div className='p-4'>
          <h2 className='text-lg font-bold tracking-tight'>대시보드</h2>
        </div>
        <nav className='mt-4'>
          <ul className='space-y-1'>
            <li>
              <Link
                href='/dashboard'
                className='flex items-center justify-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200'
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/posts'
                className='flex items-center justify-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200'
              >
                게시물
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/settings'
                className='flex items-center justify-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200'
              >
                설정
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className='flex-1 flex flex-col'>
        {/* 헤더 */}
        <header className='bg-white border-b border-gray-200'>
          <div className='px-6 py-4'>
            <h1 className='text-xl font-bold text-gray-900'>관리자 대시보드</h1>
          </div>
        </header>

        {/* 콘텐츠 영역 */}
        <div className='flex-1 p-6'>{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout
