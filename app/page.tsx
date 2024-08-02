import { FooterBanner, HeroBanner, Product } from "@/components";
import { client } from "@/sanity/lib/client";

const getData = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		products,
		bannerData,
	};
};
export default async function Home() {
	const { bannerData, products } = await getData();

	return (
		<div>
			{/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
			<div className="products-heading">
				<h2>Best Seller Products</h2>
				<p>speaker There are many variations passages</p>
			</div>

			<div className="products-container">
				{products?.map((product: any) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			{/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
		</div>
	);
}
