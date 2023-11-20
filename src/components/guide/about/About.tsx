export default function About() {
	return (
		<div className="flex flex-col space-y-4 text-white my-2 mx-2">
			<div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
				<div className="flex items-center text-5xl font-extrabold">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500 ">
						Sobre Nós
					</span>
				</div>
			</div>
			<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
				<p className="text-cultiva-color mx-8 text-xl">Cultivando um Futuro Sustentável</p>
				<p className="text-white mx-8 text-2xl font-normal  	">
					Seja bem-vindo à história por trás do Cultiva, seu destino para produtos sustentáveis e um estilo de vida eco-friendly. Aqui no Cultiva, acreditamos que as escolhas do consumidor têm o poder de moldar um futuro mais sustentável para o nosso planeta.
				</p>
			</section>

			<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
          <p className="text-cultiva-color mx-8 text-xl">Nossa Missão</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
						No Cultiva, nossa missão é proporcionar uma experiência de compra que vá além do consumo consciente. Queremos inspirar uma mudança positiva, promovendo a conscientização sobre práticas sustentáveis e incentivando a escolha de produtos que respeitem o meio ambiente.
          </p>
        </section>
				<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
          <p className="text-cultiva-color mx-8 text-xl">Compromisso com a Sustentabilidade</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
						Nosso compromisso com a sustentabilidade está no cerne de tudo o que fazemos. Trabalhamos em estreita colaboração com marcas que compartilham nossa visão, escolhendo produtos que utilizam materiais eco-friendly, práticas de produção éticas e embalagens sustentáveis. Estamos constantemente inovando para reduzir nosso próprio impacto ambiental e promover uma cadeia de suprimentos mais responsável.
          </p>
        </section>
				<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
          <p className="text-cultiva-color mx-8 text-xl">Comunidade Cultiva</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
						Somos mais do que uma loja, somos uma comunidade de indivíduos comprometidos com um estilo de vida sustentável. Participe de conversas, compartilhe suas descobertas e inspire-se na jornada coletiva em direção a um mundo mais verde em nossas redes sociais.
          </p>
        </section>
				<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
          <p className="text-cultiva-color mx-8 text-xl">Transparência e Compromisso</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
						Acreditamos na transparência em todas as etapas. Queremos que você saiba de onde vêm seus produtos, como são feitos e o impacto que têm. Estamos comprometidos em fornecer informações claras e honestas para que você possa fazer escolhas informadas.
          </p>
        </section>
				<section className="py-20 flex flex-col container gap-1 bg-cultiva-black rounded-lg justify-start font-bold mx-auto">
          <p className="text-cultiva-color mx-8 text-xl">Agradecimento</p>
          <p className="text-white mx-8 text-2xl font-normal  	">
						Agradecemos por escolher o Cultiva e por se juntar a nós na missão de cultivar um futuro sustentável. Cada compra é um passo em direção a um mundo onde a moda e o consumo são sinônimos de responsabilidade e respeito pela natureza.
          </p>
					<p className="text-white mx-8 text-2xl font-normal mt-2">
						Juntos, estamos cultivando um futuro melhor para as gerações futuras. Obrigado por fazer parte dessa jornada conosco.
          </p>
        </section>
		</div>
	);
}