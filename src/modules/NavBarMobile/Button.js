import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import Row from "./Row";
import {ButtonWrapper} from "../styled";

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
         buttonSettingsTextColorClicked,
         mobileTextAlignment
     }) => {
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