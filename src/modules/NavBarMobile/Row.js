import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Row = ({
                 children,
                 onClick,
                 mobileTextAlignment,
                 link,
                 isDropdown,
                 navBarTextHoverColor,
                 navBarTextClickedColor,
                 navBarHoverColor,
                 navBarClickedColor,
                 isButton
             }) => {

    return (
        <Wrapper onClick={onClick} mobileTextAlignment={mobileTextAlignment} data-link={link}
                 data-isdropdown={isDropdown}
                 navBarTextHoverColor={navBarTextHoverColor}
                 navBarTextClickedColor={navBarTextClickedColor}
                 navBarHoverColor={navBarHoverColor}
                 navBarClickedColor={navBarClickedColor}
                 isButton={isButton}
        >
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: ${({mobileTextAlignment}) => mobileTextAlignment === 'center' ? 'center' : 'flex-start'};

  ${({isButton}) => {
    if (!isButton) {
      return {
        cursor: 'pointer'
      }
    }
  }}
  &:hover {
    background: ${({navBarHoverColor}) => navBarHoverColor};
    color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
  }

  &:active {
    background: ${({navBarClickedColor}) => navBarClickedColor};
    color: ${({navBarTextClickedColor}) => navBarTextClickedColor};
  }

`

Row.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    link: PropTypes.string,
    isDropdown: PropTypes.bool,
};

export default Row;
