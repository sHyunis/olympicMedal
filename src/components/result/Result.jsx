import React from "react";
import "./Result.css";

const Result = ({ result, onDelete }) => {
  const medalTableList = [
    "COUNTRY NAME",
    "금메달",
    "은메달",
    "동메달",
    "ACTION",
  ];

  // 삭제 확인 후 삭제 수행
  const confirmDeleteData = (index) => {
    if (window.confirm("삭제하시겠습니까?")) {
      onDelete(index); // 수정된 부분
    }
  };

  return (
    <div className="medal-total">
      <table>
        <thead>
          <tr>
            {medalTableList.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((data, index) => (
            <tr key={index}>
              <td>{data.country}</td>
              <td>{data.금}</td>
              <td>{data.은}</td>
              <td>{data.동}</td>
              <td>
                <button className="medal-edit-button">EDIT</button>
                <button
                  className="medal-delete-button"
                  onClick={() => confirmDeleteData(index)} // 수정된 부분
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
