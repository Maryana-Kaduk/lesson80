"use client"

import { manufacturers } from '@/constants'
import { SearchManufactorProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from "next/image";
import {Fragment, useState} from 'react'

const SearchManufactor = ({ manufactor, setmanufactor }: SearchManufactorProps) => {
  const [query, setQuery] = useState('')

  const filteredManufactors = 
    query === "" 
      ? manufacturers 
      : manufacturers.filter((item) => 
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      )
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufactor} onChange={setmanufactor}>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image src={'/car-logo.svg'} width={20} height={20} className='ml-4' alt='car logo'/>
          </Combobox.Button>

          <Combobox.Input
           className='search-manufacturer__input' 
           displayValue={(item:string) => item }
           placeholder='Volkswagen...'
           onChange={(event)=>setQuery(event.target.value)}
           />

           <Transition
              as={Fragment}
              afterLeave={() => setQuery("")}
              >
                <Combobox.Options
                className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-1g ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                >
                  {filteredManufactors.length === 0 && query !== "" 
                  ? (
                    <Combobox.Option
                    value={query}
                    className='search-manufacturer__option'
                    >
                      Create "{query}"
                    </Combobox.Option>
                    )
                    : (
                      filteredManufactors.map((item) => (
                        <Combobox.Option
                        key={item}
                        className={({ active }) => 
                          `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`
                        }
                        value={item}
                        >
                          {({ selected, active}) => (
                            <>
                              <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                {item}
                              </span>

                              {selected ? (
                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}></span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )
                  }
                </Combobox.Options>

            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufactor