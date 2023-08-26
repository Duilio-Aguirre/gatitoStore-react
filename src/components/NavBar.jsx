import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Box,
    Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <h2>GatitoStore</h2>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Breadcrumb separator='-'>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>INICIO</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>PRODUCTOS</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <BreadcrumbLink href='#'>CONTACTO</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box p='4'>
                <CartWidget/>
                </Box>
               
            </Flex>
        </div>
    )
}

export default NavBar