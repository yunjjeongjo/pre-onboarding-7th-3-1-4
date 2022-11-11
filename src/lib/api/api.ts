import axios from "axios";
import { CacheProps } from "../state/interface";

const cache: CacheProps = {};
export const request = async (keyword: string) => {
  if (cache[keyword]) {
    return cache[keyword];
  }
  const res = await axios.get(
    `${process.env.REACT_APP_API_END_POINT}?q=${keyword}`
  );
  console.log("calling api");
  console.log(cache);
  cache[keyword] = res.data;

  return res.data;
};
