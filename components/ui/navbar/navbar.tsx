import Link from "next/link";

import MainNav from "@/components/ui/navbar/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/ui/navbar/navbar-actions";
import getCategories from "@/actions/get-categories";


export const revalidate = 0; 


const Navbar = async ({ params }: { params: { domain: string } }) => {

    const domain = params.domain
    
    console.log("navbar domain: ", domain)

    let storeId = ''
    let storeName = ''
    if (domain === 'setan-style') {
        storeId = "5601a131-affb-4108-9135-38450c4918d0"
        storeName = 'SETAN STYLE'
        console.log("setant style name : ", storeName)
    }
    if (domain === 'ihm') {
        storeId = "71d739cd-e561-4065-932c-54df80972872"
        storeName = 'IHM'
        console.log("IHM name : ", storeName)
    }

    const categories = await getCategories(storeId);
    console.log("Categories ", categories)
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl"> {storeName} </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;