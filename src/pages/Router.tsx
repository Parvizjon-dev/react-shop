import { CartPage, FavoritesPage, HomePage } from "."
import { Route, Routes } from "react-router-dom"

export const ViewRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
}