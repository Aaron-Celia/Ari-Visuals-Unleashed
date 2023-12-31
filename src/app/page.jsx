"use client";
import Location from "@/components/Location";
import fav4 from "@/images/Architecture/fav4.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import fav1 from "@/images/Architecture/fav1.jpeg";

export default function Home() {
	const router = useRouter();
	return (
		<main className="">
			<div className="w-screen">
				<Image
					src={fav1}
					alt="Showcase Image"
					id="laptop-bg"
					className="w-screen aspect-auto -z-10"
					// className="h-[50vw] w-[75vw] relative top-[2rem] left-[1rem] z-0"
				/>
				{/* <Image
					src={fav2}
					alt="Showcase Image"
					className="h-[70vw] w-[35vw] relative left-[10vw] top-0 z-10"
				/>
				<Image
					src={fav3}
					alt="Showcase Image"
					className="h-[12rem] w-[18rem] relative top-[28rem] right-[1rem] z-0"
				/> */}
			</div>
			<div className="w-screen flex flex-col justify-center items-center self-center z-10 text-white my-16">
				<div className="flex flex-col items-start">
					<h3 className="text-3xl tablet:text-4xl laptop:text-5xl">
						Freezing Time,
					</h3>
					<h3 className="text-3xl tablet:text-4xl laptop:text-5xl mt-1">
						One Shot at a Time.
					</h3>
					<Location />
				</div>
			</div>
			<h3 className="text-center text-2xl tablet:text-3xl laptop:text-4xl">Albums</h3>
			<section className="h-fit w-screen flex flex-col tablet:flex-row tablet:flex-wrap justify-center items-center">
				<div
					id="architecture"
					onClick={() => router.push("/architecture")}
					className="w-[70vw] text-xl laptop:hover:text-2xl aspect-square my-10 mx-10 border-white border rounded-2xl tablet:w-80 tablet:h-80">
					<div className="assure-full-height h-full w-full rounded-2xl bg-black bg-opacity-60 laptop:hover:bg-opacity-90 duration-200 flex items-center justify-center">
						<h3 className="text-white">Architecture</h3>
					</div>
				</div>
				<div
					id="concerts"
					onClick={() => router.push("/concerts")}
					className="w-[70vw] text-xl laptop:hover:text-2xl aspect-square my-10 mx-10 border-white border rounded-2xl tablet:w-80 tablet:h-80">
					<div className="assure-full-height h-full w-full rounded-2xl bg-black bg-opacity-60 laptop:hover:bg-opacity-90 duration-200 flex items-center justify-center">
						<h3 className="text-white">Concerts</h3>
					</div>
				</div>
				<div
					id="portraits"
					onClick={() => router.push("/portraits")}
					className="w-[70vw] text-xl laptop:hover:text-2xl aspect-square my-10 mx-10 border-white border rounded-2xl tablet:w-80 tablet:h-80">
					<div className="assure-full-height h-full w-full rounded-2xl bg-black bg-opacity-60 laptop:hover:bg-opacity-90 duration-200 flex items-center justify-center">
						<h3 className="text-white">Portraits</h3>
					</div>
				</div>
				<div
					id="scenic"
					onClick={() => router.push("/scenic")}
					className="w-[70vw] text-xl laptop:hover:text-2xl aspect-square my-10 mx-10 border-white border rounded-2xl tablet:w-80 tablet:h-80">
					<div className="assure-full-height h-full w-full rounded-2xl bg-black bg-opacity-60 laptop:hover:bg-opacity-90 duration-200 flex items-center justify-center">
						<h3 className="text-white">Scenic</h3>
					</div>
				</div>
				<div
					id="other"
					onClick={() => router.push("/other")}
					className="w-[70vw] text-xl laptop:hover:text-2xl aspect-square my-10 mx-10 border-white border rounded-2xl tablet:w-80 tablet:h-80">
					<div className="assure-full-height h-full w-full rounded-2xl bg-black bg-opacity-60 laptop:hover:bg-opacity-90 duration-200 flex items-center justify-center">
						<h3 className="text-white">Other</h3>
					</div>
				</div>
			</section>
		</main>
	);
}
