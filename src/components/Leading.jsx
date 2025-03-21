import React from 'react'

const Leading = ({ className, children }) => {
    return (
        <h1 className={`text-8xl text-center font-roboto font-200 leading-[1] ${className}`}>{children}</h1>
    )
}

export default Leading