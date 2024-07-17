import React from 'react'

function ShowCard({isVisible,onShow}) {


  return (
    <>
            <div className=' w-4/5 flex justify-center justify-items-center items-center ml-auto mr-auto  '>
                <div className="relative overflow-hidden bg-white w-full justify-center justify-items-center flex-1 m-5 rounded-md">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div className="sm:max-w-lg">
                                <h1 className="font text-6xl font-bold tracking-tight text-gray-900 ">Let's Learn and Earn</h1>
                                <p className="mt-4 text-2xl text-gray-500">Get a change to win </p>
                                <h2 className='text-blue-600 text-4xl'>Rs 15,000</h2>
                            </div>
                            <div>
                                <div className="mt-10 mr-5 p-5">

                                    <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto min-w-full h-full mr-5">
                                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                          


                                                <div className="min-h-full min-w-full overflow-hidden rounded-lg  ">
                                                    <img src="./image/show.png" alt="" className="h-full w-full mr-40 pr-6 object-contain rounded-md " />
                                                </div>

                                        </div>
                                    </div>

                                    <a href="#" onClick={() => onShow()} className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Svelte Signals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowCard