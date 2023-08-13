import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

const Template2 = () => {
    return (
        <main className='h-screen bg-votosPink grid grid-cols-1 lg:grid-cols-2 content-evenly   overflow-hidden' >
            <div className='w-min h-min flex flex-col items-start justify-center ml-16 lg:ml-20 overflow-hidden' >
                <h1 className='text-4xl lg:text-6xl text-votosRed lg:leading-[4rem] ' >NOSSOS<br />CASAMENTOS</h1>
                <p className='text-votosRed lg:text-2xl mt-4 lg:mt-8' >Conheça um pouco do nosso<br /> trabalho com os noivos.</p>
            </div>
            <Carousel />
        </main>
    )
}

export default Template2