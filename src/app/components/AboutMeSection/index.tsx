/* eslint-disable @next/next/no-img-element */
import Section from "../Section";

export default function AboutMeSection() {
  return (
    <>
      <Section title="Sobre mim" id="sobremim">
        <div className="mb-4 mt-[2svh] flex h-[77svh] flex-col justify-evenly  py-4 ">
          <div className=" flex max-h-[65%] flex-col items-center sm:p-0 md:grid md:max-h-full md:grid-cols-[40%_55%] md:gap-[5%]">
            <img src="foto.jpg" alt="" className="hidden rounded-2xl md:block lg:max-h-[55vh]" />
            <div className="flex h-fit flex-col gap-3 overflow-y-auto pl-2 sm:max-h-[55svh]">
              <h3 className="text-xl">MINHA HISTÓRIA</h3>
              <p className=" font-['outfit mono'] text-base leading-snug text-cinza-400">
                Olá, meu nome é Samuel e tenho 26 anos. Estudo programação já há um bom tempo e
                venho buscando migrar para a área de TI. Fiz faculdade de análise e desenvolvimento
                de software pela FAEL e venho estudando em plataformas de cursos online como Alura e
                rocketseat. Pratico bastante construindo vários projetos front-end e as vezes
                back-end também.
              </p>
              <p className=" font-['outfit mono'] text-base leading-snug text-cinza-400">
                Paralelamente, encontrei a oportunidade de iniciar um pequeno projeto voluntário
                chamado care4you, onde eu e mais uma equipe de vários voluntários desenvolvemos uma
                aplicação que busca facilitar busca e marcação de consultas para pacientes, e
                gerenciamento de dados para clínicas e médicos.
              </p>
              <p className=" font-['outfit mono'] text-base leading-snug text-cinza-400">
                Agora, estou em busca de enfrentar novos desafios e continuar crescendo
                profissionalmente na área de TI, com o compromisso de entregar valor para meus
                clientes.
              </p>
            </div>
          </div>
          <div className=" flex h-[20svh] max-h-[30%] items-center justify-center overflow-auto md:max-h-full">
            <h2 className="flex flex-col items-center">
              <q className="text-center text-xl">
                {"Qualquer um pode escrever um código que o computador entenda."} <br />
                {"Bons programadores escrevem códigos que os humanos entendam."}
              </q>
              <p className=" mt-2 text-cinza-600">{`- </Martin Fowler>`}</p>
            </h2>
          </div>
        </div>
      </Section>
    </>
  );
}
