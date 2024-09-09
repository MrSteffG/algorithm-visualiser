"use client";

import React, { useState } from "react";

const SortingAlgorithms = () => {
  const [array, setArray] = useState([34, 64, 23, 98, 24, 1, 45, 78]);

  const ArrayBars = () => {
    return array.map((n: number) => {
      return (
        <div
          className="flex w-5 bg-green-500"
          key={n}
          style={{ height: n + "%" }}
        >
          {n}
        </div>
      );
    });
  };

  const sort = () => {
    let newArr = [...array];
    for (let i = 0; i < array.length; i++) {
      newArr[i] = i;
      setArray(newArr);
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">Algorithm Visualiser</h1>
      <button
        className="bg-sky-600 p-3 text-xl rounded-md px-5 font-bold text-white hover:scale-105"
        onClick={sort}
      >
        Sort
      </button>
      <div className="flex min-h-[50vh] w-2/3 border-2">
        <div className="flex gap-1 items-end">
          <ArrayBars />
        </div>
      </div>
    </div>
  );
};

export default SortingAlgorithms;
