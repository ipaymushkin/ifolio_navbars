import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {getCropperQueryString} from '../../utils/getCropperQueryString.js';
import {logoImageHeight, logoImageWidth} from '../../consts.js';
import {Icon} from "../../components/Icon";
import BurgerIcon from '../../icons/BurgerIcon.js';
import CropImage from '../../components/CropImage/index.js';

const NavBarMobile = ({config, stickyOffset = 0, isConstructor = false}) => {
    const {mobileHeight, navBarRegularColor, mobileLogoAlignment, logoSrc, logoCropperOptions, navBarBehavior} = config;
    return (
        <Container className={"navbar-mobile"} navBarBehavior={navBarBehavior} stickyOffset={stickyOffset}
                   isConstructor={isConstructor}>
            <Wrapper height={mobileHeight} navBarRegularColor={navBarRegularColor}>
                <IconWrapper>
                    <Icon icon={BurgerIcon} color={'#ffffff'}/>
                </IconWrapper>
                <LogoWrapper mobileLogoAlignment={mobileLogoAlignment}>
                    <Logo>
                        <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)}
                                   crop={logoCropperOptions}/>
                    </Logo>
                </LogoWrapper>
            </Wrapper>
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
`

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 13px 16px 15px;
  border: solid 1px rgba(164, 198, 225, 0.39);
  height: ${({height}) => height}px;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  align-items: center;
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
