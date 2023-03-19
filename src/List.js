import React from "react";

const List = ({ value, refrence, selected }) => {
//all dropdown options

  let countries = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Italy",
    "Japan",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Russia",
    "Romania",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United States",
    "United Kingdom",
    "Vietnam",
  ];

  let newarray = countries;

  //searching functionality
  if (value.length > 0) {
    newarray = countries.filter((item) => {
      return item.toLocaleLowerCase().startsWith(value.toLocaleLowerCase());
    });
  }

  return (
    <>
      {newarray.length > 0 ? (
        newarray.map((item, i) => (
          <div
            onClick={() => {
              refrence(item);
            }}
            style={{ background: selected === item ? "#f2f2f2" : "" }}
            key={i}
          >
            {item}
          </div>
        ))
      ) : (
        <div style={{ marginTop: "60px", marginLeft: "20px" }}>
          No Search Found!
        </div>
      )}
    </>
  );
};

export default List;
