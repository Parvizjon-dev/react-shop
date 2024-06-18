import { Flex, Image, Paper, Text } from "@mantine/core"
import { IProduct } from "../../interfaces/IProduct"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cart"
import { toast } from "react-toastify"
import { RootState } from "../../store/store"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { addToWishlist, removeFromWishlist } from "../../store/slices/wishlist"
import { MouseEvent } from "react"

export const ProductCard = ({ description, id, title, url, price }: IProduct) => {
    const dispatch = useDispatch()
    const cartState = useSelector((state: RootState) => state.cart.products);
    const wishlistState = useSelector((state: RootState) => state.wishlist.products);

    const isProductInCart = cartState.find((item) => item?.id === id);
    const isProductInWislist = wishlistState.find((item) => item?.id === id);


    const handleAddProductToCart = (e: MouseEvent) => {
        e.stopPropagation()
        if (!isProductInCart) {
            dispatch(addToCart({ description, id, price, title, url, quantity: 1 }))
            return toast.success('Продукт добавлен в корзину!')
        }

        return dispatch(removeFromCart(id))
    }

    const handleAddProductToWishlist = (e: MouseEvent) => {
        e.stopPropagation()
        if (!isProductInWislist) {
            return dispatch(addToWishlist({ description, id, price, title, url, quantity: 1 }))
        }

        return dispatch(removeFromWishlist({ description, id, price, title, url }))

    }

    return (
        <Paper withBorder shadow="md">
            <Image src={url} className="w-fit h-[150px] object-cover" alt={title} />
            <div className="p-2">
                <Text className="!text-[14px] !font-semibold">{title.length > 25 ? title?.substring(0, 25) + '...' : title}</Text>
                <Flex align={'center'} justify={'space-between'}>
                    <Text>{price} c.</Text>
                    <div className="flex gap-2">
                        <FiShoppingCart className="text-green-500 cursor-pointer" onClick={(e: MouseEvent) => handleAddProductToCart(e)} />
                        {!isProductInWislist ? <FaRegHeart className="text-green-500 cursor-pointer" onClick={(e: MouseEvent) => handleAddProductToWishlist(e)} /> : <FaHeart className="text-green-500 cursor-pointer" onClick={(e: MouseEvent) => handleAddProductToWishlist(e)} />}
                    </div>
                </Flex>
            </div>
        </Paper>
    )
}
