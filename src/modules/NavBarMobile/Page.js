import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../components/Icon';
import ArrowIcon from '../../icons/ArrowIcon.js';
import {openLinkInNewTab} from '../../utils/openLinkInNewTab.js';
import Row from "./Row";
import {IconWrapper, PageWrapper} from "../styled";

const NavBarPage = memo(
    ({
         disabledRedirect,
         disabledListClick,
         link,
         title,
         navBarTextHoverColor,
         navBarTextClickedColor,
         children,
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
                                    }
                                }}
                                link={el.link}
                                mobileTextAlignment={mobileTextAlignment}
                            >
                                <PageWrapper
                                    navBarTextHoverColor={navBarTextHoverColor}
                                    navBarTextClickedColor={navBarTextClickedColor}
                                >
                                    {el.title}
                                </PageWrapper>
                            </Row>
                        ))}
                    </>
                )}
            </>
        )
    }
);

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
