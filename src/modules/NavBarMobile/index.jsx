import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCropperQueryString } from '../../utils/getCropperQueryString';
import { logoImageHeight, logoImageWidth } from '../../consts';
import { Icon } from '../../components/Icon';
import BurgerIcon from '../../icons/BurgerIcon';
import CropImage from '../../components/CropImage';

const NavBarMobile = ({ config }) => {
  const { mobileHeight, navBarRegularColor, mobileLogoAlignment, logoSrc, logoCropperOptions } = config;
  return (
    <Wrapper height={mobileHeight} navBarRegularColor={navBarRegularColor}>
      <IconWrapper>
        <Icon icon={BurgerIcon} color={'#ffffff'} />
      </IconWrapper>
      <LogoWrapper mobileLogoAlignment={mobileLogoAlignment}>
        <Logo>
          <CropImage source={logoSrc + getCropperQueryString(logoCropperOptions)} crop={logoCropperOptions} />
        </Logo>
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 240px;
  padding: 15px 13px 16px 15px;
  border-radius: 3px;
  border: solid 1px rgba(164, 198, 225, 0.39);
  height: ${({ height }) => height}px;
  background-color: ${({ navBarRegularColor }) => navBarRegularColor};
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: ${({ mobileLogoAlignment }) => {
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
  config: PropTypes.object
};

export default NavBarMobile;
