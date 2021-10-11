import { useState } from 'react';
import Image from 'next/image';
import Favorite from '../Favorite/Favorite';
import marteau from '../../public/userImages/marteau.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
import adCardStyle from '../../styles/AdCard.module.css';
import Link from 'next/link';

const AdCard = () => {
   const [favorite, setFavorite] = useState(false);
   const toggleFavorite = () => {
      setFavorite(!favorite);
   };

   return (
      <>
         <Link href={`/recherche/${2}`}>
            <article className={adCardStyle.container}>
               <div className={adCardStyle.favoriteContainer}>
                  <Favorite size={20} />
               </div>
               <div className={adCardStyle.containerImage}>
                  <Image src={marteau} alt='marteau' height={200} width={200} layout='fixed' />
               </div>
               <div className={adCardStyle.adText}>
                  <h1 className={adCardStyle.title}>Marteau en bois</h1>
                  <p className={adCardStyle.subTitle}>Bruxelles - 09/12/2021 - slug49!</p>
                  <p className={adCardStyle.description}>
                     Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                     amet. Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor
                     sit amet. Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum
                     dolor sit amet. Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem
                     ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet,
                     lorem ipsum dolor sit amet.
                  </p>
                  <div className={adCardStyle.details}>
                     <p className={adCardStyle.detailsState}>Bon état</p>
                     <p className={adCardStyle.separator}>|</p>
                     <p className={adCardStyle.detailsTypeAd}>Objet</p>
                     <p className={adCardStyle.separator}>|</p>
                     <p className={adCardStyle.detailsCategory}>Outils</p>
                  </div>
               </div>
            </article>
         </Link>
      </>
   );
};

export default AdCard;
