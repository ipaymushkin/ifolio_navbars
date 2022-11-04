import {Primary} from "./modules/NavBar/Navbar.stories";

export const logoImageWidth = 250;
export const logoImageHeight = 80;

export const config = {
    "name": "test icon color1",
    "height": 58,
    "logoSrc": "https://ifolio-cloud-s3.s3.amazonaws.com/img/navbar_logo250x80.png",
    "structure": [
        {
            "id": "52ff32c0-5a85-11ed-92af-95478d94f522",
            "link": {
                "name": "Ukhanov CVX",
                "type": "ifolio",
                "value": "http://localhost:3000/download-app"
            },
            "type": "page",
            "title": "with link",
            "children": []
        },
        {
            "id": "55f7b240-5a85-11ed-92af-95478d94f522",
            "link": null,
            "type": "page",
            "title": "without link",
            "children": []
        },
        {
            "id": "abee9f70-5c1e-11ed-be7e-cb281a8f3f7b",
            "type": "page",
            "title": "inner link here",
            "children": [
                {
                    "id": "cf809c40-5c1e-11ed-be7e-cb281a8f3f7b",
                    "type": "page",
                    "title": "here",
                    "children": [],
                    "link": {
                        "type": "link",
                        "value": "http://localhost:6006/?path=/story/navbar-desktop--primary"
                    }
                }
            ],
            "link": {
                "type": "link",
                "value": "http://seasonvar.ru/"
            },
            "expanded": true
        },
        {
            "id": "e1e6b180-5c1e-11ed-be7e-cb281a8f3f7b",
            "type": "button",
            "title": "button link",
            "children": [],
            "link": {
                "type": "link",
                "value": "https://aliexpress.ru/"
            }
        }
    ],
    "mobileHeight": 65,
    "logoAlignment": "left",
    "mobileFontSize": 14,
    "navBarBehavior": "frozen",
    "navBarTextBold": true,
    "navBarHoverColor": "#41c5c2",
    "navBarTextItalic": false,
    "navBarTextSpacing": 10,
    "logoCropperOptions": {
        "x": 0,
        "y": 0,
        "zoom": 1.4,
        "width": 500,
        "height": 160,
        "rotate": 0,
        "scaleX": 1,
        "scaleY": 1,
        "imageBox": {
            "x": 0,
            "y": 0,
            "width": 500,
            "height": 160
        },
        "imgWidth": 250,
        "imgHeight": 80,
        "imagePosition": {
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 100
        }
    },
    "navBarClickedColor": "#41c5c2",
    "navBarRegularColor": "#41c5c2",
    "navBarTextFontSize": 14,
    "mobileLogoAlignment": "right",
    "mobileTextAlignment": "left",
    "navBarTextAlignment": "left",
    "navBarTextUnderline": false,
    "navBarTextFontFamily": "Arial",
    "navBarTextHoverColor": "#292e50",
    "navBarTextClickedColor": "#292e50",
    "navBarTextRegularColor": "#ffffff",
    "dropdownSettingsTextBold": false,
    "buttonSettingsBorderWidth": 2,
    "buttonSettingsRegularFill": "transparent",
    "buttonSettingsRoundCorners": 20,
    "dropdownSettingsTextItalic": false,
    "navBarRegularOnScrollColor": "#41c5c2",
    "buttonSettingsRegularBorder": "#fff",
    "buttonSettingsTextColorHover": "#fff",
    "dropdownSettingsInactiveFill": "#2cbab7",
    "dropdownSettingsTextFontSize": 14,
    "buttonSettingsVerticalPadding": 8,
    "dropdownSettingsTextUnderline": false,
    "buttonSettingsHoverClickedFill": "#292e50",
    "buttonSettingsTextColorClicked": "#fff",
    "buttonSettingsTextColorRegular": "#fff",
    "dropdownSettingsInactiveBorder": "#2cbab7",
    "dropdownSettingsTextColorHover": "#41c5c2",
    "dropdownSettingsTextFontFamily": "Arial",
    "buttonSettingsHorizontalPadding": 20,
    "dropdownSettingsVerticalPadding": 8,
    "buttonSettingsHoverClickedBorder": "#fff",
    "dropdownSettingsHoverClickedFill": "#eeffff",
    "dropdownSettingsTextColorClicked": "#41c5c2",
    "dropdownSettingsTextColorRegular": "#fff",
    "dropdownSettingsHorizontalPadding": 10,
    "dropdownSettingsHoverClickedBorder": "#eeffff"
}
