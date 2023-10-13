"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto mt-4 max-w-md rounded border-l-4 border-red-500 bg-red-100 p-4 text-red-700 shadow-md">
      <h3 className="mb-2 font-bold">エラー</h3>
      <p>エラーが発生しました。</p>
      <button
        onClick={() => reset()}
        className="mt-2 rounded bg-red-600 px-4 py-2 text-white transition duration-200 ease-in-out hover:bg-red-500"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
