"use client";

import { useStore } from "@/context/StateContext";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";

const Navbar = () => {
	const showCart = useStore((state) => state.showCart);
	const setShowCart = useStore((state) => state.setShowCart);
	const totalQuantities = useStore((state) => state.totalQuantities);

	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Prodecomm Store</Link>
			</p>

			<button
				type="button"
				className="cart-icon"
				onClick={() => setShowCart(true)}
			>
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>

			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
