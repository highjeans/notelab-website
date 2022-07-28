import React from "react";
import {Button, Card, Col, Link, Text} from "@nextui-org/react";

const menu = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About Us",
        link: "/about-us"
    },
    {
        text: "Learn More",
        link: "/learn-more"
    },
    {
        text: "Donate",
        link: "/donate"
    }
];

export const Menu = () => {
    return menu.map(item => (
        <Button css={{background: "#eab94a"}}>
            <Text color="white">
                {item.text}
            </Text>
        </Button>
    ));
}