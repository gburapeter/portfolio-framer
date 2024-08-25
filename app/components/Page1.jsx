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
	const scale = useTransform(scrollYProgress, [0, 1], [1, 45]);
	const scale2 = useTransform(scrollYProgress, [0, 1], [1, 12]);

	return (
		<div ref={ref} className="bg-black relative h-[500dvh]">
			<div className="sticky top-0 h-dvh grid place-items-center overflow-hidden">
				<div className="absolute bg-red-500 h-full w-full grid place-items-center grid-cols-5 gap-x-48">
					<motion.div
						style={{ scale: scale2 }}
						className=" w-full h-full grid place-items-center"
					>
						<div
							className="      
                     top-[-30vh]
            left-[5vw]
            w-[35vw]
            h-[30vh] relative  "
						>
							<Image
								src="/images/logistics1.png"
								fill
								alt="image"
								className=" object-cover object-center"
							/>
						</div>
					</motion.div>

					<motion.div
						style={{ scale: scale2 }}
						className="w-full h-full  grid place-items-center"
					>
						<div
							className="relative top-5
            right-1
            w-[18vw]
            h-[40vh]"
						>
							<Image
								src="/images/logistics2.png"
								fill
								alt="image"
								className=" object-cover object-center"
							/>
						</div>
					</motion.div>
					<motion.div
						style={{ scale: scale }}
						className="z-50 w-full h-full  grid place-items-center"
					>
						<div
							className="relative top-2  
            w-[20vw]
            aspect-square"
						>
							<Image
								src="/images/logistics4.png"
								fill
								alt="image"
								className=" object-cover object-center"
							/>
						</div>
					</motion.div>
					<motion.div
						style={{ scale: scale2 }}
						className="w-full h-full  grid place-items-center"
					>
						<div className="relative bottom-8 left-8 h-[200px] w-[200px]">
							<Image
								src="/images/logistics3.png"
								fill
								alt="image"
								className=" object-cover object-center"
							/>
						</div>
					</motion.div>

					<motion.div
						style={{ scale: scale2 }}
						className="w-full h-full  grid place-items-center"
					>
						<div className="relative h-[200px] w-[200px]">
							<Image
								src="/images/logistics5.png"
								fill
								alt="image"
								className=" object-cover object-center"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
		// <div className="h-[300dvh]" ref={ref}>
		// 	<motion.div>
		// 		<div
		// 			style={{ scale: scrollYProgress }}
		// 			className="relative w-[500px] h-[500px]"
		// 		>
		// 			<Image
		// 				src="/images/MosDef.jpg"
		// 				fill
		// 				className="object-cover object-center"
		// 				alt="Mos Def"
		// 				priority
		// 			/>
		// 		</div>
		// 	</motion.div>
		// </div>
	);
};
