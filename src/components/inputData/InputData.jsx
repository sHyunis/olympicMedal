import React, { useState } from "react";
import "./InputData.css";
import ButtonEvent from "../buttonEvent/ButtonEvent";
import Result from "../result/result";

const MedalColor = ["금", "은", "동"];

function InputData() {
  const [country, setCountry] = useState("");
  const [medal, setMedal] = useState({ 금: 0, 은: 0, 동: 0 });
  const [result, setResult] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // 메달국가 저장
  const medalCountry = (event) => {
    setCountry(event.target.value);
  };

  // 메달개수 저장
  const medalCount = (color, event) => {
    setMedal((prevMedals) => ({
      ...prevMedals,
      [color]: Number(event.target.value), // 입력 값을 숫자로 변환
    }));
  };

  // 국가추가 버튼 클릭 시
  const addCountry = () => {
    if (country === "" || Object.values(medal).every((val) => val === 0)) {
      alert("국가와 메달개수를 입력해주세요");
      return;
    }

    // 국가가 이미 존재하지 않으면 추가
    const editIndex = result.findIndex(
      (item) => item.country.toLowerCase() === country.toLowerCase()
    );

    if (editIndex === -1) {
      setResult((prevResult) => [...prevResult, { country, ...medal }]);
      setCountry("");
      setMedal({ 금: 0, 은: 0, 동: 0 });
    } else {
      alert("이미 존재하는 국가입니다. 업데이트를 눌러주세요");
    }
  };

  // 업데이트 버튼 클릭 시
  const updateCountry = () => {
    const editIndex = result.findIndex(
      (item) => item.country.toLowerCase() === country.toLowerCase()
    );
    console.log(editIndex);
    if (editIndex !== null) {
      setResult((prevResult) =>
        prevResult.map((item, index) =>
          index === editIndex ? { country, ...medal } : item
        )
      );
      setEditIndex(null);
      setCountry("");
      setMedal({ 금: 0, 은: 0, 동: 0 });
    }
    if (editIndex === -1) {
      alert("등록되어있지 않은 국가입니다.");
    }
  };

  // 결과 삭제 버튼 클릭 시
  const deleteData = (index) => {
    setResult((prevResult) => prevResult.filter((_, i) => i !== index));
  };

  // 수정 버튼 클릭 시
  const editData = (index) => {
    const item = result[index];
    setCountry(item.country);
    setMedal({ 금: item.금, 은: item.은, 동: item.동 });
    setEditIndex(index);
  };

  // 메달 결과 금메달 순으로 정렬
  const sortedGoldList = [...result].sort((a, b) => b.금 - a.금);

  return (
    <>
      <h3>ENTER MEDALS</h3>
      <div className="contents">
        <div className="content">
          <span>COUNTRY NAME</span>
          <input
            type="text"
            placeholder="국가입력"
            value={country}
            onChange={medalCountry}
          />
        </div>
        {MedalColor.map((color) => (
          <div className="content" key={color}>
            <span>{color}메달</span>
            <input
              type="number"
              min="0"
              placeholder="메달수입력"
              value={medal[color]}
              onChange={(event) => medalCount(color, event)}
            />
          </div>
        ))}
        <ButtonEvent addCountry={addCountry} update={updateCountry} />
      </div>
      <h3>OLYMPIC RANK</h3>
      <Result result={sortedGoldList} onDelete={deleteData} onEdit={editData} />
    </>
  );
}

export default InputData;
