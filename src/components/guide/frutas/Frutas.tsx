'use client'

export default function Frutas() {
  return (
    <div className="flex flex-col space-y-4 text-white my-2 mx-2">
      <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
        <div className="flex items-center text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500">
            Frutas
          </span>
        </div>
      </div>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
        <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Explore a doçura de escolhas conscientes em nossa seção de frutas.
          Cada fruto não é apenas uma delícia para o paladar, mas uma colheita
          cuidadosa de práticas agrícolas sustentáveis. Descubra como cada
          mordida pode ser um ato de apoio à natureza.
        </p>
      </section>

      <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
        <p className="text-white mx-8 font-normal	">
          Explore a frescura e a vitalidade em nossa ampla seleção de frutas
          sustentáveis ​​no Cultiva. Cada opção é cultivada com cuidado e
          respeito pelo meio ambiente, fornecendo não apenas uma delícia para o
          paladar, mas também a garantia de que sua escolha contribui para
          práticas agrícolas responsáveis.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Descubra a alegria de saborear frutas que nutrem não só você, mas
          também o planeta que todos compartilhamos.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Descubra a frescura e a vitalidade em nossa extensa seleção de frutas
          sustentáveis no Cultiva. Cada opção é cultivada com cuidado e respeito
          pelo meio ambiente, garantindo não apenas uma experiência deliciosa
          para o paladar, mas também a certeza de que sua escolha apoia práticas
          agrícolas responsáveis.
        </p>
        <br />
        <p className="text-white mx-8 font-normal">
          Aproveite a alegria de saborear frutas que nutrem não só você, mas
          também são importantes para a saúde do planeta que todos
          compartilhamos.
        </p>
      </section>
    </div>
  )
}
