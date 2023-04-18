import React, {Fragment, useCallback, useEffect, useState, useRef} from 'react';
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
                          disabledListClick = false, isDesktop = false
                      }) => {

    const [open, setOpen] = useState(isConstructor);
    const ref = useRef();

    useEffect(() => {
        if (!isConstructor) {
            document.body.style.overflowY = open ? 'hidden' : "auto";
        }
    }, [isConstructor, open])

    const {
        navBarHoverColor,
        navBarClickedColor,
        mobileHeight,
        navBarRegularColor,
        navBarRegularOnScrollColor,
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

    useEffect(() => {
        const handleScroll = () => {
            if (navBarRegularColor === 'transparent') {
                ref.current.style.backgroundColor = window.scrollY === 0 && !open ? navBarRegularColor : navBarRegularOnScrollColor;
            }
        }
        if (navBarRegularColor === 'transparent') ref.current.style.backgroundColor = open ? navBarRegularOnScrollColor : navBarRegularColor;
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [open])

    let wrapperColor = navBarRegularColor;
    if (isConstructor && navBarRegularColor === 'transparent') {
        wrapperColor = "#000";
    } else if (open) {
        wrapperColor = navBarRegularColor === 'transparent' ? navBarRegularOnScrollColor : navBarRegularColor
    }


    return (
        <Container className={"navbar-mobile navbar-hidden"} navBarBehavior={navBarBehavior} stickyOffset={stickyOffset}
                   isConstructor={isConstructor} navBarRegularColor={navBarRegularColor}>
            <Wrapper height={mobileHeight} ref={ref}
                     navBarRegularColor={wrapperColor}
                     data-mobile-header={true}>
                <IconWrapper onClick={onClick} data-mobile-menu-button={true}>
                    <Icon icon={BurgerIcon} color={'#ffffff'}/>
                </IconWrapper>
                <LogoWrapper mobileLogoAlignment={mobileLogoAlignment}>
                    <LogoInner>
                        <Logo height={mobileHeight}>
                            <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)}
                                       crop={logoCropperOptions}/>
                        </Logo>
                    </LogoInner>
                </LogoWrapper>
            </Wrapper>
            <ListWrapper data-mobile-menu={true} mobileHeight={mobileHeight} offsetTop={stickyOffset + mobileHeight}
                         isConstructor={isConstructor} open={open}
                         navBarRegularColor={navBarRegularColor === 'transparent' ? isConstructor ? "#000" : navBarRegularOnScrollColor : navBarRegularColor}
                         mobileFontSize={mobileFontSize} navBarTextFontFamily={navBarTextFontFamily}
                         navBarTextBold={navBarTextBold}
                         navBarTextItalic={navBarTextItalic}
                         navBarTextUnderline={navBarTextUnderline}
                         navBarTextRegularColor={navBarTextRegularColor}
                         navBarTextSpacing={navBarTextSpacing}
                         isDesktop={isDesktop}
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
                                    isConstructor={isConstructor}
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
                                    isConstructor={isConstructor}
                                    navBarHoverColor={navBarHoverColor}
                                    navBarClickedColor={navBarClickedColor}

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
  width: 100%;

  ${({navBarBehavior, stickyOffset, isConstructor, navBarRegularColor}) => {
    if (navBarRegularColor === 'transparent' && !isConstructor) {
      if (navBarBehavior === 'frozen') {
        return css`
          position: fixed;
          top: ${stickyOffset}px;
        `;
      }
      return css`
        position: absolute;
        top: ${stickyOffset}px;
      `;
    } else if (navBarBehavior === 'frozen' && !isConstructor) {
      return css`
        position: sticky;
        top: ${stickyOffset}px;
      `;
    }
    return "";
  }
  }`;

const ListWrapper = styled.div

    `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: ${({mobileHeight}) => mobileHeight}px;
      ${({isDesktop}) => {
          if (!isDesktop) {
              return {
                  width: '100%'
              }
          }
      }}
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
  padding: 15px 13px 16px 5px;
  //border: solid 1px rgba(164, 198, 225, 0.39);
  height: ${({height}) => height}px;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  transition: background-color .2s ease-in-out;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: calc(100% - 57px);
  justify-content: ${({mobileLogoAlignment}) => {
    if (mobileLogoAlignment === 'center') {
      return 'center';
    } else if (mobileLogoAlignment === 'right') {
      return 'flex-end';
    }
    return '';
  }};
`;

const LogoInner = styled.div`
  display: flex;
  width: 250px;
`

const Logo = styled.div`
  width: 100%;
  height: ${({height}) => height}px;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  cursor: pointer;
  > div {
    margin: auto;
  }
`;

NavBarMobile.propTypes = {
    config: PropTypes.object,
    stickyOffset: PropTypes.number,
};

export default NavBarMobile;
