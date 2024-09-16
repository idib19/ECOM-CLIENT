import Navbar from "@/components/ui/navbar/navbar"
import { categories } from "@/lib/statics";

export default function StoreLayout ({
    children,
  }: {
    children: React.ReactNode
  })  {
    const categoryNames = categories.map(category => category.name);

    // Convert names into the shape needed for your Navbar
    const categoriesForNavbar : any = categoryNames.map(name => ({ name }));
    return (
        <>
         <Navbar categories={categoriesForNavbar} />
        {children}
        </>
        )
        
    }