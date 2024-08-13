# OLYMPIC IN PARIS 2024 MEDAL AWARDS

![스크린샷 2024-08-13 오후 11 45 23](https://github.com/user-attachments/assets/5cae8d37-2175-4cdd-bd65-a3f285c46df2)

## About Project

: 사용자가 직접 국가, 메달을 추가할 수 있고 금메달 개수별로 순위별로 정렬해 순위를 보여줌

# github 배포사이트 주소

: https://shyunis.github.io/olympicMedal/

## 기능

- C create 저장 (국가별 메달개수 저장)
- R read 읽기 (저장된 정보 결과로 보기)
- U update 수정 (메달 개수 수정)
- D delete 삭제 (국가 및 메달 개수 결과값 삭제)

## 폴더구조

components - 페이지의 구성별로 분류
큰 분류값 : 헤더, 정보입력(인풋), 정보입력이벤트버튼(ADD,UPDATE), 결과값

- node_modules
- src
  - assets
    - 이미지파일정리
  - components
    - header
      - Header.jsx
      - Header.css
    - inputData
      - InputData.jsx
      - InputData.css
    - buttonEvent
      - ButtonEvent.jsx
    - result
      - Result.css
      - Result.jsx
  - styles
    - App.css
    - main.css
  - App.jsx
  - main.jsx
- gitignore
- eslint.config.js
- index.html
- package.json
- README.md
- vite.config.js
- yarn.lock

# olympicMedal
