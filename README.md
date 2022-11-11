# pre-onboarding-7th-3-1-4
 한국임상정보 사이트 검색어 추천 기능 구현


## 개발 조건 및 환경

- 언어 - TypeScript
- 사용 기술스택
    - 전역 상태관리 라이브러리 - Recoil
    - 스타일 관련 라이브러리 - styled-components
    - HTTP Client - axios
    
    
## 과제 내용
- [x] 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    
- [x] 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- [x] 검색어가 없을 시 “검색어 없음” 표출
- [x] API 호출 최적화
    - [x] API 호출별로 로컬 캐싱 구현
    - [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 - 디바운스로 구현
    - [x] API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- [x] 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 구현 영상
![녹화_2022_11_11_17_30_48_443](https://user-images.githubusercontent.com/93373357/201299168-23972b38-d5aa-438a-992a-a6592a9576f3.gif)

 
## 프로젝트 실행방법

### 설치

```shell
npm install
```

### 실행

1. server 실행 - [링크](https://github.com/walking-sunset/assignment-api_7th)

```shell
npm install
npm start
```

2. 프로젝트 실행

```shell
npm start
```
