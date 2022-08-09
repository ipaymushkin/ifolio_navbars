import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { logoImageHeight, logoImageWidth } from '../../consts.js';
import { getCropperQueryString } from '../../utils/getCropperQueryString.js';
import NavBarPage from './Page.js';
import NavBarButton from './Button.js';
import CropImage from '../../components/CropImage/index.js';

const NavBar = ({ config, disabledRedirect = false, disabledListClick = false, stickyOffset = 0 }) => {
  const {
    height,
    navBarRegularColor,
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

  const LogoComponent = (
    <Logo>
      <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)} crop={logoCropperOptions} />
    </Logo>
  );
  return (
    <Wrapper height={height} navBarRegularColor={navBarRegularColor} navBarBehavior={navBarBehavior} stickyOffset={stickyOffset} className={"navbar-desktop"}>
      <Menu height={height}>
        {logoAlignment === 'left' && LogoComponent}
        <Container
          navBarTextAlignment={navBarTextAlignment}
          navBarTextFontSize={navBarTextFontSize}
          navBarTextFontFamily={navBarTextFontFamily}
          navBarTextBold={navBarTextBold}
          navBarTextItalic={navBarTextItalic}
          navBarTextUnderline={navBarTextUnderline}
          navBarTextRegularColor={navBarTextRegularColor}
          navBarTextSpacing={navBarTextSpacing}
          logoAlignment={logoAlignment}
        >
          {(structure || []).map((el) => {
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
                />
              );
            }
            return <Fragment key={el.id}>{component}</Fragment>;
          })}
        </Container>
        {logoAlignment === 'right' && LogoComponent}
      </Menu>
    </Wrapper>
  );
};

NavBar.propTypes = {
  config: PropTypes.object,
  disabledRedirect: PropTypes.bool,
  disabledListClick: PropTypes.bool,
  stickyOffset: PropTypes.number,
};

const Wrapper = styled.div`
  display: flex;
  height: ${({ height }) => height}px;
  background-color: ${({ navBarRegularColor }) => navBarRegularColor};
  padding: 0 50px;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-shrink: 0;
  z-index: 1001;

  ${({ navBarBehavior, stickyOffset }) =>
    navBarBehavior === 'frozen' &&
    css`
      position: sticky;
      top: ${stickyOffset}px;
    `};
`;

const Logo = styled.div`
  width: ${logoImageWidth}px;
  height: ${logoImageHeight}px;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: auto;
  height: ${({ height }) => height}px;
`;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin: ${({ logoAlignment }) => {
    if (logoAlignment === 'right') {
      return '0 24px 0 0';
    }
    return '0 0 0 24px';
  }};
  justify-content: ${({ navBarTextAlignment }) => navBarTextAlignment};
  font-size: ${({ navBarTextFontSize }) => navBarTextFontSize}px;
  font-family: ${({ navBarTextFontFamily }) => navBarTextFontFamily};
  font-weight: ${({ navBarTextBold }) => (navBarTextBold ? 'bold' : 'normal')};
  font-style: ${({ navBarTextItalic }) => (navBarTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({ navBarTextUnderline }) => (navBarTextUnderline ? 'underline' : 'none')};
  color: ${({ navBarTextRegularColor }) => navBarTextRegularColor};
  height: 100%;
  > div {
    margin-right: ${({ navBarTextSpacing }) => navBarTextSpacing}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default NavBar;
