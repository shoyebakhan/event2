import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

export default function Hotels() {
  return (
    <>
      <div className="">
        <div className="py-10 px-4 sm:py-16 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="text-2xl font-bold tracking-tight">Hotels</h2>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:max-w-7xl">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 h-40 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src="" alt=""/>
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h2 className='font-bold text-lg'>Shiv Ashoka</h2>
                  <p class="mt-1 text-md"><MdLocationPin className='inline text-xl text-red-700' /> Nearby Indian Oil</p>
                  <dd className='mt-1 px-1'>
                    <a className="hover:text-gray-500 text-md capitalize" href="tel:+91 9460043410">
                      <TbPhoneCall className='inline text-lg text-green-700'/> call now
                    </a>
                  </dd>
                </div>
                <p class="text-sm font-medium rounded-md text-white bg-green-800 px-4 h-7"><FaStar className='inline text-white' /> 4.2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}