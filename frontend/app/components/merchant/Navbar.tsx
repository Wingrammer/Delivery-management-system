import type { ReactNode } from 'react'
import {
    Text,
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    // useColorMode,
    Heading,
    Container,
    HStack,
    IconButton,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Link,
    MenuGroup,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link as RemixLink } from '@remix-run/react'

const Links = ['Dashboard', 'Parcels', 'Payments', 'Coupon']

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
    >
        {children}
    </Link>
)

export default function MerchantNav() {
    // const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                py={3}
                borderBottom="1px"
                borderColor="gray.200"
            >
                <Container maxW="container.xl">
                    <Flex
                        h={16}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Flex align="center">
                            <Stack
                                direction="row"
                                align="center"
                                spacing={{ md: 0, base: 2 }}
                            >
                                <IconButton
                                    variant="outline"
                                    size={'md'}
                                    icon={
                                        isOpen ? (
                                            <CloseIcon />
                                        ) : (
                                            <HamburgerIcon />
                                        )
                                    }
                                    aria-label={'Open Menu'}
                                    display={{ md: 'none' }}
                                    onClick={isOpen ? onClose : onOpen}
                                />
                                <HStack alignItems={'center'}>
                                    <Box>
                                        <Link
                                            as={RemixLink}
                                            to="/"
                                            fontWeight="extrabold"
                                            fontSize="4xl"
                                            mb="0"
                                            _hover={{ textDecoration: 'unset' }}
                                        >
                                            RED
                                            <Text
                                                color="primary.500"
                                                display="inline"
                                            >
                                                X
                                            </Text>
                                        </Link>
                                    </Box>
                                </HStack>
                            </Stack>
                        </Flex>

                        <Flex alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <HStack
                                    as={'nav'}
                                    spacing={4}
                                    display={{ base: 'none', md: 'flex' }}
                                    ml="auto"
                                >
                                    {Links.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
                                    ))}
                                    <Button
                                        colorScheme="primary"
                                        fontWeight="normal"
                                    >
                                        Create Parcel
                                    </Button>
                                </HStack>
                                {/* <Button
                                    onClick={toggleColorMode}
                                    bg="transparent"
                                >
                                    {colorMode === 'light' ? (
                                        <MoonIcon />
                                    ) : (
                                        <SunIcon />
                                    )}
                                </Button> */}

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}
                                    >
                                        <Avatar
                                            size={'sm'}
                                            name="Maruf Ahmed"
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuGroup title="Profile">
                                            <MenuItem>My Shops</MenuItem>
                                            <MenuItem>
                                                Manage Pickup Location
                                            </MenuItem>
                                            <MenuItem>Shop Settings</MenuItem>
                                            <MenuItem>Coverage Area</MenuItem>
                                        </MenuGroup>
                                        <MenuDivider />
                                        <MenuGroup title="Help">
                                            <MenuItem>Tutorial</MenuItem>
                                            <MenuItem>FAQ</MenuItem>
                                        </MenuGroup>
                                        <MenuDivider />
                                        <MenuGroup>
                                            <Link
                                                as={RemixLink}
                                                to="/logout"
                                                _hover={{
                                                    textDecoration: 'unset',
                                                }}
                                            >
                                                <MenuItem>Logout</MenuItem>
                                            </Link>
                                        </MenuGroup>
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </Flex>
                    </Flex>
                </Container>
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Box>
                                <Heading fontWeight="extrabold">
                                    RED
                                    <Text color="red" display="inline">
                                        X
                                    </Text>
                                </Heading>
                            </Box>
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}