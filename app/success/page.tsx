"use client";

import { useStore } from "@/context/StateContext";
import Link from "next/link";
import { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "@/lib/utils";

const page = () => {
	const setCartItems = useStore((state) => state.setCartItems);
	const setTotalPrice = useStore((state) => state.setTotalPrice);
	const setTotalQuantities = useStore((state) => state.setTotalQuantities);

	useEffect(() => {
		localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantities(0);
		runFireworks();
	}, []);

	return (
		<div className="success-wrapper">
			<div className="success">
				<p className="icon">
					<BsBagCheckFill />
				</p>
				<h2>Thank you for your order!</h2>
				<p className="email-msg">Check your email inbox for the receipt.</p>
				<p className="description">
					If you have any questions, please email
					<a className="email" href="mailto:order@example.com">
						order@example.com
					</a>
				</p>
				<Link href="/">
					<button type="button" className="btn w-[300px]">
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	);
};

export default page;
