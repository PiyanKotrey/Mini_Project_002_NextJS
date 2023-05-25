import NavbarComponent from '@/components/NavbarComponent'
import './globals.css'
import Footer from '@/components/Footer'

//dynamic genarateMetadata
// async function getProductDetails(id) {
//   const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//   const data = await res.json();
//   return data;
// }

// export async function genarateMetadata({params}){
//   const product = await getProductDetails (params.id);
//   return{
//     title:product.title,
//     description:product.description,
//   }
// }
//static genarateMetadata
export const metadata = {
  title: 'Draxler',
  description: 'Make By Kot_Draxler Developer Documentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "">
        <NavbarComponent></NavbarComponent>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
      <Footer></Footer>
      </body>
    </html>
  )
}
