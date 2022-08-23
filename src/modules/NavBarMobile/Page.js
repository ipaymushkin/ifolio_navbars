import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import Row from "./Row";
import {IconWrapper, PageWrapper} from "../styled";
import styled from "styled-components";

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
         mobileTextAlignment,
         isStatic
     }) => {
        const [open, setOpen] = useState(isStatic);

        const isDropdown = children.length > 0;

        const onClick = useCallback(() => {
            if (isDropdown && !disabledListClick) {
                setOpen((state) => !state);
            } else if (!isDropdown && !disabledRedirect && link) {
                openLinkInNewTab(link);
            }
        }, [disabledListClick, disabledRedirect, isDropdown, link]);

        return (
            <>
                <Row link={!isDropdown ? link : undefined} onClick={onClick} mobileTextAlignment={mobileTextAlignment}>
                    <PageWrapper
                        navBarTextHoverColor={navBarTextHoverColor}
                        navBarTextClickedColor={navBarTextClickedColor}
                        data-isdropdown={isDropdown}
                    >
                        {title}{' '}
                        {isDropdown && (
                            <IconWrapper data-arrow={true}>
                                {open ? (
                                    <Icon icon={ArrowIcon} rotate={isStatic ? 90 : -90} color={'#ffffff'}/>
                                ) : (
                                    <Icon icon={ArrowIcon} rotate={90} color={'#ffffff'}/>
                                )}
                            </IconWrapper>
                        )}
                    </PageWrapper>
                </Row>
                {open && isDropdown && (
                    <>
                        {children.map((el) => (
                            <Row
                                key={el.id}
                                onClick={() => {
                                    if (el.link && !disabledRedirect) {
                                        openLinkInNewTab(el.link);
                                        setOpen(false);
                                    } else {
                                        setOpen(false);
                                    }
                                }}
                                link={el.link}
                                mobileTextAlignment={mobileTextAlignment}
                            >
                                <DropdownElement
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
                                >
                                    {el.title}
                                </DropdownElement>
                            </Row>
                        ))}
                    </>
                )}
            </>
        )
    }
);

const DropdownElement = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  background: ${({dropdownSettingsInactiveFill}) => dropdownSettingsInactiveFill};
  border: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
  color: ${({dropdownSettingsTextColorRegular}) => dropdownSettingsTextColorRegular};
  font-size: ${({dropdownSettingsTextFontSize}) => dropdownSettingsTextFontSize}px;
  font-family: ${({dropdownSettingsTextFontFamily}) => dropdownSettingsTextFontFamily};
  font-weight: ${({dropdownSettingsTextBold}) => (dropdownSettingsTextBold ? 'bold' : 'normal')};
  font-style: ${({dropdownSettingsTextItalic}) => (dropdownSettingsTextItalic ? 'italic' : 'normal')};
  text-decoration: ${({dropdownSettingsTextUnderline}) => (dropdownSettingsTextUnderline ? 'underline' : 'none')};
  padding: ${({dropdownSettingsVerticalPadding, dropdownSettingsHorizontalPadding}) =>
    `${dropdownSettingsVerticalPadding}px ${dropdownSettingsHorizontalPadding}px`};

  &:hover {
    background: ${({dropdownSettingsHoverClickedFill}) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
    color: ${({dropdownSettingsTextColorHover}) => dropdownSettingsTextColorHover};
  }

  &:active {
    background: ${({dropdownSettingsHoverClickedFill}) => dropdownSettingsHoverClickedFill};
    border: 2px solid ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
    color: ${({dropdownSettingsTextColorClicked}) => dropdownSettingsTextColorClicked};
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
    dropdownSettingsVerticalPadding: PropTypes.number,
    mobileTextAlignment: PropTypes.string,
};

export default NavBarPage;
