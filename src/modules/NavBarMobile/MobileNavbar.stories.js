import React from "react";
import NavBar from "./index";
import {config} from "../../consts";

export default {
    title: 'Navbar Mobile',
    component: NavBar,
}

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    config: config,
    isDesktop: true
};

