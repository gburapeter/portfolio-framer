import MosDef from "../../public/images/MosDef.jpg";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	// const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	// const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	// const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	// const scale9 = useTransform(scrollYProgress, [0, 1], [1, 5]);

	const pictures = [
		{
			src: MosDef,
			scale: scale4,
		},
		// {
		// 	src: Picture2,
		// 	scale: scale5,
		// },
		// {
		// 	src: Picture3,
		// 	scale: scale6,
		// },
		// {
		// 	src: Picture4,
		// 	scale: scale5,
		// },
		// {
		// 	src: Picture5,
		// 	scale: scale6,
		// },
		// {
		// 	src: Picture6,
		// 	scale: scale8,
		// },
		// {
		// 	src: Picture1,
		// 	scale: scale9,
		// },
	];

	return (
		<div ref={container}>
			<div>
				{pictures.map(({ src, scale }, index) => {
					return (
						<motion.div key={index}>
							<div>
								<Image src={src} fill alt="image" placeholder="blur" />
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
