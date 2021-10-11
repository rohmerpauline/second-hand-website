import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import adCardStyle from '../../styles/Favorite.module.css';

interface FavoriteProps {
   size: number;
}

const Favorite = ({ size }: FavoriteProps) => {
   const [favorite, setFavorite] = useState(false);
   const toggleFavorite = () => {
      setFavorite(!favorite);
   };

   return (
      <AiFillHeart
         size={size}
         onClick={toggleFavorite}
         className={favorite ? adCardStyle.favoriteIconeActivate : adCardStyle.favoriteIcone}
      />
   );
};

export default Favorite;
