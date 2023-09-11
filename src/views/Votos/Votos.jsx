import SectionComponent from "../../components/layout/SectionComponent";
import VotosTemplate1 from "./VotosTemplate1";
import VotosTemplate2 from "./VotosTemplate2";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Votos = () => {
  return (
    <main>
      <SectionComponent
        sectionBg="bg-votosBlack bg-[url('/media/image3.webp')] bg-center bg-cover"
        haveHeader={true}
      >
        <h1 className="text-5xl md:text-7xl text-white text-center">
          Conheça a <br className="hidden min-[370px]:block" /> Votos
        </h1>

        <span className="text-lg text-white text-center">
          Realizando sonhos
        </span>
      </SectionComponent>

      <SectionComponent sectionBg="bg-white" haveHeader={false}>
        <div className="w-full flex flex-col gap-8 py-8">
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
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
              <div className="h-[180px] aspect-[12/16] bg-black lg:h-[250px] self-end">
                <LazyLoadImage
                  src="/media/florMesa.webp"
                  loading="lazy"
                  alt="Cartas"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="h-[180px] aspect-[12/16] lg:h-[250px] self-start mt-[-60px]">
              <LazyLoadImage
                  src="/media/image4.webp"
                  loading="lazy"
                  alt="Flores"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* <div className="w-full flex flex-col mt-14 lg:flex-row lg:justify-between gap-8">
            <div className="w-full flex flex-col gap-4 md:w-fit">
              <h3 className="text-4xl text-votosRed">
                Próximos <br className="sm:hidden" /> eventos
              </h3>

              <LinkComponent title="Agende Conosco" href="/contato" />
            </div>

            <div className="w-full max-w-md flex flex-col gap-4 self-center">
              map aqui para cada item
              <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full max-w-[150px] aspect-square bg-black"></div>

                <div className="flex flex-col gap-4 items-center justify-center max-w-xs">
                  <h4 className="text-xl text-votosBlack text-center">
                    BAKS Bridal Show
                  </h4>

                  <span className="text-votosBlack text-center">
                    An Annual National Industry Event January 10, 2025, 9:00
                    a.m. to 5:00 p.m. Conference Hall A, National Event Hall
                  </span>
                </div>
              </div>
              map aqui para cada item
            </div>
          </div> */}
        </div>
      </SectionComponent>
      <VotosTemplate1/>
      <VotosTemplate2/>
    </main>
  );
};

export default Votos;
