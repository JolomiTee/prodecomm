import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ProductType {
	image: string;
	slug: { current: string; _type: string };
	price: string;
	name: string;
}

const Product = ({ product }: { product: ProductType }) => {
	const { image, name, slug, price } = product;
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className="product-card">
					<Image
						src={urlFor(image && image[0]).url()}
						width={250}
						height={250}
						className="product-image"
						alt="product-image"
					/>
					<p className="product-name">{name}</p>
					<p className="product-price">${price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
