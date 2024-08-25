"use client";
import Image from "next/image";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Page1 = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,

		offset: ["start start", "end end"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);
	const scale2 = useTransform(scrollYProgress, [0, 1], [1, 40]);

	return (
		<div ref={ref} className="bg-black relative h-[1000dvh]">
			<div className="sticky top-0 h-dvh grid place-items-center overflow-hidden">
				<div className="relative bg-[#181818] grid place-items-center h-full w-full">
					<motion.div
						style={{ scale: scale2 }}
						className="absolute  top-[6vh]
            left-[10vw] w-[34vw] h-[40vh] "
					>
						<Image
							src="/images/logistics1.png"
							fill
							alt="image"
							className=" object-cover object-center"
						/>
					</motion.div>

					<motion.div
						style={{ scale: scale2 }}
						className="absolute  right-[5vw]
            top-[8vh] w-[25vw] h-[50vh] "
					>
						<Image
							src="/images/logistics5.png"
							fill
							alt="image"
							className=" object-cover object-center"
						/>
					</motion.div>
					<motion.div
						style={{ scale: scale }}
						className="z-50 absolute 
             w-[30vw] aspect-square "
					>
						<Image
							src="/images/logistics2.png"
							fill
							alt="image"
							className=" object-cover object-center"
						/>
					</motion.div>
					<motion.div
						style={{ scale: scale2 }}
						className="absolute w-[22vw] h-[45vh]  bottom-[3vh] left-[10vw] "
					>
						<Image
							src="/images/logistics3.png"
							fill
							alt="image"
							className=" object-cover object-center"
						/>
					</motion.div>

					<motion.div
						style={{ scale: scale2 }}
						className="absolute  w-[35vw] h-[24vh] bottom-[10vh] right-[1vw] "
					>
						<Image
							src="/images/logistics4.png"
							fill
							alt="image"
							className=" object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
