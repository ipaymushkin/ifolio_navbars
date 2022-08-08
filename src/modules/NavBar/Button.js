import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openLinkInNewTab } from '../../utils/openLinkInNewTab.js';

const NavBarButton = memo(
  ({
    link,
    disabledRedirect,
    title,
    buttonSettingsRoundCorners,
    buttonSettingsBorderWidth,
    buttonSettingsRegularBorder,
    buttonSettingsRegularFill,
    buttonSettingsHorizontalPadding,
    buttonSettingsVerticalPadding,
    buttonSettingsHoverClickedBorder,
    buttonSettingsHoverClickedFill,
    buttonSettingsTextColorRegular,
    buttonSettingsTextColorHover,
    buttonSettingsTextColorClicked
  }) => {
    const onClick = useCallback(() => {
      if (link && !disabledRedirect) {
        openLinkInNewTab(link);
      }
    }, [link, disabledRedirect]);
    return (
      <Wrapper
        buttonSettingsRoundCorners={buttonSettingsRoundCorners}
        buttonSettingsBorderWidth={buttonSettingsBorderWidth}
        buttonSettingsRegularBorder={buttonSettingsRegularBorder}
        buttonSettingsRegularFill={buttonSettingsRegularFill}
        buttonSettingsHorizontalPadding={buttonSettingsHorizontalPadding}
        buttonSettingsVerticalPadding={buttonSettingsVerticalPadding}
        buttonSettingsHoverClickedBorder={buttonSettingsHoverClickedBorder}
        buttonSettingsHoverClickedFill={buttonSettingsHoverClickedFill}
        buttonSettingsTextColorRegular={buttonSettingsTextColorRegular}
        buttonSettingsTextColorHover={buttonSettingsTextColorHover}
        buttonSettingsTextColorClicked={buttonSettingsTextColorClicked}
        onClick={onClick}
      >
        {title}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
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

NavBarButton.propTypes = {
  disabledRedirect: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.string,
  buttonSettingsRoundCorners: PropTypes.number,
  buttonSettingsBorderWidth: PropTypes.number,
  buttonSettingsRegularBorder: PropTypes.string,
  buttonSettingsRegularFill: PropTypes.string,
  buttonSettingsVerticalPadding: PropTypes.number,
  buttonSettingsHorizontalPadding: PropTypes.number,
  buttonSettingsHoverClickedBorder: PropTypes.string,
  buttonSettingsHoverClickedFill: PropTypes.string,
  buttonSettingsTextColorRegular: PropTypes.string,
  buttonSettingsTextColorHover: PropTypes.string,
  buttonSettingsTextColorClicked: PropTypes.string
};

export default NavBarButton;
