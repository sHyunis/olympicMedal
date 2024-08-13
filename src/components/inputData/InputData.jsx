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

  // 국가 추가 또는 업데이트 버튼 클릭 시
  const addOrUpdateCountry = () => {
    if (country === "" || Object.values(medal).every((val) => val === 0)) {
      alert("국가와 메달개수를 입력해주세요");
      return;
    }

    // 국가가 이미 존재하는지 확인
    const existingIndex = result.findIndex((item) => item.country === country);

    if (existingIndex !== -1) {
      // 이미 존재하는 국가 업데이트
      setResult((prevResult) =>
        prevResult.map((item, index) =>
          index === existingIndex ? { country, ...medal } : item
        )
      );
    } else {
      // 새로운 국가 추가
      setResult((prevResult) => [...prevResult, { country, ...medal }]);
    }

    // 입력 창 초기화
    setCountry("");
    setMedal({ 금: 0, 은: 0, 동: 0 });
    setEditIndex(null); // editIndex 초기화
  };

  // 결과 삭제 버튼 클릭 시
  const deleteData = (index) => {
    setResult((prevResult) => prevResult.filter((_, i) => i !== index));
    setEditIndex(null); // 삭제 후 인덱스 초기화
  };

  // 수정 버튼 클릭 시
  const editData = (index) => {
    const item = result[index];
    setCountry(item.country);
    setMedal({ 금: item.금, 은: item.은, 동: item.동 });
    setEditIndex(index); // 수정할 항목의 인덱스 설정
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
        <ButtonEvent addCountry={addOrUpdateCountry} />
      </div>
      <h3>OLYMPIC RANK</h3>
      <Result result={sortedGoldList} onDelete={deleteData} onEdit={editData} />
    </>
  );
}

export default InputData;
