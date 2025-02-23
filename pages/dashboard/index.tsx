import { NextPage } from 'next'
import { ReactElement } from 'react'
import DashboardLayout from './layout'

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

const DashboardPage: PageWithLayout = () => {
  return (
    <div>
      <h1>어떤 콘텐츠인지는 아는가..?</h1>
    </div>
  )
}

DashboardPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default DashboardPage
