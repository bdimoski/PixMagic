import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p>home</p>
      <UserButton afterSwitchSessionUrl='/' />
    </div>
  )
}

export default Home