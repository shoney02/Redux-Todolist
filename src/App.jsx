import React from "react";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const App = () => {
  return (
    <StContainer>
      {/* <h1>Redux TODO App</h1> */}
      <AddForm />
      <TodoList />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
