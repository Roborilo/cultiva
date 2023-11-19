import SwitchDemo from "./components/Switch";
import ChangePassword from "./components/change-password";
import DeleteAccountButton from "./components/delete-account-button";

export default function Config() {
	return (
		<section className="flex flex-col gap-7 w-full px-20 py-8">
			<h1 className="text-5xl font-bold">Configurações</h1>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Preferências</h2>
				<div className="flex justify-between items-start w-full mt-2">
					<p className="text-2xl font-medium w-1/3">Tema</p>
					<SwitchDemo />
				</div>
			</section>
			<section className="flex flex-col gap-4 w-full mt-12">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Mudar sua senha</h2>
				<ChangePassword />
			</section>
			<section className="flex flex-col gap-4 w-full mt-12">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Deletar conta</h2>
				<div className="flex justify-start items-start w-full mt-2">					
					<DeleteAccountButton />
				</div>
			</section>
		</section>
	)
}