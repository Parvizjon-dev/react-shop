import img1 from '../../assets/carousel/main-banner.jpg'
import img2 from '../../assets/carousel/banner2.jpg'
import img3 from '../../assets/carousel/banner3.jpg'

export const HeaderCarousel = () => {
    return (
        <div id="carouselExample" className="carousel slide mt-3">
            <div className="carousel-inner rounded-5">
                <div className="carousel-item carousel-after active">
                    <img src={img1} className="d-block w-100 h-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
