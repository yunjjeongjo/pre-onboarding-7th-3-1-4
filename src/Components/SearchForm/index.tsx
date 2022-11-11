import useSearch from "@/hooks/useSearch";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { selectState } from "@/lib/state/atom";
import SearchListItem from "../SearchListItem";

const SearchForm = () => {
  const MAX_COUNT = 10;
  const { fetchData, data, query, setQuery } = useSearch();
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectState);
  const actionIgnoreKeys = ["ArrowUp", "ArrowDown"];
  const navigate = useNavigate();
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        fetchData(e.target.value);
      }, 200)
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/result/${query}`);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (actionIgnoreKeys.includes(e.key)) {
      if (e.key === actionIgnoreKeys[0]) {
        setSelectedIndex((selectedIndex) =>
          selectedIndex === 0 ? MAX_COUNT - 1 : selectedIndex - 1
        );
      }
      if (e.key === actionIgnoreKeys[1]) {
        setSelectedIndex((selectedIndex) =>
          selectedIndex === MAX_COUNT - 1 ? 0 : selectedIndex + 1
        );
      }
    }
  };

  const isSpace = () => {
    if (query.replaceAll(" ", "").length === 0 || data.length === 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={query}
          onKeyDown={handleKeydown}
          onChange={handleChange}
          placeholder="질환명을 입력해 주세요"
        ></Input>
        <Button type="submit">🔍</Button>
      </Form>
      <ListContainer>
        {isSpace() ? (
          <ListItem>검색어 없음</ListItem>
        ) : (
          <SearchListItem
            data={data}
            selectedIndex={selectedIndex}
          ></SearchListItem>
        )}
      </ListContainer>
    </>
  );
};

const Form = styled.form`
  width: 500px;
  height: 75px;
  border-radius: 40px;
  background-color: #ffffff;
  padding: 0px 20px 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    outline: 2px solid #007be9;
  }
`;

const Input = styled.input`
  width: 400px;
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c9c9c9;
  }
`;

const ListContainer = styled.div`
  margin: 10px;
  padding: 20px 0px;
  width: 500px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgb(30 32 37 / 10%) 0px 8px 16px;
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
const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #007be9;
  color: white;
`;

export default SearchForm;
