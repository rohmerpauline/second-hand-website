import { useState } from 'react';
import Image from 'next/image';
import marteau from '../../public/userImages/marteau.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
import adStyle from '../../styles/Ad.module.css';
import Link from 'next/link';

const AdCard = () => {
   const [favorite, setFavorite] = useState(false);
   const toggleFavorite = () => {
      setFavorite(!favorite);
   };

   return (
      /* <> */
      /* <Link href={`/recherche/${1}`}> */
      <article className={adStyle.container}>
         <AiTwotoneStar
            onClick={toggleFavorite}
            className={favorite ? adStyle.favoriteIconeActivate : adStyle.favoriteIcone}
         />
         <div className={adStyle.containerImage}>
            <Image src={marteau} alt='marteau' height={200} width={200} layout='fixed' />
         </div>
         <div className={adStyle.adText}>
            <h1 className={adStyle.title}>Marteau en bois</h1>
            <p className={adStyle.subTitle}>Bruxelles - 09/12/2021 - slug49!</p>
            <p className={adStyle.description}>
               Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
               Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
               Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
               Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
               Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
            </p>
            <div className={adStyle.details}>
               <p className={adStyle.detailsState}>Bon état</p>
               <p className={adStyle.separator}>|</p>
               <p className={adStyle.detailsTypeAd}>Objet</p>
               <p className={adStyle.separator}>|</p>
               <p className={adStyle.detailsCategory}>Outils</p>
            </div>
         </div>
      </article>
      /*  </Link>
      </> */
   );
};

export default AdCard;
