import React, {Fragment, useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {getCropperQueryString} from '../../utils/getCropperQueryString.js';
import {logoImageHeight, logoImageWidth} from '../../consts.js';
import {Icon} from "../../components/Icon";
import BurgerIcon from '../../icons/BurgerIcon.js';
import CropImage from '../../components/CropImage/index.js';
import NavBarButton from "./Button";
import NavBarPage from "./Page";

const NavBarMobile = ({
                          config, stickyOffset = 0, isConstructor = false, isStatic = false, disabledRedirect = false,
                          disabledListClick = false
                      }) => {

    const [open, setOpen] = useState(isConstructor);

    useEffect(() => {
        if (!isConstructor) {
            document.body.style.overflowY = open ? 'hidden' : "auto";
        }
    }, [isConstructor, open])

    const {
        mobileHeight,
        navBarRegularColor,
        mobileLogoAlignment,
        logoSrc,
        logoCropperOptions,
        navBarBehavior,
        mobileFontSize,
        navBarTextFontFamily,
        navBarTextBold,
        navBarTextItalic,
        navBarTextUnderline,
        navBarTextRegularColor,
        navBarTextSpacing,
        buttonSettingsRoundCorners,
        buttonSettingsBorderWidth,
        buttonSettingsRegularBorder,
        buttonSettingsRegularFill,
        buttonSettingsHorizontalPadding,
        buttonSettingsVerticalPadding,
        buttonSettingsHoverClickedFill,
        buttonSettingsHoverClickedBorder,
        buttonSettingsTextColorRegular,
        buttonSettingsTextColorHover,
        buttonSettingsTextColorClicked,
        mobileTextAlignment,
        navBarTextHoverColor,
        navBarTextClickedColor,
        structure
    } = config;

    const onClick = useCallback(() => {
        if (!isConstructor && !disabledListClick) {
            setOpen(value => !value);
        }
    }, [isConstructor, disabledListClick]);

    return (
        <Container className={"navbar-mobile"} navBarBehavior={navBarBehavior} stickyOffset={stickyOffset}
                   isConstructor={isConstructor}>
            <Wrapper height={mobileHeight} navBarRegularColor={navBarRegularColor} data-mobile-header={true}>
                <IconWrapper onClick={onClick} data-mobile-menu-button={true}>
                    <Icon icon={BurgerIcon} color={'#ffffff'}/>
                </IconWrapper>
                <LogoWrapper mobileLogoAlignment={mobileLogoAlignment}>
                    <Logo>
                        <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)}
                                   crop={logoCropperOptions}/>
                    </Logo>
                </LogoWrapper>
            </Wrapper>
            <ListWrapper data-mobile-menu={true} mobileHeight={mobileHeight} offsetTop={stickyOffset + mobileHeight}
                         isConstructor={isConstructor} open={open}
                         navBarRegularColor={navBarRegularColor}
                         mobileFontSize={mobileFontSize} navBarTextFontFamily={navBarTextFontFamily}
                         navBarTextBold={navBarTextBold}
                         navBarTextItalic={navBarTextItalic}
                         navBarTextUnderline={navBarTextUnderline}
                         navBarTextRegularColor={navBarTextRegularColor}
                         navBarTextSpacing={navBarTextSpacing}
            >
                {
                    structure?.map(el => {
                        let component = 'any';
                        if (el.type === 'button') {
                            component = (
                                <NavBarButton
                                    {...el}
                                    mobileTextAlignment={mobileTextAlignment}
                                    disabledRedirect={isConstructor}
                                    buttonSettingsRoundCorners={buttonSettingsRoundCorners}
                                    buttonSettingsBorderWidth={buttonSettingsBorderWidth}
                                    buttonSettingsRegularBorder={buttonSettingsRegularBorder}
                                    buttonSettingsRegularFill={buttonSettingsRegularFill}
                                    buttonSettingsVerticalPadding={buttonSettingsVerticalPadding}
                                    buttonSettingsHorizontalPadding={buttonSettingsHorizontalPadding}
                                    buttonSettingsHoverClickedBorder={buttonSettingsHoverClickedBorder}
                                    buttonSettingsHoverClickedFill={buttonSettingsHoverClickedFill}
                                    buttonSettingsTextColorRegular={buttonSettingsTextColorRegular}
                                    buttonSettingsTextColorHover={buttonSettingsTextColorHover}
                                    buttonSettingsTextColorClicked={buttonSettingsTextColorClicked}
                                />
                            );
                        } else if (el.type === 'page') {
                            component = (
                                <NavBarPage
                                    {...el}
                                    disabledRedirect={disabledRedirect}
                                    disabledListClick={disabledListClick}
                                    navBarTextHoverColor={navBarTextHoverColor}
                                    navBarTextClickedColor={navBarTextClickedColor}
                                    mobileTextAlignment={mobileTextAlignment}
                                    isStatic={isStatic}
                                />
                            );
                        }
                        return <Fragment key={el.id}>{component}</Fragment>;
                    })
                }
            </ListWrapper>
        </Container>
    );
};

const Container = styled.div`
  z-index: 1001;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({navBarBehavior, stickyOffset, isConstructor}) =>
          navBarBehavior === 'frozen' && !isConstructor &&
          css`
            position: sticky;
            top: ${stickyOffset}px;
          `};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({mobileHeight}) => mobileHeight}px;
  width: 100%;
  height: ${({isConstructor}) => isConstructor ? 'auto' : 0};
  ${({isConstructor}) =>
          isConstructor &&
          css`
            max-height: 350px;
          `};
  transition: height 0.5s ease;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  overflow-x: hidden;
  overflow-y: auto;
  font-size: ${({mobileFontSize}) => mobileFontSize}px;
  font-family: ${({navBarTextFontFamily}) => navBarTextFontFamily};
  font-weight: ${({navBarTextBold}) => (navBarTextBold ? 'bold' : 'normal')};
  font-style: ${({navBarTextItalic}) => (navBarTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({navBarTextUnderline}) => (navBarTextUnderline ? 'underline' : 'none')};
  color: ${({navBarTextRegularColor}) => navBarTextRegularColor};
  ${({offsetTop, open, isConstructor}) =>
          !isConstructor && open &&
          css`
            height: calc(100vh - ${offsetTop}px);
          `};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 13px 16px 15px;
  border: solid 1px rgba(164, 198, 225, 0.39);
  height: ${({height}) => height}px;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  align-items: center;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: ${({mobileLogoAlignment}) => {
    if (mobileLogoAlignment === 'center') {
      return 'center';
    } else if (mobileLogoAlignment === 'right') {
      return 'flex-end';
    }
    return '';
  }};
`;

const Logo = styled.div`
  width: ${logoImageWidth}px;
  height: ${logoImageHeight}px;
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
`;

NavBarMobile.propTypes = {
    config: PropTypes.object,
    stickyOffset: PropTypes.number,
};

export default NavBarMobile;
