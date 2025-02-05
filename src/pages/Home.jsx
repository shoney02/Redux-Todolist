import React from "react";
import styled from "styled-components";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoList />
    </StContainer>
  );
};

export default HomePage;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
