import React from "react";

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  return (
    <div className="border border-gray-100 shadow">
      <div className="mx-auto flex w-fullitems-center p-2 pl-9 max-w-7xl gap-7 sm:flex-row ">
        {data.map((d) => (
          <div key={d.slug}>
            <div className="flex hover:bg-green-200">
              <p>{d.icon}</p>
              <h2 className="font-bold">{d.nameBn}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
