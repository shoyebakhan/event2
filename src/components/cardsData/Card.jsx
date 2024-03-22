import React from 'react'
import { categories } from '../../_Details'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
      <div className="bg-red-600">
        <div className="py-10 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Categories</h2>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 gap-12 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="relative flex h-72 w-56 flex-col overflow-hidden rounded-lg p-4  hover:brightness-75 cursor-pointer xl:w-auto">
                      <span aria-hidden="true" className="absolute inset-0 brightness-[70%]">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center hover:scale-125 transition-all duration-500" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 opacity-100"/>
                      <span className="relative mt-auto text-center text-lg font-bold text-white ">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
