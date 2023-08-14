import SectionComponent from "./components/layout/SectionComponent";
import LinkComponent from "./components/LinkComponent";
function App() {
  return (
    <main>
      <SectionComponent sectionBg="bg-votosRed" haveHeader={true}>
        <div
          className="
          border-4 border-white rounded-[3rem] md:rounded-[5rem] w-full px-8 py-12 md:py-44
          flex flex-col gap-8 items-center md:flex-row
          md:justify-evenly
        "
        >
          <div className="text-white text-center flex flex-col gap-4 md:text-start">
            <h1 className="text-6xl xl:text-9xl">Votos <br /> Cerimonial</h1>

            <span className="text-lg mt-4">
              Nós transformamos sonhos em <br className="hidden md:block" />
              realidade
            </span>
          </div>

          <img
            src="public/media/VotosLogoWhite.webp"
            alt="teste"
            width={100}
            height={100}
          />
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-white" haveHeader={false}>
        <div className="w-full flex flex-col gap-8 py-8">
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="w-full flex flex-col gap-8 max-w-2xl">
              <h2 className="text-5xl text-votosRed">Quem somos?</h2>

              <p className="text-lg text-votosBlack">
                Sempre antenadas com as tendências do mercado, trabalhamos com
                oque amamos e nossa maior realização é ver a alegria e o brilho
                no olhar de nossos clientes e de seus convidados, pois
                acreditamos que é só com amor e dedicação que alcançamos a
                perfeição.
              </p>
            </div>

            <div className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square bg-black self-center"></div>
          </div>

          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square bg-black self-center"></div>

            <div className="flex flex-col gap-8 w-full max-w-2xl">
              <p className="text-lg text-votosBlack">
                Sempre antenadas com as tendências do mercado, trabalhamos com
                oque amamos e nossa maior realização é ver a alegria e o brilho
                no olhar de nossos clientes e de seus convidados, pois
                acreditamos que é só com amor e dedicação que alcançamos a
                perfeição.
              </p>

              <LinkComponent title="Casamentos" href="/casamentos"/>
            </div>
          </div>
        </div>
      </SectionComponent>
    </main>
  );
}

export default App;
