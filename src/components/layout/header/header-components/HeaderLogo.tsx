import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import cultivaLogo from "@/../public/logo.png";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})

export default function HeaderLogo() {
	return (
		<Link href={"/"} className="inline-flex justify-center items-center h-full">
			<Image className="ml-5 h-20 w-20" src={cultivaLogo} alt="Logo da Cultiva" />
			<span className={cn("text-2xl text-white font-semibold mt-2 -translate-x-2", poppins.className)}>Cultiva</span>
		</Link>
	)
}