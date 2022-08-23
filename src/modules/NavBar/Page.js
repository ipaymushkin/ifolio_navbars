import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';
import { Icon } from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import { openLinkInNewTab } from '../../utils/openLinkInNewTab.js';
import {DropdownElement, IconWrapper, PageWrapper} from "../styled";

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
    dropdownSettingsVerticalPadding,
    isStatic
  }) => {
    const [open, setOpen] = useState(isStatic);

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
        <PageWrapper
          navBarTextHoverColor={navBarTextHoverColor}
          navBarTextClickedColor={navBarTextClickedColor}
          onClick={onClick}
          data-link={!isDropdown ? link : undefined}
          data-isdropdown={isDropdown}
        >
          {title}{' '}
          {isDropdown && (
            <IconWrapper data-arrow={true}>
              {open ? (
                <Icon icon={ArrowIcon} rotate={isStatic ? 90 : -90} color={'#ffffff'} />
              ) : (
                <Icon icon={ArrowIcon} rotate={90} color={'#ffffff'} />
              )}
            </IconWrapper>
          )}
        </PageWrapper>
        {open && isDropdown && (
          <DropdownWrapper data-list={true} className={"navbar-list"}>
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
                data-link={el.link}
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

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
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
