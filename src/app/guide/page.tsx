export default function Guide() {
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
      {/* Aqui tem que colocar o chatGPT meter umas perguntas e umas respostas mesmo, até faria mas to sem acesso a minha conta :)
      e também tem que fazer o sobre nós/ história */}
      </section>
    </div>
  )
}

