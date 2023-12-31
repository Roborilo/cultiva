'use client'

import * as Popover from '@radix-ui/react-popover'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FaShoppingCart } from 'react-icons/fa'
import ProductPreview from './ProductPreview'
import { useCart } from '@/components/product/AddToCart'
import Link from 'next/link'

export default function CartPopover() {
  const { products, dec } = useCart()

  const handleDecAll = () => {
    products.forEach((product) => {
      dec(product.id)
    })
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
          <FaShoppingCart className="text-xl" />
          Carrinho
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[360px] bg-dropdown-menu-dark text-white shadow-lg data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col">
            <p className="text-mauve12 text-[16px] leading-[19px] font-semibold mb-2.5">
              Carrinho
            </p>
            {products.length > 0 ? (
              <>
                {products.map((product) => (
                  <ProductPreview
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    quantity={product.quantity}
                    price={Number(product.price)}
                    image={product.images[0]}
                  />
                ))}
                <div>
                  <p className="font-semibold text-base mt-2 flex justify-between items-center pb-2 border-b px-2">
                    <span>Total</span>
                    <span>
                      R$
                      {products
                        .reduce(
                          (total, product) =>
                            total + Number(product.price) * product.quantity,
                          0,
                        )
                        .toFixed(2)}
                    </span>
                  </p>
                  <div className="flex justify-between mt-3 px-2">
                    <button
                      className="rounded-md py-1 px-2.5 font-semibold text-xl bg-red-600"
                      onClick={handleDecAll}
                    >
                      Cancelar
                    </button>
                    <Link
                      href={'/purchase'}
                      className="rounded-md py-1 px-2.5 font-semibold text-xl bg-green-500"
                    >
                      Finalizar
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-mauve12 text-[16px] leading-[19px] font-semibold my-6">
                Nenhum item no carrinho
              </p>
            )}
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-pointer"
            aria-label="Close"
          >
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
