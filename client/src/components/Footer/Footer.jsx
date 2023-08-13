import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-votosPink overflow-hidden">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <span className="block text-sm text-votosRed sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">LOCUS</a>. Todos Direitos Reservados</span>
                </div>
            </footer>
        </>
    )
}

export default Footer