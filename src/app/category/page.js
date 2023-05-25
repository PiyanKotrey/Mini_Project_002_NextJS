import CategoryCompo from '@/components/CategoryCompo'
import React from 'react'


export async function fetchData(){
  const res = await fetch("https://api.escuelajs.co/api/v1/categories")
  const data = await res.json()
  return data
}

export default async function page() {
  const categories = await fetchData()
  return (
    <main className="flex flex-wrap items-center justify-between">
    {categories.map((category) => (
        <CategoryCompo
          key={category.id}
          id={category.id}
          image={category.image}
          name={category.name}
        />
      ))}
  </main>
  )
}
