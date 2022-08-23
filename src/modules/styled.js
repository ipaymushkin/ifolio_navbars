import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 10px 0;
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

export const DropdownElement = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  background: ${({dropdownSettingsInactiveFill}) => dropdownSettingsInactiveFill};
  border: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
  color: ${({dropdownSettingsTextColorRegular}) => dropdownSettingsTextColorRegular};
  font-size: ${({dropdownSettingsTextFontSize}) => dropdownSettingsTextFontSize}px;
  font-family: ${({dropdownSettingsTextFontFamily}) => dropdownSettingsTextFontFamily};
  font-weight: ${({dropdownSettingsTextBold}) => (dropdownSettingsTextBold ? 'bold' : 'normal')};
  font-style: ${({dropdownSettingsTextItalic}) => (dropdownSettingsTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({dropdownSettingsTextUnderline}) => (dropdownSettingsTextUnderline ? 'underline' : 'none')};
  padding: ${({dropdownSettingsVerticalPadding, dropdownSettingsHorizontalPadding}) =>
    `${dropdownSettingsVerticalPadding}px ${dropdownSettingsHorizontalPadding}px`};

  &:hover {
    background: ${({dropdownSettingsHoverClickedFill}) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
    color: ${({dropdownSettingsTextColorHover}) => dropdownSettingsTextColorHover};
  }

  &:active {
    background: ${({dropdownSettingsHoverClickedFill}) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
    color: ${({dropdownSettingsTextColorClicked}) => dropdownSettingsTextColorClicked};
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
