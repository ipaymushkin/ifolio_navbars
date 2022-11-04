import React, {Fragment, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {logoImageWidth} from '../../consts.js';
import {getCropperQueryString} from '../../utils/getCropperQueryString.js';
import NavBarPage from './Page.js';
import NavBarButton from './Button.js';
import CropImage from '../../components/CropImage/index.js';

const LogoElement = ({logoSrc, logoCropperOptions, hideElement, height}) => {
    if (hideElement) return null;
    return (
        <Logo hideElement={hideElement} height={height}>
            <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)} crop={logoCropperOptions}/>
        </Logo>
    )
}

const NavBar = ({
                    config,
                    disabledRedirect = false,
                    disabledListClick = false,
                    stickyOffset = 0,
                    isStatic = false,
                    hideLogo = false,
                    isPreview = false,
                    isListView = false,
                    rootId = "root"
                }) => {
    const ref = useRef();
    const {
        height,
        navBarRegularColor,
        navBarHoverColor,
        navBarClickedColor,
        navBarRegularOnScrollColor,
        logoAlignment,
        logoCropperOptions,
        logoSrc,
        navBarTextAlignment,
        navBarTextFontSize,
        navBarTextFontFamily,
        navBarTextBold,
        navBarTextItalic,
        navBarTextUnderline,
        navBarTextRegularColor,
        structure,
        navBarTextHoverColor,
        navBarTextClickedColor,
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
        navBarBehavior,
        dropdownSettingsInactiveFill,
        dropdownSettingsInactiveBorder,
        dropdownSettingsHoverClickedFill,
        dropdownSettingsHoverClickedBorder,
        dropdownSettingsTextColorRegular,
        dropdownSettingsTextColorHover,
        dropdownSettingsTextColorClicked,
        dropdownSettingsTextFontFamily,
        dropdownSettingsTextFontSize,
        dropdownSettingsTextBold,
        dropdownSettingsTextUnderline,
        dropdownSettingsTextItalic,
        dropdownSettingsHorizontalPadding,
        dropdownSettingsVerticalPadding
    } = config;

    useEffect(() => {
        const handleScroll = () => {
            if (navBarRegularColor === 'transparent') {
                let color = navBarRegularOnScrollColor;
                if (window.scrollY === 0) {
                    if (isPreview) {
                        color = "#000";
                    } else {
                        color = navBarRegularColor;
                    }
                }
                ref.current.style.backgroundColor = color;
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [navBarRegularColor, navBarRegularOnScrollColor, isPreview])

    return (
        <Wrapper ref={ref} height={height} navBarRegularColor={navBarRegularColor} isPreview={isPreview}
                 navBarBehavior={navBarBehavior}
                 stickyOffset={stickyOffset} className={"navbar-desktop"} data-color={navBarRegularColor}
                 data-coloronscroll={navBarRegularOnScrollColor} isListView={isListView}>
            <Menu height={height}>
                <LogoElement logoSrc={logoSrc} logoCropperOptions={logoCropperOptions}
                             hideElement={hideLogo || logoAlignment !== 'left'} height={height}/>
                <Container
                    data-navbarcontainer={true}
                    navBarTextAlignment={navBarTextAlignment}
                    navBarTextFontSize={navBarTextFontSize}
                    navBarTextFontFamily={navBarTextFontFamily}
                    navBarTextBold={navBarTextBold}
                    navBarTextItalic={navBarTextItalic}
                    navBarTextUnderline={navBarTextUnderline}
                    navBarTextRegularColor={navBarTextRegularColor}
                    navBarTextSpacing={navBarTextSpacing}
                    // logoAlignment={logoAlignment}
                >
                    {
                        structure?.length === 0 && isPreview ?
                            <PreviewText navBarTextAlignment={navBarTextAlignment}>Navigation will preview here once
                                created</PreviewText> :
                            <>
                                {structure?.map((el) => {
                                    let component = null;
                                    if (el.type === 'button') {
                                        component = (
                                            <NavBarButtonWrapper>
                                                <NavBarButton
                                                    {...el}
                                                    disabledRedirect={disabledRedirect}
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
                                                    navBarTextFontSize={navBarTextFontSize}
                                                    isPreview={isPreview}
                                                />
                                            </NavBarButtonWrapper>
                                        );
                                    } else if (el.type === 'page') {
                                        component = (
                                            <NavBarPage
                                                {...el}
                                                disabledRedirect={disabledRedirect}
                                                disabledListClick={disabledListClick}
                                                navBarTextHoverColor={navBarTextHoverColor}
                                                navBarTextClickedColor={navBarTextClickedColor}
                                                dropdownSettingsInactiveFill={dropdownSettingsInactiveFill}
                                                dropdownSettingsInactiveBorder={dropdownSettingsInactiveBorder}
                                                dropdownSettingsHoverClickedFill={dropdownSettingsHoverClickedFill}
                                                dropdownSettingsHoverClickedBorder={dropdownSettingsHoverClickedBorder}
                                                dropdownSettingsTextColorRegular={dropdownSettingsTextColorRegular}
                                                dropdownSettingsTextColorHover={dropdownSettingsTextColorHover}
                                                dropdownSettingsTextColorClicked={dropdownSettingsTextColorClicked}
                                                dropdownSettingsTextFontFamily={dropdownSettingsTextFontFamily}
                                                dropdownSettingsTextFontSize={dropdownSettingsTextFontSize}
                                                dropdownSettingsTextBold={dropdownSettingsTextBold}
                                                dropdownSettingsTextUnderline={dropdownSettingsTextUnderline}
                                                dropdownSettingsTextItalic={dropdownSettingsTextItalic}
                                                dropdownSettingsHorizontalPadding={dropdownSettingsHorizontalPadding}
                                                dropdownSettingsVerticalPadding={dropdownSettingsVerticalPadding}
                                                isStatic={isStatic}
                                                navBarHoverColor={navBarHoverColor}
                                                navBarClickedColor={navBarClickedColor}
                                                rootId={rootId}
                                                isPreview={isPreview}
                                            />
                                        );
                                    }
                                    return <Fragment key={el.id}>{component}</Fragment>;
                                })}
                            </>
                    }
                </Container>
                <LogoElement logoSrc={logoSrc} logoCropperOptions={logoCropperOptions}
                             hideElement={hideLogo || logoAlignment !== 'right'} height={height}/>
            </Menu>
        </Wrapper>
    );
};

NavBar.propTypes = {
    config: PropTypes.object,
    disabledRedirect: PropTypes.bool,
    disabledListClick: PropTypes.bool,
    stickyOffset: PropTypes.number,
    isStatic: PropTypes.bool,
    hideLogo: PropTypes.bool,
    isPreview: PropTypes.bool,
};

const PreviewText = styled.div`
  font-family: Montserrat-bold, sans-serif;
  display: flex !important;
  align-items: center;
  justify-content: ${({navBarTextAlignment}) => {
    if (navBarTextAlignment === 'right') {
      return 'flex-end';
    } else if (navBarTextAlignment === 'left') {
      return 'flex-start';
    }
    return 'center';
  }};
  width: auto;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  height: ${({height}) => height}px;
  background-color: ${({
                         navBarRegularColor,
                         isPreview,
                         isListView
                       }) => (isPreview || isListView) && navBarRegularColor === 'transparent' ? "black" : navBarRegularColor};
  padding: 0 24px;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-shrink: 0;
  z-index: 1002;
  transition: background-color .2s ease-in-out;

  ${({navBarBehavior, stickyOffset, navBarRegularColor, isPreview, isListView}) => {
    if (!isListView) {
      if (navBarRegularColor === 'transparent') {
        if (navBarBehavior === 'frozen') {
          if (isPreview) {
            return css`
              position: sticky;
              top: ${stickyOffset}px;
            `;
          }
          return css`
            position: fixed;
            top: ${stickyOffset}px;
          `;
        }
        return css`
          position: absolute;
          top: ${stickyOffset}px;
        `;
      } else if (navBarBehavior === 'frozen') {
        return css`
          position: sticky;
          top: ${stickyOffset}px;
        `;
      }
    }
    return "";
  }}
`;

const Logo = styled.div`
  width: ${logoImageWidth}px;
  height: ${({height}) => height}px;
  opacity: ${({hideElement}) => hideElement ? 0 : 1};
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1367px;
  margin: auto;
  height: ${({height}) => height}px;
`;

/*
  margin: ${({logoAlignment}) => {
    if (logoAlignment === 'right') {
      return '0 24px 0 0';
    }
    return '0 0 0 24px';
  }};
 */

const Container = styled.div`
  display: inline;
  white-space: nowrap;
  margin: 0 24px;
  text-align: ${({navBarTextAlignment}) => navBarTextAlignment};
  font-size: ${({navBarTextFontSize}) => navBarTextFontSize}px;
  font-family: ${({navBarTextFontFamily}) => navBarTextFontFamily};
  font-weight: ${({navBarTextBold}) => (navBarTextBold ? 'bold' : 'normal')};
  font-style: ${({navBarTextItalic}) => (navBarTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({navBarTextUnderline}) => (navBarTextUnderline ? 'underline' : 'none')};
  color: ${({navBarTextRegularColor}) => navBarTextRegularColor};
  height: 100%;
  width: calc(100% - ${logoImageWidth + 50}px);
  overflow-x: auto;
  overflow-y: hidden;

  > div {
    margin-right: ${({navBarTextSpacing}) => navBarTextSpacing}px;
    display: inline-block;
    vertical-align: middle;
    transition: all 300ms ease-out;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const NavBarButtonWrapper = styled.div`
`;

export default NavBar;
