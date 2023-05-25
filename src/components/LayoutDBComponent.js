import React from 'react'
import SideBar from './SideBar'

export default function LayoutDBComponent({children}) {
  return (
    <div>
        <SideBar/>
        {children}
    </div>
  )
}
