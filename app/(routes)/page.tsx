import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/product/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export const revalidate = 0;

const HomePage = async () => {

    // const {userId} = auth();
    
    // if (!userId) {
    //     redirect('/sign-in')
    // }
    

    // POINT D'ENTRE OU IL FAUT GENERER UNE DIFFERENTE BOUTIQUE/NOM DE DOMAINE
    // 1- IDENTIDIER LA BOUTIQUE EN QUESTION
    // 2- RECUPERER LES DONNEES DE LA BOUTIQUE EN QUESTION { BILLBOARD + PRODUITS } 
    
    const billboard = await getBillboard("9da5263d-e533-4202-9351-296886355c74");
    const products = await getProducts({ isFeatured: true });

    

    return (

        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>

    );
}

export default HomePage;