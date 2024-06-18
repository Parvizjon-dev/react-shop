import { RootState } from '../../store/store'
import { ProductCard } from '../../components'
import { IProduct } from '../../interfaces/IProduct'
import { SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'

export const FavoritesPage = () => {
    const wishlistProducts = useSelector((state: RootState) => state?.wishlist?.products);

    return (
        <div className='h-screen'>
            <Text className='my-2 !text-[30px]'>Избранное</Text>
            {wishlistProducts.length == 0 && <Text className='text-center'>Избранное пустует( </Text>}
            {wishlistProducts?.length > 0 && <SimpleGrid cols={{ base: 2, sm: 2, md: 4, lg: 5 }}>
                {wishlistProducts?.map((product: IProduct, i: number) => <ProductCard key={i} description={product?.description} id={product?.id} price={product?.price} title={product?.title} url={product?.url} />)}
            </SimpleGrid>}
        </div>
    )
}
