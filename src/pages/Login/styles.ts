import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  /* margin-bottom: 12rem; */
 
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-10);
    border-radius: 4px;
    padding: 3rem;
    width: 25rem;
    gap: 1rem;
  }
`;
