import { MdCancel } from 'react-icons/md'

const ImageDisplay = ({
  data,
  close,
}: {
  data: string
  close: (fileNumber: number) => void
}) => {
  return (
    <div className="w-full h-auto bg-cover hover:opacity-80 relative">
      <button onClick={() => close(0)} className="absolute top-2 right-2">
        <MdCancel className="w-6 h-6 z-30" />
      </button>
      <img src={data} alt="" className="bg-cover h-full w-full rounded-2xl" />
    </div>
  )
}

export function CreateProductPreviewImages({
  data,
  handleClose,
}: {
  data: string[]
  handleClose: (fileNumber: number) => void
}) {
  return (
    <div className="h-full flex flex-col justify-between items-center gap-3">
      {data.map((image, index) => (
        <ImageDisplay
          key={index}
          data={image}
          close={() => handleClose(index)}
        />
      ))}
    </div>
  )
}
