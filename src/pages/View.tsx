import { Box, Flex, Heading, Stack, Image, Img, Text } from "@chakra-ui/react";
import { Texts } from "../assets/Texts";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import { SingleCard } from "../components/SingleCard";

export const View = () => {

    const values = Texts;

    return(
        <Flex
            flexDir='column'
            justifyContent='end-flex'
            width='100vw'
            marginBottom='60px'
        >
            <Head />
            <Box
                margin='50px auto'
            >
                <Heading as='h1' fontSize='5xl' fontStyle='italic' fontWeight='semibold'>Welcome to 'The Gallery'</Heading>
            </Box>
            <Box
                width='90%'
                background='#72b6d6'
                marginLeft='auto'
                marginRight='auto'
                boxShadow='lg'
                padding='30px'
            >
                <Stack
                    direction='column'
                    spacing='50px'
                >
                    {
                        values.map((val,idx) => <SingleCard title={val.title} image={val.image} desc={val.desc} reverse={idx % 2 == 1} />)
                    }
                    <Flex
                        alignItems='center'
                        margin='auto'
                        justifyContent='center'
                        fontSize='18pt'
                        fontStyle='italic'
                        fontWeight='normal'
                    >
                        <Text>
                            "Our first year may be rough, but we had countless fun <br />
                            In a relationship, improvement is always needed<br />
                            I hope our second year, our relationship improves in a good way <br />
                            Let's make some good new memories in our second year!"
                        </Text>
                    </Flex>
                    <Flex
                        alignItems='flex-end'
                        margin='auto'
                        justifyContent='flex-end'
                        fontSize='10pt'
                        fontWeight='normal'
                    >
                        <Text>
                            *More things to be added soon
                        </Text>
                    </Flex>
                </Stack>
            </Box>
        </Flex>
    );
};