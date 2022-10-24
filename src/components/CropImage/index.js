import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Index = forwardRef(({ height, id, crop, source, alt, ignoreMaxHeight }, ref) => {
  const styles = { width: '100%', height: '100%', objectFit: 'contain' };
  if (!ignoreMaxHeight) {
    styles.maxHeight = '600px';
  }
  return (
    <CropArea ref={ref} height={height} id={id}>
      <CropImageWrapper {...crop.imagePosition}>
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
`;

const CropArea = styled.div`
  width: 100%;
  height: ${({ height }) =>
    height ? height + 'px' : '100%'};
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
};

Index.defaultProps = {
  id: '',
  alt: '',
  ignoreMaxHeight: false,
  crop: {}
};

export default Index;
