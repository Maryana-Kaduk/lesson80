"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchManufactor from "./SearchManufactor";
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`mt3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying-glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufactor, setmanufactor] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(manufactor.trim() === "" && model.trim() === "") {
      return alert('Please provide some info')
    }

    updateSearchParams(model.toUpperCase(), manufactor.toLowerCase())
  };

  const updateSearchParams = (model: string, manufactor: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if(model) {
      searchParams.set("model", model)
    } else {
      searchParams.delete("model")
    }

    if(manufactor) {
      searchParams.set("manufactor", manufactor)
    } else {
      searchParams.delete("manufactor")
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufactor
          manufactor={manufactor}
          setmanufactor={setmanufactor}
        />
        <SearchButton
          otherClasses='sm:hidden'
        />
      </div>

      <div className="searchbar__item">
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton
          otherClasses='sm:hidden'
        />
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  );
};

export default SearchBar;
