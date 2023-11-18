import Image, { StaticImageData } from "next/image";

export default function imageAdapter(image: string | StaticImageData, className?: string) {
	if (typeof image === 'string') {
		return <img src={image} alt="" className={className} />
	} else {
		return <Image src={image} alt="" className={className} />
	}
}