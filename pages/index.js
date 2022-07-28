import {Container, Row, Col, Button, Card, Text, Image, Spacer} from '@nextui-org/react';
import Head from "next/head";
import { Menu } from "./menu"
import "@fontsource/mochiy-pop-p-one"

function addToChrome() {
    openNewTab("https://chrome.google.com/webstore/detail/notelab/geolaeooajdkifdkblgijpfnboegnphb");
}

function loadNewPage(link) {
    window.location.href = link;
}

function openNewTab(link) {
    window.open(link, "_blank")
}

export default function App() {
    return (
            <Container lg gap={2} css={{mt:'$10'}} align="center">
                <Head>
                    <title>NoteLab</title>
                    <meta
                        name="description"
                        content="Website for the NoteLab Extension"
                    />
                    <link rel="icon" href="logo.png" />
                </Head>

                <Button.Group>
                    <Menu />
                </Button.Group>

                <Container>
                    <Spacer y={5}/>
                    <Text b size={150} color="white" weight="extrabold">
                        NoteLab
                    </Text>
                    <br />
                    <Text b size={40} color="white" weight="medium">
                        Taking educational notes, now made 100 times easier!
                    </Text>
                    <Row justify="center" align="center" css={{position: "relative", bottom: "20px"}}>
                        {/*<Col />*/}
                        <Col css={{position: "relative", left: "110px"}}>
                            <Image
                                src="/foxwithpen.png"
                                width={230}
                                height={204}
                            />
                        </Col>
                        <Col css={{width: "311px"}}>
                            <Button onClick={addToChrome} css={{background: "#eab94a", width: "311px", height: "59px"}}>
                                <Text b color="white" size={32} css={{"font-family": "Mochiy Pop P One"}}>
                                    Add to Chrome
                                </Text>
                            </Button>
                        </Col>
                        <Col />
                        {/*<Col />*/}
                    </Row>
                </Container>

                <Spacer y={5}/>

                <Container>
                    <Row>
                        <Col css={{"text-align": "left"}}>
                            <Text b size="50px" color="white" css={{"line-height": "50px"}}>
                                A Hackathon Idea Becomes Reality
                            </Text>
                            <Text size="25px" color="white">
                                NoteLab began as a hackathon idea that won 1st Place in the Hack the Education and Beyond 2022 Hackathon
                            </Text>
                        </Col>
                        <Col>
                            <Image
                                src="/hackathon.png"
                                width="50%"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
    );
}
