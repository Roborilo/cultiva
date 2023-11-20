'use client'

export default function Vegetables() {
    return (
      <div className="flex flex-col space-y-4 text-white my-2 mx-2">
        <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
          <div className="flex items-center text-5xl font-extrabold leading-tight">
          {/*O leading-tight serve para nao cortar a letra g do vegetais */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
              Vegetais
            </span>
          </div>
        </div>
        <section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold">
          <p className="text-cultiva-color mx-8 text-xl">Introdução</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
            De nossa horta para sua mesa, mergulhe na frescura e sustentabilidade
            de nossos vegetais. Cada verdura é uma contribuição para um ciclo de
            vida que respeita o ambiente. Descubra como uma alimentação saudável
            pode ser uma escolha ecologicamente responsável.
          </p>
        </section>
  
        <section className="py-20 flex flex-col container mx-auto gap-1 bg-cultiva-black rounded-lg justify-start text-2xl">
          <p className="text-white mx-8 font-normal	">
            Embarque em uma jornada gastronômica sustentável com nossos vegetais
            cultivados de forma responsável. No Cultiva, pensamos que escolher
            vegetais deve ser uma experiência que não nutre apenas o corpo, mas
            também o ecossistema. Nossos produtos garantem que sua mesa seja um
            reflexo tangível de suas escolhas conscientes, contribuindo para um
            futuro mais verde e equilibrado.
          </p>
          <br />
          <p className="text-white mx-8 font-normal	">
            Explore uma jornada gastronômica sustentável com nossos vegetais
            cultivados de forma responsável. No Cultiva, pensamos que a escolha de
            vegetais deve ser uma experiência que nutre não apenas o corpo, mas
            também o ecossistema. Garantimos que sua mesa seja um reflexo tangível
            de suas escolhas conscientes, contribuindo assim para um futuro mais
            verde e equilibrado.
          </p>
        </section>
      </div>
    );
  }
  