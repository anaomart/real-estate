import React from "react";

export default function Brand() {
  const Companies = [
    "./prologis.png",
    "./tower.png",
    "./equinix.png",
    "./realty.png",
  ];

  return (
    <section className="wrapper">
      <div className="  flex flex-wrap items-center justify-between p-5  ">
        {Companies.map((company) => (
          <img
            src={company}
            alt={company}
            key={company + Math.random()}
            className="w-36"
          />
        ))}
      </div>
    </section>
  );
}
