import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
	try {
		const cartItems = await req.json();

		const params: Stripe.Checkout.SessionCreateParams = {
			submit_type: "pay",
			mode: "payment",
			payment_method_types: ["card"],
			billing_address_collection: "auto",
			shipping_options: [
				{ shipping_rate: "shr_1PkDLU2LMUBfV12CGfi2eO30" },
				{ shipping_rate: "shr_1PkDMN2LMUBfV12CIPavwMlD" },
			],
			line_items: cartItems.map((item: any) => {
				const img = item.image[0].asset._ref;
				const newImage = img
					.replace(
						"image-",
						`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`
					)
					.replace("-webp", ".webp");
				return {
					price_data: {
						currency: "ngn",
						product_data: {
							name: item.name,
							images: [newImage],
						},
						unit_amount: item.price * 1000,
					},
					adjustable_quantity: {
						enabled: true,
						minimum: 1,
					},
					quantity: item.quantity,
				};
			}),
			success_url: `${req.nextUrl.origin}/success`,
			cancel_url: `${req.nextUrl.origin}/canceled`,
		};

		// Create Checkout Session
		const session = await stripe.checkout.sessions.create(params);

		return NextResponse.json(session, { status: 200 });
	} catch (err: any) {
		return NextResponse.json(
			{ error: err.message },
			{ status: err.statusCode || 500 }
		);
	}
}
