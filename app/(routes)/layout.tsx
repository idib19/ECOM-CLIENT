import getCategories from "@/actions/get-categories"
import Navbar from "@/components/ui/navbar/navbar"

export default async function StoreLayout ({
    children,
  }: {
    children: React.ReactNode
  })  {


    const categories = await getCategories()

    console.log("voici les categories" + categories )
    
    return (
        <>
        <Navbar categories={categories} />
        {children}
        </>
        )
        
    }