export default function Introduction() {
  return (
    <div className="flex flex-col space-y-4 text-white my-2 mx-2">
      <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
        <div className="flex items-center text-5xl font-extrabold">
          Bem-vindo(a) à
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500">
            &nbsp;Wiki
          </span>
        </div>
      </div>
      <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
        <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
        <p className="text-white mx-8 text-4xl	">FaQ/ QnA</p>
      </section>
      <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
        <p className="text-white mx-8 font-normal	">
          Bem-vindo à nossa página de Perguntas Frequentes! Aqui no Cultiva,
          valorizamos a transparência e estamos aqui para esclarecer qualquer
          dúvida que você possa ter sobre nossa plataforma de produtos
          sustentáveis. Se sua pergunta não estiver respondida aqui, sinta-se à
          vontade para nos contatar diretamente.
        </p>
      </section>

      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          1. O que torna os produtos do Cultiva sustentáveis?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Nosso compromisso com a sustentabilidade se reflete na cuidadosa
          seleção de produtos que seguem práticas ecológicas. Trabalhamos com
          marcas comprometidas com materiais sustentáveis, produção ética e
          redução do impacto ambiental.
        </p>
      </section>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          2. Como faço para devolver um produto?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Se por algum motivo você não estiver satisfeito com sua compra,
          consulte nossa política de devolução em nossa página de "Políticas"
          para obter informações detalhadas sobre como iniciar o processo de
          devolução.
        </p>
      </section>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          3. Qual é o impacto ambiental do envio dos produtos?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Estamos comprometidos em minimizar nosso impacto ambiental. Utilizamos
          embalagens sustentáveis sempre que possível e buscamos constantemente
          opções de transporte mais eco-friendly. Saiba mais sobre nossas
          práticas de envio em nossa seção de "Sustentabilidade".
        </p>
      </section>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          4. Como faço para rastrear meu pedido?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Assim que seu pedido for despachado, você receberá um e-mail de
          confirmação com as informações de rastreamento. Basta clicar no link
          fornecido para acompanhar o status da entrega em tempo real.
        </p>
      </section>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          5. Vocês oferecem opções de pagamento seguro?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Sim, priorizamos a segurança em todas as transações. Aceitamos uma
          variedade de métodos de pagamento seguros para garantir uma
          experiência tranquila e protegida para nossos clientes.
        </p>
      </section>
      <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
        <p className="text-cultiva-color mx-8 text-xl">
          6. Como posso entrar em contato com o suporte ao cliente?
        </p>
        <p className="text-white mx-8 text-2xl font-normal  	">
          Ficamos felizes em ajudar! Visite nossa página de "Contato" para obter
          informações sobre como nos enviar uma mensagem. Nossa equipe de
          suporte está pronta para responder a todas as suas perguntas.
        </p>
      </section>
    </div>
  )
}
