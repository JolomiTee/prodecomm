import ProductView from "./Product";
import { client } from "@/sanity/lib/client";

interface Props {
	params: { slug: string };
}

const page = async ({ params }: Props) => {
	const { slug } = params;

	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = '*[_type == "product"]';

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

	console.log(product);
	console.log(products);

	return <ProductView product={product} products={products} />;
};

export default page;
