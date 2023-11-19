'use client'
import useCreateProduct from '@/components/customHooks/useCreateProduct'
import { CreateProductPreviewImages } from '@/components/image-display/create-product-preview-images'
import BasicModal from '@/components/modal/Modal'
import { verifyStrings } from '@/lib/utils/verifyStringOnlyContainSpaces'
import { Flex, TextArea, TextField } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { BsImage } from 'react-icons/bs'

export default function SellProductPage() {
	const [modal, setModal] = useState(false)
  const [alertText, setAlertText] = useState('')
	const [payload, setPayload] = useState({
		name: '',
		description: '',
		manufacturingDate: new Date(),
		expirationDate: new Date(),
		category: '',
		price: 0,
		quantity: 0,
	})
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const { data: session, status } = useSession()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    if (newText.length <= 256) {
      setPayload({ ...payload, description: newText })
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedFiles.length === 4) {
      return
    }

    if (event.target.files) {
      const files = Array.from(event.target.files)

      const validFiles = files.filter(
        (file) => file.type === 'image/jpeg' || file.type === 'image/png',
      )

      setSelectedFiles([...selectedFiles, ...validFiles])

      const previews = validFiles.map((file) => URL.createObjectURL(file))
      setImagePreviews([...imagePreviews, ...previews])
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleClose = (fileNumber: number) => {
    const newPreviews = [...imagePreviews]
    newPreviews.splice(fileNumber, 1)
    setImagePreviews(newPreviews)
    if (selectedFiles !== null) {
      const newSelectedFiles = [...selectedFiles]
      newSelectedFiles.splice(fileNumber, 1)
      setSelectedFiles(newSelectedFiles)
    }
  }

  const HandlePost = async () => {
    buttonRef.current?.setAttribute('disabled', 'true')
    const jwt = session?.user.accessToken || ''
    if (jwt === '') {
      setAlertText('Você deve estar logado para criar um novo produto')
			setModal(true)
      buttonRef.current?.removeAttribute('disabled')
      return
    }
		if (!verifyStrings(payload.name) || !verifyStrings(payload.description) || !verifyStrings(payload.category)) {
			setAlertText('Todos os campos devem ser preenchidos')
			setModal(true)
			buttonRef.current?.removeAttribute('disabled')
			return
		}
		if (payload.price <= 0) {
			setAlertText('O preço deve ser maior que 0')
			setModal(true)
			buttonRef.current?.removeAttribute('disabled')
			return
		}
		if (payload.quantity <= 0) {
			setAlertText('A quantidade deve ser maior que 0')
			setModal(true)
			buttonRef.current?.removeAttribute('disabled')
			return
		}
		if (payload.manufacturingDate > payload.expirationDate) {
			setAlertText('A data de fabricação deve ser anterior a data de validade')
			setModal(true)
			buttonRef.current?.removeAttribute('disabled')
			return
		}
    if (!selectedFiles) {
      setSelectedFiles([])
    }
		const response = await useCreateProduct(payload.name, payload.description, payload.manufacturingDate, payload.expirationDate, payload.category, payload.price, payload.quantity, jwt, selectedFiles)
		if (response) {
			setAlertText('Produto criado com sucesso')
			setModal(true)
			router.push('/')
		} else {
			setAlertText('Erro ao criar o produto, se você não cadastrou seu cpf ou cnpj, não será capaz de criar um novo cadastro')
			setModal(true)
		}
		buttonRef.current?.removeAttribute('disabled')
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
			{modal && (
        <BasicModal title="Erro" text={alertText} open={modal} handleClose={() => setModal(false)} />
      )}
      <article className="rounded-lg border p-4 max-w-[440px] md:max-w-[540px] flex">
        {status === 'authenticated' ? (
					<>
						{imagePreviews.length > 0 && (
							<CreateProductPreviewImages data={imagePreviews} handleClose={handleClose} />
            )}
						<div className='w-full'>
							<h1 className="text-2xl font-bold ml-6 my-2">Criar Produto</h1>
							<Flex direction="column" gap="3" style={{ maxWidth: 500 }}>
								<TextField.Input size='3' radius="large" placeholder="Nome do produto" required onChange={(e) => setPayload({ ...payload, name: e.target.value })} />
								<TextArea size={'3'} placeholder="Descreva o seu produto" required onChange={handleTextChange} />
								<TextField.Input size='3' radius="large" placeholder="Categoria" required onChange={(e) => setPayload({ ...payload, category: e.target.value })} />
								<TextField.Input size={'3'} placeholder="Data de fabricação" required type='date' onChange={(e) => setPayload({ ...payload, manufacturingDate: new Date(e.target.value) })} />
								<TextField.Input size={'3'} placeholder="Descreva o seu produto" required type='date' onChange={(e) => setPayload({ ...payload, expirationDate: new Date(e.target.value) })} />
								<TextField.Input size='3' radius="large" placeholder="Quantidade em estoque" type='number' required onChange={(e) => setPayload({ ...payload, quantity: parseInt(e.target.value) })} />
								<TextField.Input size='3' radius="large" placeholder="Preço" type='number' required onChange={(e) => setPayload({ ...payload, price: parseFloat(e.target.value) })} />
							</Flex>
							<div className="w-full h-12 flex justify-between items-center pt-2">
								<div>
									<button
										onClick={handleButtonClick}
										className="py-1 px-2.5 rounded-md cursor-pointer disabled:cursor-not-allowed"
										disabled={selectedFiles.length === 4}
									>
										<BsImage className="w-5 h-5" />
									</button>
									<input
										type="file"
										accept=".png, .jpg"
										multiple
										onChange={handleFileChange}
										ref={fileInputRef}
										className="hidden"
										disabled={selectedFiles.length === 4}
									/>
								</div>
								<div className="flex items-center justify-center gap-2">
									<p
										className={`text-xs pr-2 border-r ${
											payload.description.length === 256 && 'text-red-600'
										}`}
									>
										{payload.description.length}/256
									</p>
									<button
										className="bg-green-500 text-white py-1 px-2.5 rounded-md disabled:bg-blue-200 disabled:cursor-not-allowed"
										disabled={payload.description.length < 1 || payload.category.length < 1 || payload.name.length < 1 || payload.price < 0 || payload.quantity < 0}
										onClick={HandlePost}
										ref={buttonRef}
									>
										Criar
									</button>
								</div>
							</div>
						</div>
					</>
        ) : (
          <div>
            <p className='text-lg font-medium my-3'>Faça login para adicionar produtos{' '}
              <Link
                href="/api/auth/signin"
                className="bg-blue-400 text-white py-1 px-2.5 rounded-md disabled:bg-blue-200 ml-3 text-lg disabled:cursor-not-allowed"
              >
                Entrar
              </Link>
            </p>
            <p className='text-lg font-medium'>
              Não possui uma conta?{' '}
              <Link href="/register" className="text-blue-400">
                Criar
              </Link>
            </p>
          </div>
        )}
      </article>
    </main>
	)
}

