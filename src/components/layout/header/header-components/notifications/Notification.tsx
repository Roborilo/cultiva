'use client'

import * as Popover from '@radix-ui/react-popover'
import { Cross2Icon } from '@radix-ui/react-icons'
import { IoIosNotifications } from 'react-icons/io'

export default function Notifications() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
          <IoIosNotifications className="text-xl" />
          Notificações
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[360px] bg-dropdown-menu-dark text-white shadow-lg data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col">
            <p className="text-mauve12 text-[16px] leading-[19px] font-semibold mb-2.5">
              Notificações
            </p>
            <p className="text-mauve12 text-[16px] leading-[19px] font-semibold my-6">
              Nenhuma notificação no momento.
            </p>
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
