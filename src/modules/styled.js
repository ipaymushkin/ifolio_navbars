import styled from "styled-components";

export const ButtonWrapper = styled.div`
  line-height: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: ${({ buttonSettingsRoundCorners }) => buttonSettingsRoundCorners}px;
  border: ${({ buttonSettingsBorderWidth }) => buttonSettingsBorderWidth}px solid
    ${({ buttonSettingsRegularBorder }) => buttonSettingsRegularBorder};
  background: ${({ buttonSettingsRegularFill }) => buttonSettingsRegularFill};
  padding: ${({ buttonSettingsVerticalPadding, buttonSettingsHorizontalPadding }) =>
    `${buttonSettingsVerticalPadding}px ${buttonSettingsHorizontalPadding}px`};
  color: ${({ buttonSettingsTextColorRegular }) => buttonSettingsTextColorRegular};

  &:hover {
    border: ${({ buttonSettingsBorderWidth }) => buttonSettingsBorderWidth}px solid
      ${({ buttonSettingsHoverClickedBorder }) => buttonSettingsHoverClickedBorder};
    background: ${({ buttonSettingsHoverClickedFill }) => buttonSettingsHoverClickedFill};
    color: ${({ buttonSettingsTextColorHover }) => buttonSettingsTextColorHover};
  }

  &:active {
    border: ${({ buttonSettingsBorderWidth }) => buttonSettingsBorderWidth}px solid
      ${({ buttonSettingsHoverClickedBorder }) => buttonSettingsHoverClickedBorder};
    background: ${({ buttonSettingsHoverClickedFill }) => buttonSettingsHoverClickedFill};
    color: ${({ buttonSettingsTextColorClicked }) => buttonSettingsTextColorClicked};
  }
`;

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
