import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface FooterBannerTypes {
	discount: string;
	largeText1: string;
	largeText2: string;
	saleTime: string;
	smallText: string;
	midText: string;
	desc: string;
	product: string;
	buttonText: string;
	image: string;
}

const FooterBanner = ({
	footerBanner,
}: {
	footerBanner: FooterBannerTypes;
}) => {
	const {
		discount,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		desc,
		product,
		buttonText,
		image,
	} = footerBanner;
	return (
		<div className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					<p>{discount}</p>
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>
				<div className="right">
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
					</Link>
				</div>

				<Image
					alt="footer banner image"
					width={600}
					height={600}
					src={urlFor(image).url()}
					className="footer-banner-image"
				/>
			</div>
		</div>
	);
};

export default FooterBanner;
