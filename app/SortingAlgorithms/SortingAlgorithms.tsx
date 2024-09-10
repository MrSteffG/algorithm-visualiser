"use client";

import React, { useState } from "react";

const SortingAlgorithms = () => {
  const [array, setArray] = useState([34, 64, 23, 98, 24, 1, 45, 78]);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms)); // helper func

  const generateArray = async () => {
    setArray([]);

    const newArr = [];
    for (let i = 0; i < 40; i++) {
      newArr.push(Math.floor(Math.random() * 100) + 1);
      setArray(newArr);
    }
  };

  const ArrayBars = () => {
    return array.map((n: number) => {
      return (
        <div
          className="flex bg-green-500 w-5 text-xs overflow-visible"
          key={n}
          style={{ height: n + "%" }}
        >
          <div className="overflow-visible text-center">{n}</div>
        </div>
      );
    });
  };

  const bubbleSort = async () => {
    let newArr = [...array];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (newArr[j] > newArr[j + 1]) {
          await delay(200);
          const temp = newArr[j];
          newArr[j] = newArr[j + 1];
          newArr[j + 1] = temp;
          setArray(newArr);
        }
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">Algorithm Visualiser</h1>

      <button
        className="bg-sky-600 p-3 text-xl rounded-md px-5 font-bold text-white hover:scale-105"
        onClick={bubbleSort}
      >
        Bubble Sort
      </button>
      <button
        className="bg-sky-600 p-3 text-xl rounded-md px-5 font-bold text-white hover:scale-105"
        onClick={generateArray}
      >
        Generate Arr
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
