import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-[#1A1A1A]'>
            <div className="container py-4 flex justify-end">
                <Link to={'https://github.com/tarikCekirge'} target='_blank'>
                    <FaGithub className='text-white text-2xl' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer