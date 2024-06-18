import { Flex, Image, Modal, Pagination, Paper, SimpleGrid, Text } from '@mantine/core';
import { IProduct } from '../../interfaces/IProduct';
import { ProductCard } from '../ProductCard';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { FiShoppingCart } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cart';
import { toast } from 'react-toastify';
import { removeFromCart } from '../../store/slices/cart';
import { addToWishlist } from '../../store/slices/wishlist';
import { removeFromWishlist } from '../../store/slices/wishlist';
import { RootState } from '../../store/store';


interface IProps {
    products: IProduct[]
}
export const MappedProducts = ({ products }: IProps) => {
    const [opened, { close, open }] = useDisclosure()
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    const totalPages = Math.ceil(products.length / pageSize);

    const [selectedProduct, setSelectedProduct] = useState<IProduct>({ description: '', id: 0, price: 0, title: '', url: '' });

    const slicedData = products?.slice((pageNumber - 1) * pageSize,
        pageNumber * pageSize);

    const dispatch = useDispatch()
    const cartState = useSelector((state: RootState) => state.cart.products);
    const wishlistState = useSelector((state: RootState) => state.wishlist.products);

    const isProductInCart = cartState.find((item) => item?.id === selectedProduct?.id);
    const isProductInWislist = wishlistState.find((item) => item?.id === selectedProduct?.id);


    const handleAddProductToCart = (product: IProduct) => {
        if (!isProductInCart) {
            dispatch(addToCart({ ...product, quantity: 1 }))
            return toast.success('Продукт добавлен в корзину!')
        }

        return dispatch(removeFromCart(product?.id))
    }

    const handleAddProductToWishlist = (product: IProduct) => {
        if (!isProductInWislist) {
            return dispatch(addToWishlist(product))
        }

        return dispatch(removeFromWishlist(product))

    }

    return (
        <main className='mt-3 d-flex w-100 flex-wrap justify-content-between'>
            <SimpleGrid cols={{ base: 2, sm: 2, lg: 5, md: 3 }}>
                {slicedData?.map((product: IProduct, index: number) => (
                    <div key={index} className='cursor-pointer' onClick={() => {
                        setSelectedProduct({ ...product, price: 120 })
                        open()
                    }}>
                        <ProductCard key={product.id} description={product?.description} id={product?.id} url={product?.url} title={product?.title} price={120} />
                    </div>
                ))}
            </SimpleGrid>
            <div className='!w-full flex items-center justify-center mt-4'>
                <Pagination total={totalPages} onChange={setPageNumber} />
            </div>
            <Modal centered onClose={close} opened={opened}>
                <Paper withBorder shadow="md">
                    <Image src={selectedProduct?.url} className="w-fit h-[350px] object-cover" alt={selectedProduct?.title} />
                    <div className="p-2">
                        <Text className="!text-[14px] !font-semibold">{selectedProduct?.title}</Text>
                        <Flex align={'center'} justify={'space-between'}>
                            <Text>{selectedProduct?.price} c.</Text>
                            <div className="flex gap-2">
                                <FiShoppingCart className="text-green-500 cursor-pointer" onClick={() => handleAddProductToCart(selectedProduct)} />
                                {!isProductInWislist ? <FaRegHeart className="text-green-500 cursor-pointer" onClick={() => handleAddProductToWishlist(selectedProduct)} /> : <FaHeart className="text-green-500 cursor-pointer" onClick={() => handleAddProductToWishlist(selectedProduct)} />}
                            </div>
                        </Flex>
                    </div>
                </Paper>

            </Modal>
        </main>
    )

}