import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Index = forwardRef(({ height, id, crop, source, alt, ignoreMaxHeight, isTurntable, isHero }, ref) => {
  const styles = { width: '100%', height: '100%', objectFit: 'contain' };
  if (!ignoreMaxHeight) {
    styles.maxHeight = '600px';
  }
  return (
    <CropArea ref={ref} isTurntable={isTurntable} isHero={isHero} height={height} id={id}>
      <CropImageWrapper {...crop.imagePosition} isHero={isHero}>
        <img src={source} alt={alt} style={styles} />
      </CropImageWrapper>
    </CropArea>
  );
});

const CropImageWrapper = styled.div`
  position: relative;
  left: ${({ x }) => x || 0}%;
  top: ${({ y }) => y || 0}%;
  width: ${({ width }) => width || 100}%;
  height: ${({ height }) => height || 100}%;

  ${({ isHero }) =>
    isHero &&
    css`
      position: static;
      img {
        object-fit: cover;
        //margin-left: auto;
        //margin-right: auto;
        //width: auto !important;
      }
    `};
`;

const CropArea = styled.div`
  width: 100%;
  height: ${({ height, isTurntable, isHero }) =>
    isTurntable ? '100%' : isHero ? '100%' : height ? height + 'px' : '100%'};
  position: relative;
  background-color: transparent;
  overflow: hidden;
`;

Index.propTypes = {
  height: PropTypes.number,
  id: PropTypes.string,
  crop: PropTypes.object,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
  ignoreMaxHeight: PropTypes.bool,
  isTurntable: PropTypes.bool,
  isHero: PropTypes.bool
};

Index.defaultProps = {
  id: '',
  alt: '',
  ignoreMaxHeight: false,
  crop: {}
};

export default Index;
