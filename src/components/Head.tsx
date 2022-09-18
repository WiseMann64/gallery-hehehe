import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { useDebugValue } from "react"

const Head: React.FC = () => {
    return (
        <Box
            w='100%'
            h='56px'
            background='#71b9d1'
            paddingTop='8px'
            paddingLeft='20px'
            paddingRight='30px'
            boxShadow='md'
        >
            <Flex
                direction='row'
                justifyContent='space-between'
            >
                <Box
                    margin='auto 0'
                >
                    <Heading
                        fontWeight='medium'
                        fontSize='28px'
                    >
                        Simple Gallery :)
                    </Heading>
                </Box>
                <Button
                    marginLeft='8px'
                    background='#69b7d1'
                    h='40px'
                    w='40px'
                    borderRadius='2px'
                    borderStyle='solid'
                    outlineColor='#3e6f80'
                    _hover={{background:'#69b7d1', borderStyle:'solid', outlineColor:'#3e6f80'}}
                    _active={{background:'#69b7d1', borderStyle:'solid', outlineColor:'#3e6f80'}}
                >
                    ?
                </Button>
            </Flex>
        </Box>
    )
}

export default Head;