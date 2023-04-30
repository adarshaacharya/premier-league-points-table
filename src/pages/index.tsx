import Table from "@/components/Table";
import { Inter } from "next/font/google";
import React from "react";


function Home() {
  return (
      <div className="container">
      <h1 className="mt-2 mb-2">Premier League Points Table</h1>

        <Table />
      </div>
  );
}

export default Home;
