import { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Container, Group, Burger, Text, Indicator } from '@mantine/core';
import { FaCartPlus, FaRegHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


interface ILinks {
    link: string;
    label: string;
    icon?: React.ReactNode;
    count: number;
}


export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const totalCartItems = useSelector((state: RootState) => state.cart.totalItems);
    const wishlistProducts = useSelector((state: RootState) => state.wishlist.products)
    const wishlistTotalItems = wishlistProducts?.length;

    const links: ILinks[] = [
        { link: '/cart', label: 'Корзина', icon: <FaCartPlus />, count: totalCartItems },
        { link: '/favorites', label: 'Избранные', icon: <FaRegHeart />, count: wishlistTotalItems },
    ];

    const items = links.map((link) => (
        <div
            className={'text-white flex items-center flex-col cursor-pointer '}
            onClick={() => window.location.replace(link.link)}
        >
            <Indicator inline size={16} color='red' classNames={{ indicator: 'absolute top-[5px] !right-[-10px]' }} label={String(link?.count)}>
                {link?.icon}
            </Indicator>
            <Text className='!text-[12px] select-none'>
                {link.label}
            </Text>
        </div>
    ));

    return (
        <header className={'bg-green-600 shadow-md'}>
            <Container size="md" className='flex justify-between p-3'>
                <a href='/' className='!text-white !font-bold !text-[18px] no-underline'>Shop</a>
                <Group gap={'lg'} visibleFrom="xs">

                    {items}

                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}