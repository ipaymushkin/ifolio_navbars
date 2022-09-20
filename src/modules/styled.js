import styled from "styled-components";

export const IconWrapper = styled.div``;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;

  &:hover {
    color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
  }

  &:active {
    color: ${({navBarTextClickedColor}) => navBarTextClickedColor};
  }
`;

export const PageWrapperMobile = styled(PageWrapper)`
    word-break: break-word;
`;
