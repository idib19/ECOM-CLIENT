import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/product/product-list";
import Container from "@/components/ui/container";
import Gallery from "@/components/ui/gallery";
import Info from "@/components/info";

// This page.tsx file  is server side bc it got async functions and needs to retrieve data from the db.
// It does all the requiered server side computations then loads the client side components in it with the requiered data passed as props
interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {

    const product = await getProduct(params.productId)

    // We retrieve all the products of the same category for the ProductList components
    const suggestedProducts = await getProducts({ categoryId: product?.category?.id })


    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;