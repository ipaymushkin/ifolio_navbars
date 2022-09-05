import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import Row from "./Row";
import styled from "styled-components";

const NavBarButton = memo(
    ({
         link: linkProps,
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
         buttonSettingsTextColorClicked,
         mobileTextAlignment
     }) => {
        const link = linkProps?.link;
        const onClick = useCallback(() => {
            if (link && !disabledRedirect) {
                openLinkInNewTab(link);
            }
        }, [link, disabledRedirect]);
        return (
            <Row onClick={onClick} link={link} mobileTextAlignment={mobileTextAlignment}>
                <ButtonWrapper
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
                >
                    {title}
                </ButtonWrapper>
            </Row>
        );
    }
);

const ButtonWrapper = styled.div`
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
