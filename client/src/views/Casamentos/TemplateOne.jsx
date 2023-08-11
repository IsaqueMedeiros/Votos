import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

const TemplateOne = () => {
    return (
        <main className='h-screen bg-votosPink grid grid-cols-1  content-around overflow-hidden' >
            <div className='flex flex-row justify-center overflow-hidden' >
                <h1 className='text-5xl lg:text-6xl text-votosRed ' >Casamentos</h1>
            </div>
            <Carousel />
        </main>
    )
}

export default TemplateOne