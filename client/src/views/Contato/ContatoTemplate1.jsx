import React from 'react'

const ContatoTemplate1 = () => {
    return (
        <main className='h-screen bg-votosRed flex flex-col flex-col-reverse lg:flex-row justify-around items-center text-white'>
            <div className='' >
                <h1 className='text-5xl lg:text-7xl lg:leading-[5rem] text-votosPink' >
                    VOTOS<br /> CERIMONIAL
                </h1>
                <p className='mt-4 lg:mt-8 2xl:text-xl text-[#faf9f6]' >
                    Entre em contato conosco e permita-nos criar <br />momentos inesquecíveis juntos.
                </p>
                <button className="mt-4 lg:mt-10 rounded-2xl shadow-md bg-votosRed text-white text-lg w-[160px] lg:w-[200px] xl:w-[240px]  py-0.5 flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-[#faf9f6]">
                    Contato
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-4 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </button>
            </div>
            <div className='rounded-[5rem] h-[25rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem] border-2 border-[#faf9f6]' >
            </div>
        </main>
    )
}

export default ContatoTemplate1