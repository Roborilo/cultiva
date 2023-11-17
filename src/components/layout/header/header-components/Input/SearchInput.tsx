import { FaSearch } from "react-icons/fa"

export default function SearchInput() {
	return (
		<div className="flex justify-center">
			<div className="inline-flex w-9 rounded-tl-3xl rounded-bl-3xl justify-center items-center bg-black">
				<FaSearch className="text-2xl text-white" />
			</div>
			<input type="search" name="" id="search" className="w-64 rounded-tr-3xl rounded-br-3xl text-white bg-black text-xl font-semibold px-2" placeholder="Pesquisar" />
		</div>
	)	
}