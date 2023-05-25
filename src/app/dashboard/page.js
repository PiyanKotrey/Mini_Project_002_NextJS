import React from 'react'

export const metadata = {
    title: 'Draxler_Dashboard',

  }
  const session = null;
export default function DashboardPage() {
  if(!session){
    throw new Error("you must be logged in to view this page");
  }
  return (
    <div>
        <h1>Dashboard Page</h1>
    </div>
  )
}
