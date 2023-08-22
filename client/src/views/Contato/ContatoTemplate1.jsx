import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const ContatoTemplate1 = () => {
  return (
    <main className="min-h-screen bg-votosRed flex flex-col-reverse gap-8 md:flex-row justify-around items-center text-white py-20 px-8">
      <div className="w-min flex flex-col items-start md:w-auto md:items-start overflow-hidden">
        <h1 className="text-5xl lg:text-7xl lg:leading-[5rem] text-votosPink text-start md:text-start">
          VOTOS
          <br /> CERIMONIAL
        </h1>
        <p className="mt-4 lg:mt-8 2xl:text-xl text-[#faf9f6] text-start md:text-start">
          Entre em contato conosco<br/> e permita-nos criar
          momentos inesquecíveis juntos.
        </p>
        <button className="mt-4 lg:mt-10 rounded-2xl shadow-md bg-votosRed text-white text-lg w-[160px] lg:w-[200px] xl:w-[240px]  py-0.5 flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-[#faf9f6]">
          Contato
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-4 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="rounded-3xl w-full max-w-[270px] lg:max-w-[350px] aspect-square self-center overflow-hidden border-2 border-white">
        <LazyLoadImage
          src="public/media/image1.webp"
          loading="lazy"
          alt="Noivos"
          width={250}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
};

export default ContatoTemplate1;
