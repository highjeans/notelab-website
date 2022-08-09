import {Container, Row, Col, Button, Card, Text, Image, Spacer} from '@nextui-org/react';
import Head from "next/head";
import {Menu} from "/components/menu"
import "@fontsource/mochiy-pop-p-one"

export default function App() {
    return (
            <Container css={{mt:'$10'}} align="center">
                <Head>
                    <title>NoteLab</title>
                    <meta
                        name="description"
                        content="Website for the NoteLab Extension"
                    />
                    <link rel="icon" href="/logo.png" />
                </Head>

                <Button.Group css={{"padding-top": "20px"}}>
                    <Menu />
                </Button.Group>

                <Container>
                    <Spacer y={3}/>
                    <Text b size={150} color="white" weight="extrabold">
                        NoteLab
                    </Text>
                    <br />
                    <Text b size={40} color="white" weight="medium">
                        Taking educational notes, now made 100 times easier!
                    </Text>
                    <Row justify="center" align="center" css={{position: "relative", bottom: "20px"}}>
                        <Col css={{position: "relative", left: "110px"}}>
                            <Image
                                src="/foxwithpen.png"
                                width={230}
                                height={204}
                            />
                        </Col>
                        <Col css={{width: "311px"}}>
                            <Button as="a" href="https://chrome.google.com/webstore/detail/notelab/geolaeooajdkifdkblgijpfnboegnphb" target="_blank" css={{background: "#eab94a", width: "311px", height: "59px"}}>
                                <Text b color="white" class="add-to-chrome">
                                    Add to Chrome
                                </Text>
                            </Button>
                        </Col>
                        <Col />
                    </Row>
                </Container>

                <Spacer y={9}/>

                <Container>
                    <Card css={{background: "#FF6861", height: "742px"}}>
                        <Card.Body>
                            <Row justify="center" align="center" css={{"padding-top": "100px"}}>
                                <Col css={{"text-align": "left", position: "relative", left: "80px"}}>
                                    <Text weight="bold" size="50px" color="white" css={{width: "433px", "line-height": "50px"}}>
                                        A Hackathon Idea Becomes Reality
                                    </Text>
                                    <Text css={{width: "350px", "line-height": "30px", "padding-top": "15px"}}>
                                        <Text small weight="normal" size="25px" color="white">
                                            NoteLab began as a hackathon idea that won 1st Place in the
                                        </Text>
                                        <Text small weight="bold" size="25px" color="white" css={{"font-style": "italic"}}>
                                            &nbsp;Hack the Education and Beyond&nbsp;
                                        </Text>
                                        <Text small weight="normal" size="25px" color="white">
                                            2022 Hackathon
                                        </Text>
                                    </Text>
                                </Col>
                                <Col>
                                    <Image
                                        src="/hackathon.png"
                                        width="500px"
                                        height="500px"
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Spacer y={3}/>

                    <Card css={{background: "#57CA62", height: "742px"}}>
                        <Card.Body>
                            <Row justify="center" align="center" css={{"padding-left": "37px"}}>
                                <Col>
                                    <Image
                                        src="/tools.png"
                                        width="649px"
                                        height="631px"
                                    />
                                </Col>
                                <Col css={{"text-align": "left", "padding-left": "150px"}}>
                                    <Text weight="bold" size="50px" color="white" css={{width: "433px", "line-height": "50px"}}>
                                        Unique Tools Available To Edit Your Notes
                                    </Text>
                                    <Text weight="normal" size="25px" color="white" css={{width: "403px", "line-height": "30px", "padding-top": "15px"}}>
                                        NoteLab has basic text editing functions, allowing users to add and change text the way they want to
                                    </Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Spacer y={3}/>

                    <Card css={{background: "#F3B628"}}>
                        <Card.Body>
                            <Row justify="center" align="center" css={{"padding-top": "85px", "padding-bottom": "85px"}}>
                                <Col css={{"text-align": "left", position: "relative", left: "80px"}}>
                                    <Text weight="bold" size="50px" color="white" css={{width: "423px", "line-height": "50px"}}>
                                        Adding Digital Media Has Never Been Easier
                                    </Text>
                                    <Text css={{width: "333px", "line-height": "30px", "padding-top": "15px"}}>
                                        <Text small weight="normal" size="25px" color="white">
                                            NoteLab allows users to add text, images, videos, and audio files to their notes with a simple click. Just by right clicking and selecting
                                        </Text>
                                        <Text small weight="bold" size="25px" color="white" css={{"font-style": "italic"}}>
                                            &nbsp;Add Selection to Notes
                                        </Text>
                                        <Text small weight="normal" size="25px" color="white">
                                            , users will be able to create dynamic, effective, and inspiring educational notes
                                        </Text>
                                    </Text>
                                </Col>
                                <Col>
                                    <Image
                                        src="/media.png"
                                        width="626px"
                                        height="532px"
                                        css={{"padding-right": 50}}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Spacer y={3}/>

                    <Card css={{background: "#D298CC", height: "742px"}}>
                        <Card.Body>
                            <Row justify="center" align="center" css={{"padding-left": "37px", "padding-top": "140px"}}>
                                <Col>
                                    <Image
                                        src="/save.png"
                                        width="562px"
                                        height="403px"
                                    />
                                </Col>
                                <Col css={{"text-align": "left", "padding-left": "100px"}}>
                                    <Text weight="bold" size="50px" color="white" css={{width: "522px", "line-height": "50px"}}>
                                        Save Your Notes<br />Any Time. Anywhere.
                                    </Text>
                                    <Text weight="normal" size="25px" color="white" css={{width: "452px", "line-height": "30px", "padding-top": "15px"}}>
                                        Internet is not required to use NoteLab, making writing and saving notes easy. NoteLab also allows you to download your notes as a Word Document to use later
                                    </Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>

                <Spacer y={15}/>

                <Container>
                    <Row justify="center" align="center">
                        <Text weight="extrabold" size="60px" color="white" css={{width: "1088px", "line-height": "73px", "text-align": "center"}}>
                            Move Your Learning To The Next Level Today!
                        </Text>
                    </Row>

                    <Spacer y={2}/>

                    <Row justify="center" align="center">
                        <Text weight="light" size="30px" color="white" css={{width: "709px", "line-height": "50px", "text-align": "center"}}>
                            Available for Google Chrome
                        </Text>
                    </Row>

                    <Spacer y={4}/>

                    <Row justify="center" align="center" css={{position: "relative", "bottom": "65px"}}>
                        <Col css={{position: "relative", left: "105px", bottom: "63px"}}>
                            <Image
                                src="/paint.png"
                                width={401}
                                height={256}
                            />
                        </Col>
                        <Col css={{width: "311px"}}>
                            <Button as="a" href="https://chrome.google.com/webstore/detail/notelab/geolaeooajdkifdkblgijpfnboegnphb" target="_blank" css={{background: "#eab94a", width: "311px", height: "59px"}}>
                                <Text b color="white" class="add-to-chrome">
                                    Add to Chrome
                                </Text>
                            </Button>
                        </Col>
                        <Col />
                    </Row>

                    <Spacer y={3}/>
                </Container>
            </Container>
    );
}
