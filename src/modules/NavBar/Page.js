import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';
import { Icon } from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import { openLinkInNewTab } from '../../utils/openLinkInNewTab.js';

const NavBarPage = memo(
  ({
    disabledRedirect,
    disabledListClick,
    link,
    title,
    navBarTextHoverColor,
    navBarTextClickedColor,
    children,
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
  }) => {
    const [open, setOpen] = useState(false);

    const ref = useOutsideClick(() => {
      setOpen(false);
    });

    const isDropdown = children.length > 0;

    const onClick = useCallback(() => {
      if (isDropdown && !disabledListClick) {
        setOpen((state) => !state);
      } else if (!isDropdown && !disabledRedirect && link) {
        openLinkInNewTab(link);
      }
    }, [disabledListClick, disabledRedirect, isDropdown, link]);

    return (
      <Container ref={ref}>
        <Wrapper
          navBarTextHoverColor={navBarTextHoverColor}
          navBarTextClickedColor={navBarTextClickedColor}
          onClick={onClick}
        >
          {title}{' '}
          {isDropdown && (
            <IconWrapper>
              {open ? (
                <Icon icon={ArrowIcon} rotate={-90} color={'#ffffff'} />
              ) : (
                <Icon icon={ArrowIcon} rotate={180} color={'#ffffff'} />
              )}
            </IconWrapper>
          )}
        </Wrapper>
        {open && (
          <DropdownWrapper>
            {children.map((el) => (
              <DropdownElement
                key={el.id}
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
                onClick={() => {
                  if (el.link && !disabledRedirect) {
                    openLinkInNewTab(el.link);
                    setOpen(false);
                  } else {
                    setOpen(false);
                  }
                }}
              >
                {el.title}
              </DropdownElement>
            ))}
          </DropdownWrapper>
        )}
      </Container>
    );
  }
);

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;

  &:hover {
    color: ${({ navBarTextHoverColor }) => navBarTextHoverColor};
  }
  &:active {
    color: ${({ navBarTextClickedColor }) => navBarTextClickedColor};
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
`;

const IconWrapper = styled.div``;

const DropdownElement = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  background: ${({ dropdownSettingsInactiveFill }) => dropdownSettingsInactiveFill};
  border: 2px solid ${({ dropdownSettingsInactiveBorder }) => dropdownSettingsInactiveBorder};
  color: ${({ dropdownSettingsTextColorRegular }) => dropdownSettingsTextColorRegular};
  font-size: ${({ dropdownSettingsTextFontSize }) => dropdownSettingsTextFontSize}px;
  font-family: ${({ dropdownSettingsTextFontFamily }) => dropdownSettingsTextFontFamily};
  font-weight: ${({ dropdownSettingsTextBold }) => (dropdownSettingsTextBold ? 'bold' : 'normal')};
  font-style: ${({ dropdownSettingsTextItalic }) => (dropdownSettingsTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({ dropdownSettingsTextUnderline }) => (dropdownSettingsTextUnderline ? 'underline' : 'none')};
  padding: ${({ dropdownSettingsVerticalPadding, dropdownSettingsHorizontalPadding }) =>
    `${dropdownSettingsVerticalPadding}px ${dropdownSettingsHorizontalPadding}px`};

  &:hover {
    background: ${({ dropdownSettingsHoverClickedFill }) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({ dropdownSettingsHoverClickedBorder }) => dropdownSettingsHoverClickedBorder};
    color: ${({ dropdownSettingsTextColorHover }) => dropdownSettingsTextColorHover};
  }
  &:active {
    background: ${({ dropdownSettingsHoverClickedFill }) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({ dropdownSettingsHoverClickedBorder }) => dropdownSettingsHoverClickedBorder};
    color: ${({ dropdownSettingsTextColorClicked }) => dropdownSettingsTextColorClicked};
  }
`;

NavBarPage.propTypes = {
  link: PropTypes.string,
  disabledRedirect: PropTypes.bool,
  disabledListClick: PropTypes.bool,
  title: PropTypes.string,
  navBarTextHoverColor: PropTypes.string,
  navBarTextClickedColor: PropTypes.string,
  children: PropTypes.array,
  dropdownSettingsInactiveFill: PropTypes.string,
  dropdownSettingsInactiveBorder: PropTypes.string,
  dropdownSettingsHoverClickedFill: PropTypes.string,
  dropdownSettingsHoverClickedBorder: PropTypes.string,
  dropdownSettingsTextColorRegular: PropTypes.string,
  dropdownSettingsTextColorHover: PropTypes.string,
  dropdownSettingsTextColorClicked: PropTypes.string,
  dropdownSettingsTextFontFamily: PropTypes.string,
  dropdownSettingsTextFontSize: PropTypes.number,
  dropdownSettingsTextBold: PropTypes.bool,
  dropdownSettingsTextUnderline: PropTypes.bool,
  dropdownSettingsTextItalic: PropTypes.bool,
  dropdownSettingsHorizontalPadding: PropTypes.number,
  dropdownSettingsVerticalPadding: PropTypes.number
};

export default NavBarPage;
