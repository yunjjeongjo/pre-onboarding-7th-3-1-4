import { queryState } from "@/lib/state/atom";
import { SickProps } from "@/lib/state/interface";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface SearchListItemProps {
  data: SickProps[];
  selectedIndex: number;
}
const SearchListItem = ({ data, selectedIndex }: SearchListItemProps) => {
  const query = useRecoilValue(queryState);
  return (
    <>
      {data?.map((item, index) => {
        if (index === selectedIndex) {
          return item.sickNm.includes(query) ? (
            <SelectedListItem key={index}>
              {item.sickNm.split(query)[0]}
              <Strong>{query}</Strong>
              {item.sickNm.split(query)[1]}
            </SelectedListItem>
          ) : (
            <SelectedListItem key={index}>{item.sickNm}</SelectedListItem>
          );
        }
        return item.sickNm.includes(query) ? (
          <ListItem key={index}>
            {item.sickNm.split(query)[0]}
            <Strong>{query}</Strong>
            {item.sickNm.split(query)[1]}
          </ListItem>
        ) : (
          <ListItem key={index}>{item.sickNm}</ListItem>
        );
      })}
    </>
  );
};

const Strong = styled.span`
  font-weight: 700;
`;

const ListItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SelectedListItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #f1f1f1;
`;
export default SearchListItem;
