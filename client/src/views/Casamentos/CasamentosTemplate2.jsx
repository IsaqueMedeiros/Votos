import Carousel from '../../components/Carousel/Carousel'

const CasamentosTemplate2 = () => {
    return (
        <main id='casamentos' className='min-h-screen bg-votosRed grid grid-cols-1 lg:grid-cols-2 content-evenly gap-8 overflow-hidden py-12' >
            <div className='w-min h-min flex flex-col items-start justify-center ml-14 lg:ml-20 overflow-hidden' >
                <h1 className='text-4xl lg:text-6xl text-votosPink lg:leading-[4rem] ' >NOSSOS<br />CASAMENTOS</h1>
                <p className='text-white lg:text-2xl mt-4 lg:mt-8' >Conheça um pouco do nosso<br /> trabalho com os noivos.</p>
            </div>
            <Carousel />
        </main>
    )
}

export default CasamentosTemplate2