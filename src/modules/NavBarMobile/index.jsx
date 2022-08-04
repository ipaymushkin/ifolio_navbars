import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {getCropperQueryString} from '../../utils/getCropperQueryString';
import {logoImageHeight, logoImageWidth} from '../../consts';
import {Icon} from '../../components/Icon';
import BurgerIcon from '../../icons/BurgerIcon';
import CropImage from '../../components/CropImage';

const NavBarMobile = ({config, stickyOffset = 0}) => {
    const {mobileHeight, navBarRegularColor, mobileLogoAlignment, logoSrc, logoCropperOptions, navBarBehavior} = config;
    return (
        <Wrapper height={mobileHeight} navBarRegularColor={navBarRegularColor} navBarBehavior={navBarBehavior} stickyOffset={stickyOffset}>
            <IconWrapper>
                <Icon icon={BurgerIcon} color={'#ffffff'}/>
            </IconWrapper>
            <LogoWrapper mobileLogoAlignment={mobileLogoAlignment}>
                <Logo>
                    <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)} crop={logoCropperOptions}/>
                </Logo>
            </LogoWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  z-index: 1001;
  display: flex;
  width: 100%;
  padding: 15px 13px 16px 15px;
  border-radius: 3px;
  border: solid 1px rgba(164, 198, 225, 0.39);
  height: ${({height}) => height}px;
  background-color: ${({navBarRegularColor}) => navBarRegularColor};
  align-items: center;
  position: relative;
  ${({navBarBehavior, stickyOffset}) =>
          navBarBehavior === 'frozen' &&
          css`
            position: sticky;
            top: ${stickyOffset}px;
          `};
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
