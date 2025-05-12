import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./App.css";

function App() {
  //states for table 1 and table 2
  const [tableData, setTableData] = useState([]);
  const [table2, setTable2] = useState([]);

  // Fetch file, parse and store in table 1
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/Dataset/Table_Input.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setTableData(parsed.data);
      });
  }, []);

  // Compute
  useEffect(() => {
    if (tableData.length === 0) return;

    //find value from index
    const findValue = (index) => {
      const found = tableData.find((row) => row["Index #"] === index);
      return found ? Number(found.Value) : 0;
    };

    //store in table 2
    const t2 = [
      { category: "Alpha", value: findValue("A5") + findValue("A20") },
      { category: "Beta", value: findValue("A15") / findValue("A7") },
      { category: "Charlie", value: findValue("A13") * findValue("A12") },
    ];

    setTable2(t2);
  }, [tableData]);

  return (
    <div className="container">
      <h1>Mulah Tech Assessment Stage 1</h1>

      <div className="about">
        <p>
          <strong>Name:</strong> Muhammad Hakimi Bin Mahadzir
        </p>
        <p>
          <strong>Position:</strong> Applying for Software Engineering Intern
        </p>
        <p>
          <strong>LinkedIn: </strong>
          <a
            href="https://www.linkedin.com/in/hakimi-mahadzir-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hakimi-mahadzir-dev
          </a>
        </p>
         <p>
          <strong>Resume: </strong>
          <a
            href="https://drive.google.com/file/d/1Ipl5CCrzFRwtjp9jKRoa8zUNLqJQsHPQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </p>
      </div>

      <h2>Table 1</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Index #</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row["Index #"]}>
              <td>{row["Index #"]}</td>
              <td>{row.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>Table 2</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {table2.map((row) => (
            <tr key={row.category}>
              <td>{row.category}</td>
              <td>
                {Number.isInteger(row.value) ? row.value : row.value.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
