import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/product/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Navbar from "@/components/ui/navbar/navbar";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const HomePage = async ({ params }: { params: { domain: string } }) => {
    var storeId = ''

    const { userId } = auth();

    if (!userId){
        redirect('/sign-in')
    }
    if (params.domain === 'setan-style') {
        storeId = "5601a131-affb-4108-9135-38450c4918d0";

    } else if (params.domain === 'ihm') {
        storeId = "71d739cd-e561-4065-932c-54df80972872";
    } else {
        console.log("Domain not matched"); // Case where domain doesn't match
    }

    const billboard = await getBillboard("d59529b7-1e56-4302-94e3-1aa7a54ba47c", storeId);
    const products = await getProducts({ isFeatured: true }, storeId);

    return (<>

        <Navbar params={params} />
        {/* we need to pu this in a new layout.tsx and render page as chieldren  */}
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container></>
    );
};

export default HomePage;
