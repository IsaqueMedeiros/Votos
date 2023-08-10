import HeaderComponent from "./components/HeaderComponent";
import SectionComponent from "./components/layout/sectionComponent";

function App() {
  return (
    <>
      <HeaderComponent />

      <SectionComponent sectionBg="bg-votosPink">
        <div 
        className="
          border-4 border-white rounded-[5rem] w-full p-8 md:py-16 lg:py-24 
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
    </>
  );
}

export default App;
