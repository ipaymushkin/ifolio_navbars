import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useOutsideClick} from '../../hooks/useOutsideClick.js';
import {Icon} from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import {IconWrapper, PageWrapperDesktop} from "../styled";

const DropDown = memo((props) => {

    const {
        disabledRedirect,
        childs,
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
        setOpen,
        rootId,
        parentRef,
        isPreview,
    } = props;

    const ref= useRef();

    const isClient = typeof window === "object";

    let left = 0, top = 0;
    if (isClient && parentRef) {
        left = parentRef.getBoundingClientRect().left;
        const navbarContainer = parentRef.closest("[data-navbarcontainer]");
        const navbar = parentRef.closest('.navbar-desktop');
        if (navbarContainer) {
            const containerLeft = navbarContainer.getBoundingClientRect().left;
            if (left < containerLeft) left = containerLeft;
        }
        if (navbar) {
            const navbarBox = navbar.getBoundingClientRect();
            top = navbarBox.top + navbarBox.height + window.scrollY;
        }
    }

    const component = <DropdownWrapper ref={ref} data-list={true} className={"navbar-list"} left={left} top={top} dropdownSettingsInactiveBorder={dropdownSettingsInactiveBorder}>
        {childs.map((el) => (
            <DropdownElement
                key={el.id}
                dropdownSettingsInactiveFill={dropdownSettingsInactiveFill}
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
                data-link={el.link?.value}
                onClick={() => {
                    console.log('????')
                    if (el.link?.value && !disabledRedirect) {
                        openLinkInNewTab(el.link?.value, isPreview);
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

    if (isClient) {
        return ReactDOM.createPortal(component, document.getElementById(rootId));
    }
    return component;
})

const NavBarPage = memo(
    ({
         disabledRedirect,
         disabledListClick,
         link: linkProps,
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
         isStatic,
         navBarHoverColor,
         navBarClickedColor,
         rootId,
         isPreview,
     }) => {
        const [open, setOpen] = useState(isStatic);
        const link = linkProps?.value;

        const ref = useOutsideClick(() => {
            setTimeout(() => {
                setOpen(false);
            }, 200)

        });

        const [containerRef, setContainerRef] = useState(null);
        useEffect(() => {
            setContainerRef(ref.current);
        }, [])

        const isDropdown = children.length > 0;

        const onClick = useCallback(() => {
            if (isDropdown && !disabledListClick) {
                setOpen((state) => !state);
            } else if (!isDropdown && !disabledRedirect && link) {
                openLinkInNewTab(link, isPreview);
            }
        }, [disabledListClick, disabledRedirect, isDropdown, link, isPreview]);

        useEffect(() => {
            const handleScroll = () => {
                setOpen(false)
            }
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            }
        }, [])

        return (
            <Container ref={ref} >
                <PageWrapperDesktop
                    navBarTextHoverColor={navBarTextHoverColor}
                    navBarTextClickedColor={navBarTextClickedColor}
                    navBarHoverColor={navBarHoverColor}
                    navBarClickedColor={navBarClickedColor}
                    onClick={onClick}
                    data-link={!isDropdown ? link : undefined}
                    data-isdropdown={isDropdown}
                    open={open}
                    isDropdown={isDropdown}
                    data-dropdownactivecolor={navBarHoverColor}
                >
                    {title}{' '}
                    {isDropdown && (
                        <IconWrapper data-arrow={true}>
                            {open ? (
                                <Icon icon={ArrowIcon} rotate={isStatic ? -90 : 90} color={'#ffffff'}/>
                            ) : (
                                <Icon icon={ArrowIcon} rotate={-90} color={'#ffffff'}/>
                            )}
                        </IconWrapper>
                    )}
                </PageWrapperDesktop>
                {open && isDropdown &&
                    <DropDown
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
                        childs={children}
                        setOpen={setOpen}
                        disabledRedirect={disabledRedirect}
                        rootId={rootId}
                        parentRef={containerRef}
                        isPreview={isPreview}
                        open={open}
                    />
                }
            </Container>
        );
    }
);

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${({left}) => left}px;
  top: ${({top}) => top}px;
  z-index: 2;
  
  > div {
    border-right: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
    border-left: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
    border-bottom: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
  }
  > div:first-child {
    border-top: 2px solid ${({dropdownSettingsInactiveBorder}) => dropdownSettingsInactiveBorder};
  }
`;

const DropdownElement = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  background: ${({dropdownSettingsInactiveFill}) => dropdownSettingsInactiveFill};
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
    border-color: ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
    color: ${({dropdownSettingsTextColorHover}) => dropdownSettingsTextColorHover};
  }

  &:active {
    background: ${({dropdownSettingsHoverClickedFill}) => dropdownSettingsHoverClickedFill};
    border-color: ${({dropdownSettingsHoverClickedBorder}) => dropdownSettingsHoverClickedBorder};
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
    navBarHoverColor: PropTypes.string,
    navBarClickedColor: PropTypes.string,
    rootId: PropTypes.string,
};

export default NavBarPage;
