import styled, {css} from "styled-components";

export const IconWrapper = styled.div``;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  transition: all 300ms ease-out;
`;

export const PageWrapperDesktop = styled(PageWrapper)`
  padding: 0 10px;

  &:hover {
    background: ${({navBarHoverColor}) => navBarHoverColor};
    color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
  }

  &:active {
    background: ${({navBarClickedColor}) => navBarClickedColor};
    color: ${({navBarTextClickedColor}) => navBarTextClickedColor};
  }

  ${({isDropdown, open}) =>
          isDropdown && open &&
          css`
            background: ${({navBarHoverColor}) => navBarHoverColor};
            color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
          `};
`

export const PageWrapperMobile = styled(PageWrapper)`
  word-break: break-word;
`;
