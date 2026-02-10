    // create a class based componet named display123
    //create a state variable with 50 records
    //implement pagination logic to show 5 records per page
    //add buttons to navigate to next and previous pages
    //display current page number and total pages
    //when user is on first page, disable previous button
    //when user is on last page, disable next button

    //record (arry), currentPage(number), recordsPerPage(number)
    //totalPages(number),displayRecords(array)
import React, { Component } from "react";

class Display123 extends Component {
  constructor(props) {
    super(props);

    // create 50 records
    const records = ["Record 1", "Record 2", "Record 3", "Record 4", "Record 5",
      "Record 6", "Record 7", "Record 8", "Record 9", "Record 10",
      "Record 11", "Record 12", "Record 13", "Record 14", "Record 15",
      "Record 16", "Record 17", "Record 18", "Record 19", "Record 20",
      "Record 21", "Record 22", "Record 23", "Record 24", "Record 25",
      "Record 26", "Record 27", "Record 28", "Record 29", "Record 30",
      "Record 31", "Record 32", "Record 33", "Record 34", "Record 35",
      "Record 36", "Record 37", "Record 38", "Record 39", "Record 40",
      "Record 41", "Record 42", "Record 43", "Record 44", "Record 45",
      "Record 46", "Record 47", "Record 48", "Record 49", "Record 50"];

    this.state = {
      records: records,     
      currentPage: 1,       
      recordsPerPage: 5     
    };
  }

  nextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  prevPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1
    }));
  };

  render() {
    const { records, currentPage, recordsPerPage } = this.state;

    const totalPages = Math.ceil(records.length / recordsPerPage);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const displayRecords = records.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Records List</h2>

          {displayRecords.map((record, index) => (
            <li key={index}>{record}</li>
          ))}

        <button
          onClick={this.prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={this.nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Display123;
