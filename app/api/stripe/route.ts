import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface LineItem {
	name: string;
	image: { asset: { _ref: string } }[];
	price: number;
	quantity: number;
}

interface LineItem {
	name: string;
	image: { asset: { _ref: string } }[];
	price: number;
	quantity: number;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		// try {
		// 	const items: LineItem[] = req.body.cartItems;
		// 	const params: Stripe.Checkout.SessionCreateParams = {
		// 		submit_type: "pay",
		// 		mode: "payment",
		// 		payment_method_types: ["card"],
		// 		billing_address_collection: "auto",
		// 		shipping_options: [
		// 			{ shipping_rate: "shr_1PkDLU2LMUBfV12CGfi2eO30" },
		// 			{ shipping_rate: "shr_1PkDMN2LMUBfV12CIPavwMlD" },
		// 		],
		// 		line_items: items.map((item) => {
		// 			const img = item.image[0].asset._ref;
		// 			const newImage = img
		// 				.replace(
		// 					"image-",
		// 					"https://cdn.sanity.io/images/vfxfwnaw/production/"
		// 				)
		// 				.replace("-webp", ".webp");
		// 			return {
		// 				price_data: {
		// 					currency: "usd",
		// 					product_data: {
		// 						name: item.name,
		// 						images: [newImage],
		// 					},
		// 					unit_amount: item.price * 100,
		// 				},
		// 				adjustable_quantity: {
		// 					enabled: true,
		// 					minimum: 1,
		// 				},
		// 				quantity: item.quantity,
		// 			};
		// 		}),
		// 		success_url: `${req.headers.origin}/success`,
		// 		cancel_url: `${req.headers.origin}/canceled`,
		// 	};
		// 	const session = await stripe.checkout.sessions.create(params);
		// 	res.status(200).json(session);
		// } catch (err: any) {
		// 	res.status(err.statusCode || 500).json({ error: err.message });
		// }
	} else {
		// res.setHeader("Allow", "POST");
		// res.status(405).end("Method Not Allowed");
		console.log("Not allowed");
	}
}
