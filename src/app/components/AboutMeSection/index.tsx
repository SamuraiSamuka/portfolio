/* eslint-disable @next/next/no-img-element */
import Section from "../Section";

export default function AboutMeSection() {
  return (
    <>
      <Section title="Sobre mim" id="sobremim">
        <div className="mb-4 mt-[2svh] flex h-[77svh] flex-col items-center py-4 sm:h-[55vh] sm:p-0 lg:grid lg:grid-cols-2 lg:gap-28">
          {/* <div>
            <h3 className=" mb-6 text-xl">
              "I'm writing my story so that others <br /> might see fragments of
              themselves."
            </h3>
          </div> */}
          <img
            src="foto.jpg"
            alt=""
            className="hidden rounded-2xl sm:block sm:max-h-[60%] lg:max-h-[55vh]"
          />
          <div className="flex h-full flex-col gap-2 overflow-y-auto pl-2 sm:max-h-[55svh]">
            <h3 className="text-xl">MINHA HISTÓRIA</h3>
            <p className=" font-['outfit mono'] text-base leading-snug text-cinza-400">
              Olá, meu nome é Samuel e tenho 26 anos. Estudo programação há cerca de 4 anos e venho
              trilhando um caminho determinado em direção a essa área. Desde cedo, sempre gostei de
              resolver problemas de lógica e matemática, o que me levou a gostar mais ainda da área.
              Ao ingressar nesse campo, mergulhei de cabeça em cursos, tutoriais e projetos
              pessoais, buscando constantemente expandir meu conhecimento e habilidades.
            </p>
            <p className=" font-['outfit mono'] text-base leading-snug text-cinza-400">
              Paralelamente, encontrei oportunidades em projetos voluntários, onde pude aplicar
              minhas competências técnicas para causas significativas, solidificando minha paixão
              por criar soluções que impactam positivamente a vida das pessoas. Agora, com uma base
              sólida em programação e um compromisso inabalável com a entrega de valor para meus
              clientes, estou pronto para enfrentar novos desafios e continuar crescendo
              profissionalmente na área de TI.
            </p>
          </div>
        </div>
        <div className="hidden h-[20svh] items-center justify-center sm:flex">
          <h2 className="flex flex-col items-center">
            <q className="text-center text-2xl">
              {"Code is like humor. When you have"} <br /> {"to explain it, it's bad."}
            </q>
            <p className=" mt-2 text-cinza-600">{`- </Cory House>`}</p>
          </h2>
        </div>
      </Section>
    </>
  );
}
