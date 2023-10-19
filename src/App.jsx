import SectionComponent from "./components/layout/SectionComponent";
import LinkComponent from "./components/LinkComponent";
import CarouselReview from './components/Carousel/CarouselReview/CarouselReview'

import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  return (
    <main>
      <SectionComponent sectionBg="bg-votosRed" haveHeader={true}>
        <div
          className="
          border-2 border-white rounded-[3rem] w-full px-8 py-12 md:py-24
          flex flex-col gap-8 items-center md:flex-row
          md:justify-evenly
        "
        >
          <div className="text-white text-center flex flex-col gap-4 md:text-start">
            <h1 className="text-5xl sm:text-6xl xl:text-9xl">
              Votos <br /> Cerimonial
            </h1>

            <span className="text-lg mt-4">
              Brilho no
              olhar de nossos clientes
            </span>
          </div>

          <LazyLoadImage
            src="/media/VotosLogoWhite.webp"
            loading="lazy"
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
              O nome Votos significa ter compromisso, você fazer um voto alguém que você vai cumprir, um voto que fazemos conosco e com as nossas noivas. Cumprir aquilo que prometeu é ir além, fazer o seu melhor, dar o seu máximo. Essa é a proposta da Votos Cerimonial.             </p>
            </div>

            <div>
              <LazyLoadImage
                src="/media/home1.webp"
                loading="lazy"
                alt="Franciane Moura"
                width={250}
                height={250}
                className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square self-center overflow-hidden object-cover"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <LazyLoadImage
                src="/media/home2.webp"
                loading="lazy"
                alt="Casamento"
                width={250}
                height={250}
                className="rounded-full w-full max-w-[250px] 2xl:max-w-[350px] aspect-square self-center overflow-hidden object-cover"
              />
            </div>

            <div className="flex flex-col gap-8 w-full max-w-2xl">
              <p className="text-lg text-votosBlack">
                O casamento é um dos momentos mais especiais na vida de um casal. É um dia repleto de emoções, expectativas e alegrias, marcando o início de uma jornada compartilhada rumo ao futuro.

              </p>

              <LinkComponent title="Casamentos" href="/casamentos" />
            </div>
          </div>
        </div>
      </SectionComponent>

      <SectionComponent sectionBg="bg-white" haveHeader={false}>
        <div className="w-full flex flex-col gap-8 py-8">
          <div className="w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="w-full flex flex-col gap-8 max-w-2xl">
              <h2 className="text-5xl text-votosRed">Reviews</h2>

              <p className="text-lg text-votosBlack">
              Confira alguns reviews da Votos, nossa equipe transmite tranquilidade e segurança para os noivos, permitindo ao casal protagonista desfrutar da cerimônia sem preocupação.
              </p>
              <p className="text-lg text-votosBlack">
              Ainda bem que há empresas como a Votos Cerimonial, especializada em produzir casamentos. Com eles, o casal tem a chance de aproveitar o tão esperado dia sem estresse e nervosismo.</p>
            </div>
          </div>
          <div id='casamentos' className='flex flex-row items-center justify-end' >
          <CarouselReview/>
          </div>
        </div>
      </SectionComponent>
    </main>
  );
}

export default App;
