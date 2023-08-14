import SectionComponent from "./components/layout/SectionComponent";
import LinkComponent from "./components/LinkComponent";

function App() {
  return (
    <main>
      <SectionComponent sectionBg="bg-votosRed" haveHeader={true}>
        <div
          className="
<<<<<<< HEAD
          border-4 border-white rounded-[3rem] md:rounded-[5rem] w-full px-8 py-12 2xl:py-28
=======
          border-2 border-white rounded-[3rem] w-full px-8 py-12 md:py-24
>>>>>>> ffc2f5e (Votos Info Services created)
          flex flex-col gap-8 items-center md:flex-row
          md:justify-evenly
        "
        >
          <div className="text-white text-center flex flex-col gap-4 md:text-start">
            <h1 className="text-5xl sm:text-6xl xl:text-9xl">
              Votos <br /> Cerimonial
            </h1>

<<<<<<< HEAD
            <span className="text-lg">
              Nós transformamos sonhos em <br className="hidden md:block" />
              realidade
=======
            <span className="text-lg mt-4">
              Brilho no <br className="hidden md:block" />
              olhar de nossos clientes
>>>>>>> ffc2f5e (Votos Info Services created)
            </span>
          </div>

          <img
            src="public/media/VotosLogoWhite.webp"
            alt="Votos Logo"
            width={150}
            height={150}
          />
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-white" haveHeader={false}>
        <div className="w-full flex flex-col gap-8 py-8">
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="w-full flex flex-col gap-8 max-w-2xl">
              <h2 className="text-5xl text-votosRed">Quem somos?</h2>

              <p className="text-lg text-votosBlack">
                São pessoas que se conhecem há muitos anos, que tem um vínculo de amizade e de carinho, criando uma relação positiva para o seu casamento. Nós queremos fazer um VOTO a você, de que faremos tudo com todo carinho e com todo amor.              </p>
            </div>

            <div>
              <img
                src="public/media/home1.webp"
                alt="Franciane Moura"
                width={250}
                height={250}
                className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square self-center overflow-hidden object-cover"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <img
                src="public/media/home1.webp"
                alt="Franciane Moura"
                width={250}
                height={250}
                className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square self-center overflow-hidden object-cover"
              />
            </div>

            <div className="flex flex-col gap-8 w-full max-w-2xl">
<<<<<<< HEAD
              <p className="text-lg text-votosBlack text-end">
                Sempre antenadas com as tendências do mercado, trabalhamos com
                oque amamos e nossa maior realização é ver a alegria e o brilho
                no olhar de nossos clientes e de seus convidados, pois
                acreditamos que é só com amor e dedicação que alcançamos a
                perfeição.
              </p>

              <div className="w-full flex justify-end">
                <LinkComponent title="Casamentos" href="/casamentos" />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="w-full flex flex-col gap-8 max-w-2xl">
              <h2 className="text-5xl text-votosRed">Nossa equipe</h2>

              <p className="text-lg text-votosBlack">
                Conheça um pouco dos nossos trabalhos realizados
              </p>

              <LinkComponent title="Eventos" href="/casamentos" />
            </div>

            <div>
              <img
                src="public/media/equipe.webp"
                alt="Equipe Votos"
                width={250}
                height={250}
                className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square self-center overflow-hidden object-cover"
              />
=======
              <p className="text-lg text-votosBlack">
                O casamento é um dos momentos mais especiais na vida de um casal. É um dia repleto de emoções, expectativas e alegrias, marcando o início de uma jornada compartilhada rumo ao futuro.

              </p>

              <LinkComponent title="Casamentos" href="/casamentos" />
>>>>>>> ffc2f5e (Votos Info Services created)
            </div>
          </div>
        </div>
      </SectionComponent>
    </main>
  );
}

export default App;
