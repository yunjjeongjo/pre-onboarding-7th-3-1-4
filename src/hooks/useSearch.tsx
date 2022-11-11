import { request } from "@/lib/api/api";
import { useRecoilState } from "recoil";
import { queryState, searchResultState } from "@/lib/state/atom";

const useSearch = () => {
  const [query, setQuery] = useRecoilState(queryState);
  const [data, setData] = useRecoilState(searchResultState);

  const isSpace = (query: string) => {
    if (query.replaceAll(" ", "").length === 0) {
      return true;
    }
    return false;
  };

  const fetchData = async (query: string) => {
    if (!isSpace(query)) {
      const response = await request(query);
      setData(response.slice(0, 10));
    }
  };

  return { fetchData, data, query, setQuery };
};

export default useSearch;
