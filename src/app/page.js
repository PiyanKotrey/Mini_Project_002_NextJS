import CardComponent from "@/components/CardComponent"

export const metadata = {
  title: 'Draxler_Home',

}

export async function fetchData(){
  const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=21&offset=10")
  const data = await res.json()
  return data
}


export default async function Home() {
  const products = await fetchData()
 
  return (
    <main className="flex flex-wrap items-center justify-between ">
      {products.map((product) => (
          <CardComponent
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ))}
    </main>

  )
}
