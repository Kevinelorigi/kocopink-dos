import React from 'react'

const Productos = () => {
    return (
        <div className='h-screen flex flex-col w-full bg-gradient-to-b from-white to-pink-100'>
            <h1 className='font-medium text-pink-400 text-center p-6'>Productos</h1>
            <section className='w-full place-items-center grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='h-[380px] w-[70%] bg-gradient-to-b from-pink-100 to-pink-300 rounded-xl shadow-lg'></div>
                <div className='h-[380px] w-[70%] bg-gradient-to-b from-pink-100 to-pink-300 rounded-xl shadow-lg'></div>
                <div className='h-[380px] w-[70%] bg-gradient-to-b from-pink-100 to-pink-300 rounded-xl shadow-lg'></div>
            </section>
        </div>
    )
}

export default Productos