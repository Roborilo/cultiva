'use client'

export default function Cultura() {
  return (
    <div className="flex flex-col space-y-4 text-white my-2 mx-2">
      <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
        <div className="flex items-center text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500">
            Cultura
          </span>
        </div>
      </div>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
        <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Adentre a cultura Cultiva, onde a moda encontra sua expressão mais
          significativa. Nossa seleção eco-friendly não apenas segue tendências,
          mas define uma cultura de responsabilidade ambiental. Seja parte de
          uma comunidade que valoriza não apenas o estilo, mas também os valores
          que moldam um futuro sustentável.
        </p>
      </section>

      <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
        <p className="text-white mx-8 font-normal	">
          A cultura do Cultiva é enraizada na paixão por um mundo mais verde e
          estiloso. Buscamos não apenas inspirar, mas também moldar uma mudança
          cultural em direção à sustentabilidade, promovendo produtos que não
          atendem apenas aos padrões ambientais, mas também refletem uma
          estética consciente.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Cultivar uma cultura que valorize a responsabilidade ambiental é o
          cerne do que fazemos, e convidamos você não apenas a adesão, mas a se
          tornar protagonista nessa jornada. Em nosso universo, a paixão por um
          planeta mais verde e uma estética consciente permeia tudo.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Não nos contentamos apenas em inspirar; estamos empenhados em uma
          mudança cultural em direção à sustentabilidade. Os produtos que
          oferecemos não atendem apenas aos rigorosos padrões ambientais, mas
          também refletem um estilo consciente. cultivar
        </p>
        <br />
        <p className="text-white mx-8 font-normal">
          O cerne de nossa missão é uma cultura que valoriza a responsabilidade
          ambiental. Não apenas convidamos você a aderir, mas também a se tornar
          o protagonista dessa jornada transformadora em direção a um mundo mais
          equilibrado e estiloso.
        </p>
      </section>
    </div>
  )
}
