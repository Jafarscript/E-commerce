import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

const useWishlist = () => useContext(WishlistContext);

export default useWishlist;
