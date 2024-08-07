import cardProdutosImg from "../../assets/card-products.svg"

interface CardPoroductsProps {
  title: string
  paragraph: string
}

export const CardPoroducts = (props: CardPoroductsProps) => {
  return (
    <div className="flex flex-col">
      <img src={cardProdutosImg} alt="cartão" className="mb-10 -translate-x-6" />
      <h3 className="pb-1 text-textSecundary">{props.title}</h3>
      <p className="pb-3 text-subText">{props.paragraph}</p>
      <button className="py-3 bg-background text-white w-44 rounded-xl">Saber mais</button>
    </div>
  )
}