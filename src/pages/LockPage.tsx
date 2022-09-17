import { Box, Button, Center, Divider, Flex, Heading, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LockPage = () => {

    const key = "Vm0wd2QyVkZNVWRpUm1ScFVtMVNXRll3WkRSV2JHeDBZM3BHYWxKc1NsWlZNakExVjBaS2MySkVUbGhoTVVwVVZqQmFTMlJIVmtWUmJGWlhZa2hDVVZkV1kzaFRNVWw0V2toV2FGSnNjSEJXYTFaaFUxWmFjbHBFVWxSTmJFcElWbTAxVDJGV1NuTlhiR2hhWVRKb1JGcFdXbXRYUjFKSVVteHdWMkpXU2twV2JURXdXVlprU0ZOclpHcFNWR3hZV1ZkMGQyUnNjRmRYYlVacVlrZDBObGxWV2s5VWJVWTJWbXBhVjJGcmEzaFdWRVpTWlVaa2RWUnNhR2xTTW1ob1YxWlNSMWxWTUhoalJscFlZbFZhVlZWc1VrZFhiR3QzVmxSR1YwMXJWalpWVjNoelZqSktWVkpVUWxkaGExcFVXWHBHVDJOc1duTlRiR1JUVFRBd01RPT0=";
    const nav = useNavigate();

    const [day,setDay] = useState('');
    const [month,setMonth] = useState('Januari');
    const [year,setYear] = useState('');
    const [hour,setHour] = useState('');
    const [minute,setMinute] = useState('');

    const [fail,setFailed] = useState(false);

    useEffect(() => {
      setFailed(false);
    }, [day,month,year,hour,minute]);

    const Submit = () => {
        const a: string = btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(day + " " + month + " " + year + " " + hour + ":" + minute))))))))))
        if (a == key) {
            nav("/view");
        } else {
          setFailed(true);
        }
    }

    return (
      <Flex
        flexDirection='column'
        w='100wh'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          p='1rem'
          background='white'
          boxShadow='md'
          maxWidth='60%'
        >
          <Stack 
            spacing={6}
          >
            <Heading>
              Tanggal Penting
            </Heading>
            <Stack
              direction='row'
              spacing={4}
            >
              <Input 
                type="number" 
                placeholder="Day" 
                onChange={e => setDay(e.target.value)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxWidth='20%'
              />
              <Select placeholder="Month" onChange={e => setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="Desember">Desember</option>
              </Select>
              <Input type="number" placeholder="Year" onChange={e => setYear(e.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                }}
                maxWidth='20%'
              />
            </Stack>
            <Box>
              <Center>
                <HStack
                  spacing={4}
                >
                  <Input 
                    type="number" 
                    placeholder="Hour" 
                    onChange={e => setHour(e.target.value)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  <Input 
                    type="number" 
                    placeholder="Minute" 
                    onChange={e => setMinute(e.target.value)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </HStack>
              </Center>
            </Box>
            <Stack
              direction='column'
              spacing='1'
            >
              <Button 
                onClick={Submit}
                background='#009fe3'
                borderRadius={0}
                color='white'
                _hover={{
                  color: 'white',
                  background: '#027eb3'
                }}
                _active={{
                  color: 'white',
                  background: '#015b82'
                }}
              >
                Submit
              </Button>
              <Box
                fontSize='9pt'
                color='red'
              >
                {
                  fail ? 'Input salah!' : null
                }
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    );
}