import getCategories from "@/actions/get-categories";

export async function getServerSideProps() {
    const categories = (await getCategories());
    return {
        props: {
            categories,
        },
    };
}