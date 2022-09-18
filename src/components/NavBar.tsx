import { Box, Flex } from "@chakra-ui/react";

const NavBar: React.FC = () => {

    return (
        <Flex
            flexDirection='row'
            w='100vw'
            h='50px'
            background='green'
        >
            <Box>
                A
            </Box>
            <Box>
                B
            </Box>
        </Flex>
    )

};

export default NavBar