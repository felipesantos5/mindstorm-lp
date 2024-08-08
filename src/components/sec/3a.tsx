import { CardPoroducts } from '../card/products'

export const Sec3a = () => {
  return (
    <section className='bg-backgroundLight pt-64 lg:pt-32'>
      <div className='max-w-4xl m-auto lg:px-4'>
        <div className='grid grid-cols-3 gap-24 lg:grid-cols-2 xmd:grid-cols-1 lg:gap-16'>
          <div className="">
            <h2 className="mb-7 text-5xl font-bold">Conheça nossos produtos:</h2>
            <p className="">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.</p>
          </div>
          <CardPoroducts title={"No-nonsense output"} paragraph={"By actually generating code that’s relevant to your requirements, there’s no AI hallucinations or nonsense predictions."} />
          <CardPoroducts title={"No-nonsense output"} paragraph={"By actually generating code that’s relevant to your requirements, there’s no AI hallucinations or nonsense predictions."} />
          <CardPoroducts title={"No-nonsense output"} paragraph={"By actually generating code that’s relevant to your requirements, there’s no AI hallucinations or nonsense predictions."} />
          <CardPoroducts title={"No-nonsense output"} paragraph={"By actually generating code that’s relevant to your requirements, there’s no AI hallucinations or nonsense predictions."} />
          <CardPoroducts title={"No-nonsense output"} paragraph={"By actually generating code that’s relevant to your requirements, there’s no AI hallucinations or nonsense predictions."} />
        </div>
      </div>
    </section>
  )
}