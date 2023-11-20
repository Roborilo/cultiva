'use client'

import Input from '@/components/create-account/Input'
import useChangePassword from '@/components/customHooks/useChangePassword'
import BasicModal from '@/components/modal/Modal'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [textAlert, setTextAlert] = useState('')
  const [modal, setModal] = useState(false)
  const { data: session, status } = useSession()

  const handleSubmit = async () => {
    const token = session?.user.accessToken
    if (!token) {
      setTextAlert(
        'Você não possui uma sessão ativa, por favor logue novamente',
      )
      setModal(true)
      return
    }
    if (password === '' || newPassword === '') {
      setTextAlert('Preencha todos os campos')
      setModal(true)
      return
    }
    if (password === newPassword) {
      setTextAlert('As senhas devem ser diferentes')
      setModal(true)
      return
    }

    const response = await useChangePassword(password, newPassword, token)
    if (response) {
      setTextAlert('Senha alterada com sucesso')
      setModal(true)
    } else {
      setTextAlert(
        'Erro ao alterar a senha, tenha certeza que a senha antiga esta correta',
      )
      setModal(true)
    }
  }

  return (
    <>
      {modal && (
        <BasicModal
          title="Aviso"
          text={textAlert}
          open={modal}
          handleClose={() => setModal(false)}
        />
      )}
      <div className="flex justify-between items-start w-full mt-2">
        <Input
          placeholder="Senha atual"
          type="password"
          handleChange={setPassword}
          required
        />
        <Input
          placeholder="Nova senha"
          type="password"
          handleChange={setNewPassword}
          required
        />
        <button
          className="text-xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12"
          onClick={handleSubmit}
        >
          Salvar
        </button>
      </div>
    </>
  )
}
