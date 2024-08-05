"use client";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { useStore } from "@/context/StateContext";
import Image from "next/image";

const ProductView = ({ product }: any) => {
	const { image, name, details, price } = product;
	const [index, setIndex] = useState(0);

	const onAdd = useStore((state) => state.onAdd);
	const setShowCart = useStore((state) => state.setShowCart);
	const qty = useStore((state) => state.qty);
	const decQty = useStore((state) => state.decQty);
	const incQty = useStore((state) => state.incQty);

	const handleBuyNow = () => {
		onAdd(product, qty);
		setShowCart(true);
	};
	return (
		<div className="product-detail-container">
			<div>
				<div className="image-container">
					<Image
						src={urlFor(image && image[index]).url()}
						className="product-detail-image"
						alt="product detail"
						width={400}
						height={400}
					/>
				</div>
				<div className="small-images-container">
					{image?.map((item: string, i: number) => (
						<Image
							alt="preview image"
							key={i}
							width={70}
							height={70}
							src={urlFor(item).url()}
							className={
								i === index ? "small-image selected-image" : "small-image"
							}
							onMouseEnter={() => setIndex(i)}
						/>
					))}
				</div>
			</div>

			<div className="product-detail-desc">
				<h1>{name}</h1>
				<div className="reviews">
					<div className="flex gap-2">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
					</div>
					<p>(20)</p>
				</div>
				<h4>Details: </h4>
				<p>{details}</p>
				<p className="price">${price}</p>
				<div className="quantity">
					<h3>Quantity:</h3>
					<div className="quantity-desc flex items-center">
						<span className="minus" onClick={decQty}>
							<AiOutlineMinus />
						</span>
						<span className="num">{qty}</span>
						<span className="plus" onClick={incQty}>
							<AiOutlinePlus />
						</span>
					</div>
				</div>
				<div className="buttons">
					<button
						type="button"
						className="add-to-cart"
						onClick={() => onAdd(product, qty)}
					>
						Add to Cart
					</button>
					<button type="button" className="buy-now" onClick={handleBuyNow}>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
