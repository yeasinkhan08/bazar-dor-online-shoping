import React from "react";

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const products = await res.json();
  console.log(products);

  return <div></div>;
};

export default Marquee;
