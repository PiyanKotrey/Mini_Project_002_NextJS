import CardUser from '@/components/CardUser'
import React from 'react'

export async function fetchUserData(){
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8");
    const data = await res.json();
    return data;
}

export default async function page() {
    const users = await fetchUserData();

  return (
    <main className="flex flex-wrap items-center justify-between m-40 ">
      {users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            name={user.name}
            avatar={user.avatar}
          />
        ))}
    </main>
  )
}
