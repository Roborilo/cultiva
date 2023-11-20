'use client'

export default function ComunidadeCultiva() {
  return (
    <div className="flex flex-col space-y-4 text-white my-2 mx-2">
      <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
        <div className="flex items-center text-5xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
            Comunidade Cultiva
          </span>
        </div>
      </div>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
        <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Conecte-se com outros entusiastas da sustentabilidade na Comunidade
          Cultiva. Compartilhe experiências, troque dicas valiosas e participe
          de eventos que promovem um estilo de vida consciente. Juntos, estamos
          cultivando não apenas um ambiente online, mas um movimento para um
          mundo mais verde e estiloso. Faça parte desta comunidade que
          compartilha a visão de um futuro mais sustentável.
        </p>
      </section>

      <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
        <p className="text-white mx-8 font-normal	">
          Dê as boas-vindas a um convite para se juntar à vibrante e crescente
          comunidade Cultiva, um espaço onde indivíduos apaixonados e dedicados
          à sustentabilidade se conectam, compartilham ideias inovadoras e,
          acima de tudo, inspiram uns aos outros. Torne-se parte integrante de
          um movimento global que não apenas acredita no poder das escolhas
          cotidianas, mas que atua ativamente para moldar um futuro mais verde,
          estiloso e sustentável para todos. Nossa comunidade é um ecossistema
          dinâmico, e a sua voz é uma peça vital desse coro que ressoa a urgente
          necessidade de cultivar, coletivamente, um mundo melhor para todos
          nós.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Ao se integrar a essa comunidade em expansão, você não apenas se
          conecta a indivíduos alinhados com seus valores, mas também se torna
          um agente ativo na construção de uma rede de apoio sustentável. Nossa
          comunidade é um espaço para troca de ideias, aprendizado mútuo e
          celebração das conquistas individuais e coletivas em prol da
          sustentabilidade.
        </p>
        <br />
        <p className="text-white mx-8 font-normal	">
          Entenda que, ao aderir à Comunidade Cultiva, você está se
          comprometendo não apenas com uma causa, mas com um estilo de vida. Sua
          presença contribui para a vitalidade dessa rede que se estende
          globalmente, influenciando positivamente as escolhas e as ações de
          cada membro. Juntos, somos parte de uma sinfonia de mudanças, onde
          cada voz desempenha um papel fundamental na criação de um futuro mais
          sustentável, estiloso e colaborativo para todos nós.
        </p>
      </section>
    </div>
  )
}
