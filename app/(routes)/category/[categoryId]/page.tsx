// CategoryId page is the page rendered when user requests for a specifical category info and items 

// useful functions import 
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getAttributes from "@/actions/get-attributes";

// Useful components import 
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter from "@/components/product/components/filter"
import ProductCard from "@/components/ui/product/product-card";
import NoResults from "@/components/ui/no-results";
import MobileFilters from "@/components/product/components/mobile-filters";

export const revalidate = 0;

//  Creating the blueprint for the categoryId page 
interface CategoryPageProps {
    params: {
        categoryId: string
    },

    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });
    const category = await getCategory(params.categoryId);

    // attributes instead of zises and color 
    // fetch the variant values available and pass them to sizes and colors 
    // their is a better way to write this part of the app by letting the server do all the sorting and send arrays of all the available attributes 
    interface AttributeValue {
        id: string;
        name: string;
        value: string;
      }
      
      const attributes: AttributeValue[] = await getAttributes();
      
      function separateAttributes(attributes: AttributeValue[]): { colors: AttributeValue[], sizes: AttributeValue[] } {
        const colors: AttributeValue[] = [];
        const sizes: AttributeValue[] = [];
      
        attributes.forEach(attribute => {
          if (attribute.value.startsWith('#')) {
            colors.push(attribute);
          } else {
            sizes.push(attribute);
          }
        });
      
        return { colors, sizes };
      }
      
      const { colors, sizes } = separateAttributes(attributes);
      

    return (
        <div className="bg-white">
            <Container>

                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;