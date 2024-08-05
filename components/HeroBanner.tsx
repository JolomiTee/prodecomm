import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface HeroBannerType {
	smallText: string;
	midText: string;
	image: string;
	largeText1: string;
	product: string;
	buttonText: string;
	desc: string;
}

const HeroBanner = ({ heroBanner }: { heroBanner: HeroBannerType }) => {
	const { smallText, midText, largeText1, product, buttonText, desc, image } =
		heroBanner;

	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{smallText}</p>
				<h3>{midText}</h3>
				<h1>{largeText1}</h1>
				<Image
					width={600}
					height={600}
					src={urlFor(image).url()}
					alt="headphones"
					className="hero-banner-image"
				/>

				<div>
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
