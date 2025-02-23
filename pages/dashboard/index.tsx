import { NextPage } from 'next'
import { ReactElement } from 'react'

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

const DashboardPage: PageWithLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

DashboardPage.getLayout = (page) => page

export default DashboardPage
