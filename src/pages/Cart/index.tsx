import { IProduct } from '../../interfaces/IProduct';
import { RootState } from '../../store/store';
import { SimpleGrid, Text } from '@mantine/core'
import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard';

export const CartPage = () => {
    const cartProducts = useSelector((state: RootState) => state.cart.products);

    return (
        <div className='h-screen'>
            <Text className='my-2 !text-[30px]'>Корзина</Text>
            {cartProducts.length == 0 && <Text className='text-center'>Корзина пустует( </Text>}
            {cartProducts?.length > 0 && <SimpleGrid cols={{ base: 2, sm: 2, md: 4, lg: 5 }}>
                {cartProducts?.map((product: IProduct, i: number) => <ProductCard key={i} description={product?.description} id={product?.id} price={product?.price} title={product?.title} url={product?.url} />)}
            </SimpleGrid>}
        </div>
    )
}
