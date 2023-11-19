'use client'

import { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { signOut, useSession } from 'next-auth/react';
import useDeleteAccount from '@/components/customHooks/useDeleteAccount';
import { useRouter } from 'next/navigation';
import BasicModal from '@/components/modal/Modal';

export default function DeleteAccountButton() {
	const [textAlert, setTextAlert] = useState('');
	const [modal, setModal] = useState(false);
	const { data: session, status } = useSession();
	const router = useRouter()

	const handleSubmit = async () => {
		const token = session?.user.accessToken;
		if (!token) {
			setTextAlert('Você não possui uma sessão ativa, por favor logue novamente.');
			setModal(true);
			return;
		}
		
		const response = await useDeleteAccount(token);
		if (response) {
			setTextAlert('Conta deletada com sucesso.');
			setModal(true);
			signOut();
			router.push('/');
		} else {
			setTextAlert('Erro ao deletar a conta, por favor tente novamente.');
			setModal(true);
		}
	}

	return (
		<AlertDialog.Root>
			{modal && (
        <BasicModal title="Aviso" text={textAlert} open={modal} handleClose={() => setModal(false)} />
      )}
			<AlertDialog.Trigger asChild>
				<button className="text-violet11 hover:bg-opacity-75 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red-700 px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] shadow-black">
					Deletar conta
				</button>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
				<AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-zinc-700 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
					<AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
						Você tem certeza que deseja deletar sua conta?
					</AlertDialog.Title>
					<AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
						Esta operação não pode ser desfeita. Ela apagará todos os seus dados de forma permanente de nosso banco de dados e servidor.
					</AlertDialog.Description>
					<div className="flex justify-end gap-[25px]">
						<AlertDialog.Cancel asChild>
							<button className="text-mauve11 bg-gray-400 hover:bg-gray-500 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
								Cancelar
							</button>
						</AlertDialog.Cancel>
						<AlertDialog.Action asChild>
							<button className="text-red11 bg-red-400 hover:bg-red-500 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" onClick={handleSubmit}>
								Sim, deletar conta
							</button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}
