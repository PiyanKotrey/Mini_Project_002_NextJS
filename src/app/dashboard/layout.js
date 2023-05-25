import LayoutDBComponent from '@/components/LayoutDBComponent'
import React, { Children } from 'react'

export default function DashboardLayout({Children}) {
  return (
    <LayoutDBComponent>
        {Children}
    </LayoutDBComponent>
  )
}
