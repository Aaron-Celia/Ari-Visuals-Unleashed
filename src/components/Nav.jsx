"use client";
import logo from "@/images/Logo/photo-logo.png";
import {
	Box,
	Button,
	Menu,
	MenuItem,
	Modal,
	useMediaQuery
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import phoneMenuIcon from "@/images/Logo/white-icon-2.png";
import closeButton from '@/images/Logo/close-icon.png';

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: "400"
});

export default function Nav() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const open = Boolean(anchorEl);
	const router = useRouter();

	const onLargeScreen = useMediaQuery("(min-width: 935px)");

	const handleClick = (event) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (e) => {
		e.stopPropagation();
		setAnchorEl(null);
	};

	const closeModal = () => {
		setOpenModal(false);
	};

	const openModalMenu = () => {
		setOpenModal(true);
	};

	if (onLargeScreen) {
		return (
			<nav
				id="nav"
				className={`${quicksand.className} flex items-center justify-between w-screen h-20 bg-black text-white`}>
				<div onClick={() => router.push("/")} className="h-20 cursor-pointer">
					<Image src={logo} alt="Logo" className="h-[90%] w-40 mt-1 ml-4" />
				</div>
				<div className="flex w-[50vw] justify-around items-center mr-0">
					<Link
						className="h-full w-20 flex justify-center items-center text-lg mx-5"
						href="/">
						Home
					</Link>
					<Button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
						disableFocusRipple
						disableRipple
						className={`${quicksand.className} m-0`}
						endIcon={open ? <KeyboardArrowUpIcon sx={{ margin: '0' }} /> : <KeyboardArrowDownIcon />}
						sx={{
							"&:hover": { backgroundColor: "inherit" },
							marginRight: "1.25rem"
						}}>
						<p className="text-[16px]">Gallery</p>
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button"
						}}>
						<MenuItem onClick={handleClose}>
							<Link
								className={`${quicksand.className} text-xl my-3`}
								href="/architecture">
								Architecture
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link
								className={`${quicksand.className} text-xl my-3`}
								href="/concerts">
								Concerts
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link
								className={`${quicksand.className} text-xl my-3`}
								href="/portraits">
								Portraits
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link className={`${quicksand.className} text-xl my-3`} href="/scenic">
								Scenic
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link className={`${quicksand.className} text-xl my-3`} href="/other">
								Other
							</Link>
						</MenuItem>
					</Menu>
					<Link
						className="h-full w-20 flex justify-center items-center text-lg mx-5"
						href="/about">
						About
					</Link>
					<Link
						className="h-full w-20 flex justify-center items-center text-lg mx-5"
						href="/contact">
						Contact
					</Link>
					<Link
						target="_blank"
						href="https://instagram.com/ari.visuals.unleashed?igshid=MmIzYWVlNDQ5Yg=="
						className="text-lg hover:text-yellow-500 duration-200 mx-5">
						@ari.visuals.unleashed
					</Link>
				</div>
			</nav>
		);
	} else {
		return (
			<>
				<nav
					id="phone-nav"
					className="flex justify-center items-center h-20 w-screen">
					<div onClick={() => router.push("/")} className="h-20">
						<Image src={logo} alt="Logo" className="h-[90%] w-40" />
					</div>
					<div
						onClick={openModalMenu}
						className="absolute w-16 h-16 z-50 left-0 top-2">
						<Image src={phoneMenuIcon} alt="Menu" className="h-full w-full" />
					</div>
				</nav>
				<div className="bg-white absolute rounded-full h-10 w-10 left-[0.8rem] top-5"></div>
				<Modal open={openModal} onClose={closeModal}>
					<div
						onClick={() => {
							closeModal();
						}}
						className="bg-black h-screen w-screen flex flex-col items-center justify-around text-white py-20">
						<Link className={`${quicksand.className} text-2xl`} href="/">
							Home
						</Link>
						<Button
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={(e) => handleClick(e)}
							disableFocusRipple
							disableRipple
							endIcon={
								open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
							}
							sx={{
								"&:hover": { backgroundColor: "inherit" },
								margin: '0',
								paddingLeft: '2rem'
							}}>
							<div className={`${quicksand.className} text-[20px]`}>Gallery</div>
						</Button>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button"
							}}>
							<MenuItem
								onClick={(e) => {
									handleClose(e);
									closeModal();
								}}>
								<Link
									className={`${quicksand.className} text-2xl my-3`}
									href="/architecture">
									Architecture
								</Link>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									handleClose(e);
									closeModal();
								}}>
								<Link
									className={`${quicksand.className} text-2xl my-3`}
									href="/concerts">
									Concerts
								</Link>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									handleClose(e);
									closeModal();
								}}>
								<Link
									className={`${quicksand.className} text-2xl my-3`}
									href="/portraits">
									Portraits
								</Link>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									handleClose(e);
									closeModal();
								}}>
								<Link
									className={`${quicksand.className} text-2xl my-3`}
									href="/scenic">
									Scenic
								</Link>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									handleClose(e);
									closeModal();
								}}>
								<Link
									className={`${quicksand.className} text-2xl my-3`}
									href="/other">
									Other
								</Link>
							</MenuItem>
						</Menu>
						<Link className={`${quicksand.className} text-2xl`} href="/about">
							About
						</Link>
						<Link className={`${quicksand.className} text-2xl`} href="/contact">
							Contact
						</Link>
						<Link
							target="_blank"
							href="https://instagram.com/ari.visuals.unleashed?igshid=MmIzYWVlNDQ5Yg=="
							className={`${quicksand.className} text-2xl`}>
							@ari.visuals.unleashed
						</Link>
				{ openModal ? 
				<div><Image src={closeButton} alt='Close Menu Button' className="absolute top-4 left-4 z-50"/><div className="bg-white absolute h-8 w-8 top-8 left-8 z-40"></div></div> : null}
					</div>
				</Modal>
			</>
		);
	}
}
