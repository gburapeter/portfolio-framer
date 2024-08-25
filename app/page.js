"use client";
import Image from "next/image";
import { ReactLenis, useLenis } from "lenis/react";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { PageMain } from "./components/PageMain";
export default function Home() {
	return (
		<ReactLenis root>
			<main>
				<PageMain />
				<Page1 />
				<Page2 />
			</main>
		</ReactLenis>
	);
}
