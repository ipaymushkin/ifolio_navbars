import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Row = ({children, onClick, mobileTextAlignment, link, isDropdown}) => {

    return (
        <Wrapper onClick={onClick} mobileTextAlignment={mobileTextAlignment} data-link={link} data-isdropdown={isDropdown}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 15px;
    display: flex;
    justify-content: ${({mobileTextAlignment}) => mobileTextAlignment === 'center' ? 'center' : 'flex-start'};
`

Row.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    link: PropTypes.string,
    isDropdown: PropTypes.bool,
};

export default Row;
