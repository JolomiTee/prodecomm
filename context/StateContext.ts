import { create } from "zustand";
import { toast } from "react-hot-toast";

// Define the Product interface
interface Product {
	_id: string;
	name: string;
	price: number;
	quantity: number;
	[key: string]: any; // For any additional properties
}

// Define the state interface
interface State {
	showCart: boolean;
	cartItems: Product[];
	totalPrice: number;
	totalQuantities: number;
	qty: number;
	incQty: () => void;
	decQty: () => void;
	onAdd: (product: Product, quantity: number) => void;
	onRemove: (product: Product) => void;
	toggleCartItemQuantity: (id: string, value: "inc" | "dec") => void;
	setShowCart: (show: boolean) => void;
	setCartItems: (items: Product[]) => void;
	setTotalPrice: (price: number) => void;
	setTotalQuantities: (quantities: number) => void;
}

// Create Zustand store with explicit type
export const useStore = create<State>((set, get) => ({
	showCart: false,
	cartItems: [],
	totalPrice: 0,
	totalQuantities: 0,
	qty: 1,
	setShowCart: (show: boolean) => set({ showCart: show }),
	setCartItems: (items: Product[]) => set({ cartItems: items }),
	setTotalPrice: (price: number) => set({ totalPrice: price }),
	setTotalQuantities: (quantities: number) =>
		set({ totalQuantities: quantities }),
	incQty: () => set((state) => ({ qty: state.qty + 1 })),
	decQty: () => set((state) => ({ qty: state.qty > 1 ? state.qty - 1 : 1 })),
	onAdd: (product: Product, quantity: number) => {
		const { cartItems, qty } = get();
		// To check if the product is already in the cart
		const checkProductInCart = cartItems.find(
			(item) => item._id === product._id
		);
		set((state) => ({
			totalPrice: state.totalPrice + product.price * quantity,
			totalQuantities: state.totalQuantities + quantity,
		}));
		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id) {
					return { ...cartProduct, quantity: cartProduct.quantity + quantity };
				}
				return cartProduct;
			});
			set({ cartItems: updatedCartItems });
		} else {
			product.quantity = quantity;
			set({ cartItems: [...cartItems, { ...product }] });
		}
		toast.success(`${qty} ${product.name} added to the cart.`);
	},
	onRemove: (product: Product) => {
		const { cartItems } = get();
		const foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);
		if (foundProduct) {
			set((state) => ({
				totalPrice:
					state.totalPrice - foundProduct.price * foundProduct.quantity,
				totalQuantities: state.totalQuantities - foundProduct.quantity,
				cartItems: newCartItems,
			}));
		}
	},
	toggleCartItemQuantity: (id: string, value: "inc" | "dec") => {
		const { cartItems } = get();
		const foundProduct = cartItems.find((item) => item._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);
		if (foundProduct) {
			if (value === "inc") {
				set((state) => ({
					cartItems: [
						...newCartItems,
						{ ...foundProduct, quantity: foundProduct.quantity + 1 },
					],
					totalPrice: state.totalPrice + foundProduct.price,
					totalQuantities: state.totalQuantities + 1,
				}));
			} else if (value === "dec" && foundProduct.quantity > 1) {
				set((state) => ({
					cartItems: [
						...newCartItems,
						{ ...foundProduct, quantity: foundProduct.quantity - 1 },
					],
					totalPrice: state.totalPrice - foundProduct.price,
					totalQuantities: state.totalQuantities - 1,
				}));
			}
		}
	},
}));

// Usage in components
export const useStateContext = () => useStore();

