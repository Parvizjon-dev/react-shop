import { MappedProducts } from "../../components"
import { Carousel, CarouselSlide } from "@mantine/carousel"
import { Image, Text } from "@mantine/core"
import { useEffect, useState } from "react"

export const HomePage = () => {
    const [products, setProducts] = useState([]);

    const slideImages = [
        'https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1717415993908.jpg',
        'https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1717396416090.jpg'
    ]

    const getProducts = async () => await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setProducts(json));


    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Carousel className="py-4">
                {slideImages?.map((image, index) =>
                    <CarouselSlide key={index}>
                        <Image src={image} alt="" />
                    </CarouselSlide>
                )}
            </Carousel>

            <br />
            <div>
                <Text className="!text-[18px] !font-semibold">Популярные продукты</Text>
                <MappedProducts products={products} />
            </div>
        </div>
    )
}
