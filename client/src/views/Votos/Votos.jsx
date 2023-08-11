import { Link } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";
import SectionComponent from "../../components/layout/SectionComponent";

const Votos = () => {
  return (
    <main>
      <HeaderComponent />

      <SectionComponent sectionBg="bg-votosBlack" haveHeader={true}>
        <h1 className="text-7xl text-white text-center">Conheça a <br className="hidden min-[370px]:block"/> Votos</h1>

        <span className="text-lg text-white text-center">Realizando sonhos</span>
      </SectionComponent>

      <SectionComponent sectionBg="bg-white" haveHeader={false}>
        <div className="w-full flex flex-col gap-8 py-8">
          <div className="w-full flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full flex flex-col gap-8 max-w-2xl">
              <h2 className="text-5xl text-votosRed">
                Nossa <br /> Atuação
              </h2>

              <p className="text-lg text-votosBlack max-w-md">
                Seja um casamento dos sonhos ou um aniversário emocionante,
                estamos aqui para transformar suas celebrações em experiências
                únicas e inesquecíveis.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 self-center w-full max-w-[288px] lg:max-w-[400px]">
              <div className="h-[180px] aspect-[12/16] bg-black lg:h-[250px] self-end"></div>

              <div className="h-[180px] aspect-[12/16] bg-black lg:h-[250px] self-start mt-[-60px]"></div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 md:mt-8 md:flex-row md:items-center md:justify-evenly">
            <div className="rounded-3xl w-full max-w-[200px] lg:max-w-[300px] aspect-square bg-black self-center"></div>

            <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
              <h3 className="text-4xl text-votosRed">Casamentos</h3>

              <p className="text-lg text-votosBlack">
                Get to chat with hundreds of wedding vendors.
              </p>

              <Link
                to="/casamentos"
                className="rounded-2xl shadow-md bg-votosRed self-center text-white text-lg w-full max-w-[200px] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500"
              >
                Ver mais
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
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 md:mt-8 md:flex-row md:items-center md:justify-evenly">
            <div className="rounded-3xl w-full max-w-[200px] lg:max-w-[300px] aspect-square bg-black self-center md:order-2"></div>

            <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
              <h3 className="text-4xl text-votosRed">Aniversários</h3>

              <p className="text-lg text-votosBlack">
                Know whats in and out from industry insiders.
              </p>

              <Link
                to="/casamentos"
                className="rounded-2xl shadow-md bg-votosRed self-center text-white text-lg w-full max-w-[200px] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500"
              >
                Ver mais
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
              </Link>
            </div>
          </div>
        </div>
      </SectionComponent>
    </main>
  );
};

export default Votos;
