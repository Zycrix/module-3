import React, { useContext } from "react";
import { ProductsContext } from "../../../App_old/App.useContext.lesson-task";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: lightblue;
  flex-direction: row;
  display: inline-block;
  margin: 1rem;
  padding: 1rem;
`;
const PrimaryDiv = styled(StyledDiv)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: hotpink;
`;

function MyComponent() {
  const { products, setProducts } = useContext(ProductsContext);

  return (
    <PrimaryDiv>
      <div>
        {products.map((product) => {
          return (
            <StyledDiv key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </StyledDiv>
          );
        })}
      </div>
    </PrimaryDiv>
  );
}

export default MyComponent;
