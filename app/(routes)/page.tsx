import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-product";

export const revalidate = 0;

const HomePage = async () => {

    const products = await getProducts({isFeatured : true});
    const billboard = await getBillboard("cdfeb6e4-e1ff-49bb-bc45-b2a07ee5089b");

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
};

export default HomePage;