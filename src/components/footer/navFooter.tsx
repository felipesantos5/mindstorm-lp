interface NavFooterProps {
  title: string
  items: string[]
  href?: string
}

export const NavFooter = (props: NavFooterProps) => {
  return (
    <ul className="flex flex-col gap gap-4">
      <h3 className="text-[#98A2B3] font-semibold text-sm">{props.title}</h3>
      <ul className="flex flex-col gap-3">
        {props.items.map((item, index) => (
          <li key={index}><a className="text-[#EAECF0] cursor-pointer hover:text-[#bdbec2]" href={props.href}>{item}</a></li>
        ))}
      </ul>
    </ul>
  )
}