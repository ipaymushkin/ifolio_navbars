import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import Row from "./Row";
import {IconWrapper, PageWrapperMobile} from "../styled";
import styled from "styled-components";

const NavBarPage = memo(
    ({
         disabledRedirect,
         disabledListClick,
         link: linkProps,
         title,
         navBarTextHoverColor,
         navBarTextClickedColor,
         children,
         mobileTextAlignment,
         isStatic,
         isConstructor,
         navBarHoverColor,
         navBarClickedColor
     }) => {
        const link = linkProps?.value;
        const [open, setOpen] = useState(isStatic);

        const isDropdown = children.length > 0;

        const onClick = useCallback(() => {
            if (isDropdown && !disabledListClick) {
                setOpen((state) => !state);
            } else if (!isDropdown && !disabledRedirect && link) {
                openLinkInNewTab(link, isConstructor);
            }
        }, [disabledListClick, disabledRedirect, isDropdown, link, isConstructor]);

        return (
            <Wrapper
                navBarTextHoverColor={navBarTextHoverColor}
                navBarTextClickedColor={navBarTextClickedColor}
                navBarHoverColor={navBarHoverColor}
                navBarClickedColor={navBarClickedColor}
            >
                <Row isDropdown={isDropdown} link={!isDropdown ? link : undefined} onClick={onClick}
                     mobileTextAlignment={mobileTextAlignment}>
                    <PageWrapperMobile>
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
                    </PageWrapperMobile>
                </Row>
                {open && isDropdown && (
                    <Container data-mobile-dropdown-list={true}>
                        {children.map((el) => (
                            <Row
                                key={el.id}
                                onClick={() => {
                                    if (el.link?.value && !disabledRedirect) {
                                        openLinkInNewTab(el.link.value, isConstructor);
                                    }
                                }}
                                link={el.link?.value}
                                mobileTextAlignment={mobileTextAlignment}
                            >
                                <PageWrapperMobile
                                    navBarTextHoverColor={navBarTextHoverColor}
                                    navBarTextClickedColor={navBarTextClickedColor}
                                >
                                    {el.title}
                                </PageWrapperMobile>
                            </Row>
                        ))}
                    </Container>
                )}
            </Wrapper>
        )
    }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${({navBarHoverColor}) => navBarHoverColor};
    color: ${({navBarTextHoverColor}) => navBarTextHoverColor};
  }

  &:active {
    background: ${({navBarClickedColor}) => navBarClickedColor};
    color: ${({navBarTextClickedColor}) => navBarTextClickedColor};
  }
  

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

NavBarPage.propTypes = {
    link: PropTypes.string,
    disabledRedirect: PropTypes.bool,
    disabledListClick: PropTypes.bool,
    title: PropTypes.string,
    navBarTextHoverColor: PropTypes.string,
    navBarTextClickedColor: PropTypes.string,
    children: PropTypes.array,
    mobileTextAlignment: PropTypes.string,
};

export default NavBarPage;
