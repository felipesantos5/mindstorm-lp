interface CardPoroductsProps {
  title: string
  paragraph: string
  image: string
}

export const CardPoroducts = (props: CardPoroductsProps) => {
  return (
    <div className="flex flex-col items-baseline">
      <img src={props.image} alt="cartão" className="mb-10 -translate-x-6 w-full" />
      <h3 className="pb-1 text-textSecundary">{props.title}</h3>
      <p className="pb-3 text-subText">{props.paragraph}</p>
      <button className="py-3 bg-background text-white w-32 rounded-xl">Saiba mais</button>
    </div>
  )
}