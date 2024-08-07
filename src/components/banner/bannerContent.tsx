import { ReactNode } from "react"

interface BannerContentProps {
  title: string
  text: string
  icon?: ReactNode
}

export const BannerContent = (props: BannerContentProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-[460px]">
      {props.icon}
      <h3 className="font-bold text-xl text-textSecundary">{props.title}</h3>
      <p className="text-subText">{props.text}</p>
    </div>
  )
}