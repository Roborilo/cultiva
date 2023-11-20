'use client'

import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { forwardRef, useContext, useEffect, useState } from 'react'
import DeliveryForm from './Forms/DeliveryForm'
import PaymentForm from './Forms/PaymentForm'

import { readyContext } from '@/app/purchase/layout'

type PayloadA = {
  street?: string
  number?: number
  district?: string
  cep?: string
  city?: string
  state?: string
}

type PayloadB = {
  name?: string
  cardNumber?: number
  validity?: string
  cvc?: number
}

const verifyIfHasValue = (payload: PayloadA | PayloadB | undefined) => {
  for (const key in payload) {
    // @ts-ignore
    if (payload[key] !== '') {
      return true
    } else {
      return false
    }
  }
}

export default function AccordionDemo() {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [payload, setPayload] = useState<PayloadA | undefined>()
  const [payload2, setPayload2] = useState<PayloadB | undefined>()
  const context = useContext(readyContext)

  if (!context) {
    return null
  }

  const { ready, setReady } = context

  useEffect(() => {
    if ((checked || verifyIfHasValue(payload)) && verifyIfHasValue(payload2)) {
      setReady(true)
    }
  }, [payload, checked, payload2])

  return (
    <Accordion.Root
      className="bg-dropdown-menu-dark w-3/4 rounded-md shadow-[0_2px_10px] shadow-black/5 mt-8"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1" label="Entrega">
        <DeliveryForm
          checked={checked}
          handleClick={() => setChecked(!checked)}
          payload={payload}
          setPayload={setPayload}
        />
      </AccordionItem>

      <AccordionItem value="item-2" label="Pagamento">
        <PaymentForm
          checked={checked2}
          handleClick={() => setChecked2(!checked2)}
          payload={payload2}
          setPayload={setPayload2}
        />
      </AccordionItem>
    </Accordion.Root>
  )
}

interface AccordionItemProps {
  value: string
  label: React.ReactNode
  children: React.ReactNode
  className?: string
}

const AccordionItem = forwardRef(
  (
    { value, label, children, className, ...props }: AccordionItemProps,
    forwardedRef,
  ) => (
    <Accordion.Item
      value={value}
      className={classNames(
        'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
        className,
      )}
      {...props}
      ref={forwardedRef as React.RefObject<HTMLDivElement>}
    >
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </Accordion.Item>
  ),
)

const AccordionTrigger = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef,
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          'text-violet11 shadow-mauve6 hover:bg-opacity-80 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-cultiva-black px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
          className,
        )}
        {...props}
        ref={forwardedRef as React.RefObject<HTMLButtonElement>}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)

const AccordionContent = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef,
  ) => (
    <Accordion.Content
      className={classNames(
        'text-mauve11 bg-dropdown-menu-dark data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
        className,
      )}
      {...props}
      ref={forwardedRef as React.RefObject<HTMLDivElement>}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  ),
)
