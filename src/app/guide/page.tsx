'use client';

export default function Guide() {
  return (
    <div className="flex flex-col space-y-4 text-white">
      <div className="py-20 gap-8 grid container mx-auto bg-cultiva-black rounded-lg place-content-center justify-items-center ">
        <div className="flex items-center text-5xl font-extrabold">
          Bem-vindo(a) à
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-red-500">
            &nbsp;Wiki
          </span>
        </div>
      </div>
      <section className="py-20 flex container mx-auto bg-cultiva-black rounded-lg justify-start font-semibold">
      <p className="text-lime-400">Introdução</p>
      <p className="text-white text-2xl	">FaQ/ QnA</p>
      </section>
    </div>
  );
}