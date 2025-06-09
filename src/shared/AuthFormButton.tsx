import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: none;
  border: 1px solid black;
  background-color: transparent;
`

export const AutoFormButton = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>
}

