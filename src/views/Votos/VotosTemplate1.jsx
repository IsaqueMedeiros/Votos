import React from 'react'
import LinkComponent from "../../components/LinkComponent";
import { LazyLoadImage } from "react-lazy-load-image-component";


const VotosTemplate1 = () => {
    return (
       <div className='flex flex-row items-center justify-center h-screen bg-votosRed' >
         <div className="h-[70%] w-10/12 flex flex-col justify-center items-center gap-8 md:mt-8 md:flex-row md:items-center md:justify-evenly bg-white rounded-[5rem]">
            <div className="rounded-3xl w-full max-w-[200px] lg:max-w-[400px] aspect-square self-center overflow-hidden">
                <LazyLoadImage
                    src="/media/image1.webp"
                    loading="lazy"
                    alt="Image1"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
                <h3 className="text-4xl text-votosRed">Casamentos</h3>
                <LinkComponent title="Ver mais" href="/casamentos" />
            </div>
        </div>
       </div>
    )
}

export default VotosTemplate1