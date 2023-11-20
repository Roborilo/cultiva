import { Checkbox, Flex, Text } from "@radix-ui/themes"
import * as Form from '@radix-ui/react-form';

type Payload = {
	street?: string
	number?: number
	district?: string
	cep?: string
	city?: string
	state?: string
}

export default function DeliveryForm({ checked, handleClick, payload, setPayload }: { checked: boolean, handleClick: () => void, payload?: Payload, setPayload?: React.Dispatch<React.SetStateAction<Payload | undefined>> }) {
	return (
		<div>
			<Text as="label" size="2">
				<Flex gap="2" className="items-center">
					<Checkbox defaultChecked={checked} size='3' onClick={handleClick} /> 
					<p className="text-xl">Usar dados de usuário salvo para o envio?</p>
				</Flex>
			</Text>
			{!checked && (
				<Form.Root className="w-full grid grid-cols-2 gap-6">
					<Form.Field className="grid mb-[10px]" name="email">
						<div className="flex items-baseline justify-between">
							<Form.Label className="text-[15px] font-medium leading-[35px] text-white">Rua</Form.Label>
							<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
								Por favor, escreva o nome da rua
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="text"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, street: e.target.value })}
								value={payload?.street || ''}
							/>
						</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="email">
						<div className="flex items-baseline justify-between">
							<Form.Label className="text-[15px] font-medium leading-[35px] text-white">Número</Form.Label>
							<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
								Por favor, escreva o nome da número
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="number"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, number: Number(e.target.value) })}
								value={payload?.number || ''}
							/>
						</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
									Bairro
								</Form.Label>
								<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
									Por favor, providencie o bairro
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="text"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, district: e.target.value })}
								value={payload?.district || ''}
							/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
									CEP
								</Form.Label>
								<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
									Por favor, providencie o CEP
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="text"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, cep: e.target.value })}
								value={payload?.cep || ''}
							/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
									Cidade
								</Form.Label>
								<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
									Por favor, providencie o cidade
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="text"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, city: e.target.value })}
								value={payload?.city || ''}
							/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Label className="text-[15px] font-medium leading-[35px] text-white">
									Estado
								</Form.Label>
								<Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
									Por favor, providencie o estado
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
								className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
								type="text"
								required
								onChange={(e) => setPayload && setPayload({ ...payload, state: e.target.value })}
								value={payload?.state || ''}
							/>
							</Form.Control>
						</Form.Field>
				</Form.Root>
			)}
		</div>
	)
}