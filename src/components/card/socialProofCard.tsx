interface SocialProofCardProps {
  name: string
  profession: string
  profileImg: string
  mensage: string
}

export const SocialProofCard = (props: SocialProofCardProps) => {
  return (
    <section className="max-w-[340px] bg-[#F3F3F3] border text-black p-8 border-[#E3E3E3] rounded-2xl flex flex-col gap-6">
      <div className="flex gap-4">
        <img src={props.profileImg} alt="imagem de perfil" className="rounded-full w-12 h-12" />
        <div className="flex flex-col gap-1">
          <h3 className="text-textSecundary">{props.name}</h3>
          <h4 className="text-sm text-[#293041]">{props.profession}</h4>
        </div>
      </div>
      <p className="text-[#293041] font-sans">{props.mensage}</p>
    </section>
  )
}
