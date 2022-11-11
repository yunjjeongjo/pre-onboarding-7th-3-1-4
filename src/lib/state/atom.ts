import { atom } from "recoil";

// 컴포넌트에서 아톰을 사용하기 위해 export를 사용해 내보냅니다.
export const queryState = atom({
  key: "queryState",
  default: ""
});

export const searchResultState = atom({
  key: "searchResultState",
  default: [
    {
      sickCd: "",
      sickNm: ""
    }
  ]
});

export const selectState = atom({
  key: "selectState",
  default: 0
});
