import Stars from '../product/Stars'
import UserAvatar from '../user/Avatar'

type CommentProps = {
  icon?: string
  name: string
  createdAt: string
  content: string
  rating: number
}

function calculateTimeElapsed(createdAt: string) {
  const currentDate = new Date()
  const createdDate = new Date(createdAt)

  const timeDifference = currentDate.getTime() - createdDate.getTime()
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (seconds < 60) {
    return `há ${seconds}s`
  } else if (minutes < 60) {
    return `há ${minutes}m`
  } else if (hours < 24) {
    return `há ${hours}h`
  } else if (days < 30) {
    return `há ${days}d`
  } else if (months < 12) {
    return `há ${months}m`
  } else {
    return `há ${years}y`
  }
}

export default function Comment({
  icon,
  name,
  createdAt,
  content,
  rating,
}: CommentProps) {
  const timeElapsed = calculateTimeElapsed(createdAt)

  return (
    <div className="flex justify-start items-start w-full mt-4 gap-4 bg-cultiva-main px-5 py-4 rounded-sm">
      <UserAvatar wh="w-12 h-12" image={icon} />
      <div className="flex flex-col w-full pt-2">
        <div className="flex items-center justify-start gap-2">
          <p className="text-lg font-semibold">{name}</p>
          <span className="text-xl">•</span>
          <p className="text-lg font-thin">{timeElapsed}</p>
        </div>
        <p className="text-lg font-thin text-start leading-6 xl:w-3/4 px-1.5 py-3">
          {content}
        </p>
        <div className="flex items-center justify-start gap-2">
          <Stars rating={[rating] || [0]} />
        </div>
      </div>
    </div>
  )
}
