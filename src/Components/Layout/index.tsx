import styled from "styled-components";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고 온라인으로 참여하기</Title>
      {children}
    </Container>
  );
};

const Title = styled.h1`
  width: 400px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 6%;
  margin-bottom: 30px;
  line-height: 140%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #cae9ff;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

export default Layout;
