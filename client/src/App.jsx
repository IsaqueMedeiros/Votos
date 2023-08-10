import HeaderComponent from "./components/HeaderComponent";
import SectionComponent from "./components/layout/sectionComponent";

function App() {
  return (
    <main>
      <HeaderComponent />

      <SectionComponent sectionBg="bg-votosPink" haveHeader={true}>
        <div
          className="
          border-4 border-white rounded-[3rem] md:rounded-[5rem] w-full p-8 md:py-16 
          flex flex-col gap-8 items-center md:flex-row 
          md:justify-evenly
        "
        >
          <div className="text-white text-center flex flex-col gap-4 md:text-start">
            <h1 className="text-5xl">Votos Cerimonial</h1>

            <span className="text-lg">
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
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-evenly">
            <div className="w-full flex flex-col gap-8">
              <h2 className="text-5xl text-votosRed">Quem somos?</h2>

              <p className="text-lg text-votosBlack max-w-xl">
                Sempre antenadas com as tendências do mercado, trabalhamos com
                oque amamos e nossa maior realização é ver a alegria e o brilho
                no olhar de nossos clientes e de seus convidados, pois
                acreditamos que é só com amor e dedicação que alcançamos a
                perfeição.
              </p>
            </div>

            <div className="rounded-full w-full max-w-[300px] aspect-square bg-black self-center"></div>
          </div>

          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="rounded-full w-full max-w-[300px] aspect-square bg-black self-center"></div>

            <div className="flex flex-col gap-8 max-w-xl">
              <p className="text-lg text-votosBlack">
                Sempre antenadas com as tendências do mercado, trabalhamos com
                oque amamos e nossa maior realização é ver a alegria e o brilho
                no olhar de nossos clientes e de seus convidados, pois
                acreditamos que é só com amor e dedicação que alcançamos a
                perfeição.
              </p>

              <button className="rounded-2xl shadow-md bg-votosRed text-white text-lg max-w-[200px] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500">
                Casamentos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="ml-2 group-hover:ml-3 duration-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SectionComponent>
    </main>
  );
}

export default App;
