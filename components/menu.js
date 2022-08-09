import React from "react";
import {Button, Text} from "@nextui-org/react";

const menu = [
    {
        text: "Home",
        link: "/",
        newtab: false
    },
    {
        text: "Learn More",
        link: "https://chrome.google.com/webstore/detail/notelab/geolaeooajdkifdkblgijpfnboegnphb",
        newtab: true
    },
    {
        text: "Donate",
        link: "https://paypal.me/notelab",
        newtab: true
    }
];

export const Menu = () => {
    return menu.map(item => (
        <Button as="a" href={item.link} target={item.newtab ? "_blank" : ""} css={{background: "#eab94a"}}>
            <Text color="white">
                {item.text}
            </Text>
        </Button>
    ));
}