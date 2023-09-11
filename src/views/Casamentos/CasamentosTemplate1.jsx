import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const CasamentosTemplate1 = () => {
    return (
        <main className='min-h-screen bg-votosRed flex flex-col gap-8 md:flex-row md:justify-evenly items-center text-white py-16'>
            <div className='rounded-3xl w-[250px] md:w-[350px] aspect-square border-2 border-votosPink' >
            <LazyLoadImage
                  src="/media/equipe.webp"
                  loading="lazy"
                  alt="Equipe"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full rounded-3xl"/>
            </div>
            <div className='w-min flex flex-col items-start md:items-start md:w-auto'>
                <h1 className='text-5xl lg:text-7xl lg:leading-[5rem] text-votosPink' >
                    EQUIPE<br /> CERIMONIAL
                </h1>
                <p className='mt-4 lg:mt-8 2xl:text-xl text-white md:text-start' >
                    Conheça um pouco dos nossos<br /> trabalhos realizados.
                </p>
                <a href="#casamentos" className="mt-4 lg:mt-10 rounded-2xl shadow-md bg-votosRed border-2 border-white text-white text-lg w-[160px] lg:w-[200px] xl:w-[240px]  py-0.5 flex items-center justify-center group hover:brightness-90 duration-500">
                    Casamentos
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-4 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </a>
            </div>

        </main>
    )
}

export default CasamentosTemplate1