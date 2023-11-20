'use client'

export default function BelezaConsciente() {
    return (
      <div className="flex flex-col space-y-4 text-white my-2 mx-2">
        <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
          <div className="flex items-center text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
              Beleza Consciente
            </span>
          </div>
        </div>
        <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
          <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
            Mime-se com produtos de beleza que são gentis tanto com você quanto
            com o planeta. Descubra uma gama de opções que não comprometem sua
            rotina de autocuidado, mas sim aprimoram sua beleza de maneira
            consciente. Na Cultiva, a beleza é sinônimo de responsabilidade
            ambiental.
          </p>
        </section>
  
        <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
          <p className="text-white mx-8 font-normal	">
            Desbrave um universo de beleza que transcende a mera estética em nossa
            ampla e cuidadosamente selecionada gama de produtos de beleza
            consciente no Cultiva. Cada item, meticulosamente escolhido,
            destaca-se não apenas por sua qualidade excepcional, mas também pelo
            impacto mínimo que exerce no meio ambiente. Acreditamos, com certeza,
            que a verdadeira beleza se manifesta quando cuidamos de nós mesmos e
            do planeta de forma simultânea, e toda a nossa coleção é um reflexo
            tangível dessa filosofia intrínseca.
          </p>
          <br />
          <p className="text-white mx-8 font-normal	">
            Ao explorar nossa variedade expandida de produtos, você se depara com
            uma experiência que vai além do superficial, mergulhando nas
            profundezas de uma beleza que é sustentável e consciente. Cada item
            não é apenas uma expressão de conforto e qualidade, mas também uma
            escolha deliberada em prol de um impacto ambiental limitado.
          </p>{" "}
          <br />
          <p className="text-white mx-8 font-normal	">
            Em nossa jornada rumo à beleza consciente, reafirmamos a crença de que
            o ato de cuidar de si mesmo deve ser alinhado com o cuidado pelo nosso
            precioso planeta. Nossa coleção não é apenas uma oferta de produtos; é
            um convite para participar de um movimento que celebra a beleza em sua
            forma mais sincera e responsável. Portanto, descubra a beleza que não
            apenas realça sua aparência, mas também nutre a conexão profunda entre
            seu bem-estar pessoal e o equilíbrio de nosso ecossistema.
          </p>
        </section>
      </div>
    );
  }
  