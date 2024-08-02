import { Product } from "@/components";
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

	return (
		<div>
			<ProductView product={product} products={products} />;
			<div className="maylike-products-wrapper">
				<h2>You may also like</h2>
				<div className="marquee">
					<div className="maylike-products-container track">
						{products.map((item: any) => (
							<Product key={item._id} product={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
