"use client";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
const ProductView = ({ product, products }: any) => {
	const { image, name, details, price } = product;
	const [index, setIndex] = useState(0);

	// const handleBuyNow = () => {
	// 	onAdd(product, qty);
	// 	setShowCart(true);
	// };
	return (
		<div className="product-detail-container">
			<div>
				<div className="image-container">
					<img
						src={urlFor(image && image[index]).url()}
						className="product-detail-image"
					/>
				</div>
				<div className="small-images-container">
					{image?.map((item: string, i: number) => (
						<img
							key={i}
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
					<div>
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
					{/* <p className="quantity-desc">
							<span className="minus" onClick={decQty}>
								<AiOutlineMinus />
							</span>
							<span className="num">{qty}</span>
							<span className="plus" onClick={incQty}>
								<AiOutlinePlus />
							</span>
						</p> */}
				</div>
				<div className="buttons">
					<button
						type="button"
						className="add-to-cart"
						// onClick={() => onAdd(product, qty)}
					>
						Add to Cart
					</button>
					<button
						type="button"
						className="buy-now"
						// onClick={handleBuyNow}
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
