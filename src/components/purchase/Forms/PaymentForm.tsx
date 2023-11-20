import * as Form from '@radix-ui/react-form'

type Payload = {
  name?: string
  cardNumber?: number
  validity?: string
  cvc?: number
}

export default function PaymentForm({
  checked,
  handleClick,
  payload,
  setPayload,
}: {
  checked: boolean
  handleClick: () => void
  payload?: Payload
  setPayload?: React.Dispatch<React.SetStateAction<Payload | undefined>>
}) {
  return (
    <div>
      <Form.Root className="w-full grid grid-cols-2 gap-6">
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Nome Completo
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, preencha o campo
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="text"
              required
              onChange={(e) =>
                setPayload && setPayload({ ...payload, name: e.target.value })
              }
              value={payload?.name || ''}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Cartão
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, providencie os digitos do cartão
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="number"
              required
              onChange={(e) =>
                setPayload &&
                setPayload({ ...payload, cardNumber: Number(e.target.value) })
              }
              value={payload?.cardNumber || ''}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Validade
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, preencha com a validade
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="date"
              required
              onChange={(e) =>
                setPayload &&
                setPayload({ ...payload, validity: e.target.value })
              }
              value={payload?.validity || ''}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              CVC
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor, providencie o CVC
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="number"
              required
              onChange={(e) =>
                setPayload &&
                setPayload({ ...payload, cvc: Number(e.target.value) })
              }
              value={payload?.cvc || ''}
            />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  )
}
