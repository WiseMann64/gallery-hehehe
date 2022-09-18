import { Box, Flex, Heading, Stack, Image, Text, Divider } from "@chakra-ui/react"

interface SingleCardProps {
    title: string,
    image: string,
    desc: string[],
    reverse: boolean
}

export const SingleCard: React.FC<SingleCardProps> = (props) => {

    return (
        <Flex
            padding='10px'
            direction={props.reverse ? 'row-reverse' : 'row'}
        >
            <Stack
                direction='column'
                spacing='20px'
            >
                <Heading
                    as='h3'
                    fontSize='28pt'
                    fontStyle='italic'
                    fontWeight='normal'
                >
                    {props.title}
                </Heading>
                <Stack
                    direction={props.reverse ? 'row-reverse' : 'row'}
                    spacing='30px'
                >
                    <Image 
                        src={props.image}
                        alt="first" 
                        w='220px' 
                        h='220px'
                        borderRadius='10px'
                        borderStyle='solid'
                        outlineColor='white'
                        borderWidth='3px'
                        boxShadow='lg'
                    />
                    <Box
                        h='100%'
                        w='600px'
                        background='#6adceb'
                        borderRadius='5px'
                        boxShadow='lg'
                        fontSize='16pt'
                        fontStyle='italic'
                        fontWeight='hairline'
                        padding='auto'
                    >
                        <Flex
                            width='97%'
                            height='94%'
                            alignItems='center'
                            margin='auto'
                            justifyContent='center'
                        >
                            <Text>
                                {props.desc.map(des => {
                                    return (
                                        <>
                                            {des}<br />
                                        </>
                                    );
                                })}
                            </Text>
                        </Flex>
                    </Box>
                </Stack>
            </Stack>
        </Flex>
    )
}