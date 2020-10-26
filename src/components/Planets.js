import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

export default function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(status);
  return (
    <div>
      <h2>Planets</h2>
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => {
            return <Planet planet={planet} key={planet.name} />;
          })}
        </div>
      )}
    </div>
  );
}
