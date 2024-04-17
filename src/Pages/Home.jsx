import React from 'react'
import me from "../assets/1.jpg"
const Home = () => {
    return (
        <div className='bg-blue min-h-screen text-white'>
            <div>
                <div className="md:pt-20 md:pl-5 fixed">
                    <div className="w-40 h-40 md:w-52 md:h-52 bg-black rounded-full flex items-center justify-center">
                        <div
                            className="w-full h-full rounded-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${me})`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home