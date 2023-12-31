'use client'

import * as Avatar from '@radix-ui/react-avatar'

export default function UserAvatar({
  image,
  wh,
}: {
  image?: string
  wh?: string
}) {
  return (
    <Avatar.Root
      className={`${
        wh || 'w-24 h-24'
      } bg-blackA1 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle`}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={
          image ||
          'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
        }
        alt="User picture"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
