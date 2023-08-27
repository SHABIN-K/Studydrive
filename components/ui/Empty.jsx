import Image from "next/image"

export const Empty = ({ label }) => {
  return (
    <div className="p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" fill alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  )
}