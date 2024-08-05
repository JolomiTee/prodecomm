import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Footer, Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Prodecomm Store",
	description: "Your latest products all up in there",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`layout ${inter.className}`}>
				<Toaster />
				<title>Prodecomm Store</title>
				<header>
					<Navbar />
				</header>
				<main className="main-container">{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
