'use client'

export default function Horta() {
    return (
      <div className="flex flex-col space-y-4 text-white my-2 mx-2">
        <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
          <div className="flex items-center text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
              Horta
            </span>
          </div>
        </div>
        <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
          <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
            Desbrave o mundo da jardinagem sustentável conosco. Da escolha das
            sementes à colheita, oferecemos recursos e produtos para criar sua
            própria horta ecoconsciente. Semeie não apenas plantas, mas um
            compromisso duradouro com a preservação do planeta.
          </p>
        </section>
  
        <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
          <p className="text-white mx-8 font-normal	">
            Cultivar sua própria horta é mais do que uma escolha; é uma declaração
            de independência sustentável. No Cultiva, oferecemos recursos e
            produtos para ajudá-lo a criar sua própria horta, seja ela grande ou
            pequena. Cultivamos não apenas alimentos, mas também uma conexão mais
            profunda com a natureza, destacando que a sustentabilidade pode
            prosperar em qualquer espaço, independentemente do seu tamanho.
          </p>
          <br />
          <p className="text-white mx-8 font-normal	">
            Cultivar sua própria horta transcende a mera escolha; é um compromisso
            significativo com uma independência sustentável. Aqui no Cultiva,
            dispomos de uma ampla gama de recursos e produtos projetados para
            auxiliá-lo na criação e manutenção de sua horta pessoal,
            independentemente de sua dimensão. Vai além do cultivo de alimentos,
            abrangendo a nutrição não só do corpo, mas também do espírito, criando
            uma ligação mais profunda e significativa com a natureza. Reforçamos a
            ideia fundamental de que a sustentabilidade pode florescer em qualquer
            espaço, independentemente do seu tamanho, reafirmando nosso
            compromisso com um futuro mais verde e equilibrado.
          </p>
        </section>
      </div>
    );
  }
  