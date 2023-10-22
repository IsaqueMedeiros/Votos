import { LazyLoadImage } from "react-lazy-load-image-component";

const CasamentosTemplate4 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-votosRed dark:text-white">
            REWARS
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Confira prêmios que ganhamos
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-votosPink shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <LazyLoadImage
                src="/media/Reviews/Wedding-Awards-2022.webp"
                loading="lazy"
                alt="Franciane Moura"
                width={250}
                className=" w-full max-w-[250px] 2xl:max-w-[500px] aspect-square self-center overflow-hidden object-cover"
              />
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-votosPink shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <LazyLoadImage
                src="/media/Reviews/Wedding-Awards-2023.webp"
                loading="lazy"
                alt="Franciane Moura"
                width={250}
                className=" w-full max-w-[250px] 2xl:max-w-[500px] aspect-square self-center overflow-hidden object-cover"
              />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CasamentosTemplate4;
