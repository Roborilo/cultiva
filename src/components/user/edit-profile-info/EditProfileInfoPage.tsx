import EditContact from "./Form/edit-contact"
import EditProfile from "./Form/edit-profile"

export default function EditProfileInfo() {
	return (
		<section className="flex flex-col gap-7 w-full px-20 py-8">
			<h1 className="text-5xl font-bold">Detalhes da sua conta</h1>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Informações</h2>
				<div className="flex justify-between items-start w-full">
					<p className="text-2xl font-medium w-1/3">Aqui estão as informações que serão mostradas em seu perfil público.</p>
					<EditProfile />
				</div>
			</section>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Informações de contato</h2>
				<div className="flex justify-between items-start w-full">
					<p className="text-2xl font-medium w-1/3">Aqui estarão os contatos utilizados no site para te conectar aos seus compradores ou vendedores.</p>
					<EditContact />
				</div>
			</section>
		</section>
	)
}