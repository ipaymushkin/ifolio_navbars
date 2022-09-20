import styled from "styled-components";

export const IconWrapper = styled.div``;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  word-break: break-word;

  &:hover {
    color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
  }

  &:active {
    color: ${({navBarTextClickedColor}) => navBarTextClickedColor};
  }
`;
