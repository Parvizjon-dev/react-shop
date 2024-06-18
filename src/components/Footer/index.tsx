import { Container, Group, Anchor, Text } from '@mantine/core';

const links = [
    { link: '#', label: 'Contact' },
    { link: '#', label: 'Privacy' },
    { link: '#', label: 'Blog' },
    { link: '#', label: 'Careers' },
];

export const Footer = () => {
    const items = links.map((link) => (
        <Anchor<'a'>
            c="white"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={'bg-green-600 mt-4'}>
            <Container className={'flex items-center justify-between p-4'}>
                <Text className='!text-white !text-[18px] !font-bold'>Shop</Text>
                <Group className={''}>{items}</Group>
            </Container>
        </div>
    );
}