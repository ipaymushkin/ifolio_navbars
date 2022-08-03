import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = ({
  icon,
  opacity = 1,
  hoverOpacity = 1,
  color = '#000',
  hoverColor = color,
  size = 20,
  rotate,
  noCursor,
  padding = 0,
  width,
  height,
  tableIcon
}) => (
  <IconWrapper
    color={color}
    hoverColor={hoverColor}
    size={size}
    width={width}
    height={height}
    opacity={opacity}
    hoverOpacity={hoverOpacity}
    rotate={rotate}
    noCursor={noCursor}
    padding={padding}
    tableIcon={tableIcon}
  >
    {_renderIcon(icon)}
  </IconWrapper>
);

const _renderIcon = (icon) => {
  const Icon = icon;

  if (typeof icon === 'function') {
    return <Icon />;
  } else if (typeof icon === 'string') {
    return icon;
  }

  return null;
};

const IconWrapper = styled.div`
  cursor: ${({ noCursor }) => (noCursor ? 'initial' : 'pointer')};
  display: ${({ tableIcon }) => (tableIcon ? 'table-cell' : 'flex')};
  flex: 0 0 auto;
  align-items: center;
  font-size: ${({ tableIcon }) => !tableIcon && '0'};
  width: ${({ size, width }) => (width ? width : size)}px;
  height: ${({ size, height }) => (height ? height : size)}px;
  transform: rotate(${({ rotate }) => rotate}deg);
  transform-origin: 50% 50%;
  padding: ${({ padding }) => padding}px;

  :hover {
    svg {
      fill: ${({ hoverColor }) => hoverColor};
      opacity: ${({ hoverOpacity }) => hoverOpacity};
    }
  }

  svg {
    fill: ${({ color }) => color};
    opacity: ${({ opacity }) => opacity};
    width: 100%;
    height: 100%;
    transition: all ease-in-out 0.3s;
    vertical-align: ${({ tableIcon }) => tableIcon && 'middle'};
  }
`;

Icon.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.number,
  padding: PropTypes.number,
  opacity: PropTypes.number,
  hoverOpacity: PropTypes.number,
  rotate: PropTypes.number,
  noCursor: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  tableIcon: PropTypes.bool
};

Icon.defaultProps = {
  opacity: 1,
  color: '#000',
  size: 20,
  padding: 0,
  rotate: 0,
  noCursor: false,
  tableIcon: false
};

export { Icon };
