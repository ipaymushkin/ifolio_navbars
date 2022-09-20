import React, {Fragment} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {logoImageHeight, logoImageWidth} from '../../consts.js';
import {getCropperQueryString} from '../../utils/getCropperQueryString.js';
import NavBarPage from './Page.js';
import NavBarButton from './Button.js';
import CropImage from '../../components/CropImage/index.js';

const LogoElement = ({logoSrc, logoCropperOptions, hideElement}) => {
    return (
        <Logo hideElement={hideElement}>
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
                    isPreview = false
                }) => {
    const {
        height,
        navBarRegularColor,
        navBarHoverColor,
        navBarClickedColor,
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

    return (
        <Wrapper height={height} navBarRegularColor={navBarRegularColor} navBarBehavior={navBarBehavior}
                 stickyOffset={stickyOffset} className={"navbar-desktop"}>
            <Menu height={height}>
                <LogoElement logoSrc={logoSrc} logoCropperOptions={logoCropperOptions} hideElement={hideLogo || logoAlignment !== 'left'} />
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
                            <PreviewText>Navigation will preview here once created</PreviewText> :
                            <>
                                {structure?.map((el) => {
                                    let component = null;
                                    if (el.type === 'button') {
                                        component = (
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
                                            />
                                        );
                                    }
                                    return <Fragment key={el.id}>{component}</Fragment>;
                                })}
                            </>
                    }
                </Container>
                <LogoElement logoSrc={logoSrc} logoCropperOptions={logoCropperOptions} hideElement={hideLogo || logoAlignment !== 'right'} />
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  display: flex;
  height: ${({height}) => height}px;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  padding: 0 50px;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-shrink: 0;
  z-index: 1002;

  ${({navBarBehavior, stickyOffset}) =>
          navBarBehavior === 'frozen' &&
          css`
            position: sticky;
            top: ${stickyOffset}px;
          `};
`;

const Logo = styled.div`
  width: ${logoImageWidth}px;
  height: ${logoImageHeight}px;
  opacity: ${({hideElement}) => hideElement ? 0 : 1};
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1120px;
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
  display: flex;
  flex: 1 1 auto;
  margin: 0 24px;
  justify-content: ${({navBarTextAlignment}) => navBarTextAlignment};
  font-size: ${({navBarTextFontSize}) => navBarTextFontSize}px;
  font-family: ${({navBarTextFontFamily}) => navBarTextFontFamily};
  font-weight: ${({navBarTextBold}) => (navBarTextBold ? 'bold' : 'normal')};
  font-style: ${({navBarTextItalic}) => (navBarTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({navBarTextUnderline}) => (navBarTextUnderline ? 'underline' : 'none')};
  color: ${({navBarTextRegularColor}) => navBarTextRegularColor};
  height: 100%;
  align-items: center;
  width: calc(100% - 250px);
  overflow-x: auto;
  overflow-y: hidden;

  > div {
    margin-right: ${({navBarTextSpacing}) => navBarTextSpacing}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default NavBar;
