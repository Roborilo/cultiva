'use client'

export default function ModaSustentavel() {
    return (
      <div className="flex flex-col space-y-4 text-white my-2 mx-2">
        <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
          <div className="flex items-center text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
              Moda Sustentável
            </span>
          </div>
        </div>
        <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
          <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
            Embarque em uma jornada pela moda que transcende temporadas. Descubra
            tendências e peças de vestuário que não apenas definem seu estilo, mas
            também afirmam seu compromisso com a responsabilidade ambiental. Cada
            peça é uma declaração de moda que ecoa sustentabilidade.
          </p>
        </section>
  
        <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
          <p className="text-white mx-8 font-normal	">
            Em meio ao intrigante universo da moda sustentável no Cultiva, onde
            cada peça é escolhida minuciosamente, fundamentada em um compromisso
            inabalável com práticas ecologicamente responsáveis. Da etapa inicial
            de produção até o delicado momento do descarte, cada fase é ponderada
            com extremo cuidado, garantindo que sua expressão pessoal de estilo
            não apenas brilhe, mas também deixe uma pegada suave no meio ambiente.
            Explore um vasto mundo de moda que, de maneira simultânea, é marcado
            por tendências e ética, criando uma simbiose onde o glamour se
            entrelaça de forma sinuosa com a responsabilidade ambiental. Desvende
            um reino de moda que não é apenas esteticamente cativante, mas também
            representa um compromisso singular com a conscientização ambiental,
            proporcionando uma experiência única e ecoconsciente.
          </p>
        </section>
      </div>
    );
  }
  