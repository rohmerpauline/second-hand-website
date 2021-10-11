import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../../../components/Button/Button';
import Favorite from '../../../components/Favorite/Favorite';
import adStyle from '../../../styles/Ad.module.css';
import marteau from '../../../public/userImages/marteau.jpg';

const ad = () => {
   const router = useRouter();
   const { id } = router.query;

   return (
      <div className={adStyle.container}>
         <h1 className={adStyle.adTitle}>Marteau en bois de seigle {id}</h1>
         <Image src={marteau} alt='marteau' layout='responsive' />
         <div className={adStyle.buttons}>
            <div className={adStyle.favoriteContainer}>
               <Favorite size={30} />
            </div>
            <Button buttonText='Je contacte le vendeur' />
         </div>
         <hr />
         <h2 className={adStyle.sectionTitle}>Description</h2>
         <p className={adStyle.adDescription}>
            Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consectetur adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
         </p>
         <hr />
         <h2 className={adStyle.sectionTitle}>Détails de l'annonce</h2>
         <div className={adStyle.detailsPart}>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>Type :</h3>
               <p className={adStyle.detailsText}>Don / Service</p>
            </div>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>Catégorie :</h3>
               <p className={adStyle.detailsText}>Outils</p>
            </div>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>État :</h3>
               <p className={adStyle.detailsText}>Bon état</p>
            </div>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>Lieu :</h3>
               <p className={adStyle.detailsText}>Saint-Gilles, Belgique</p>
            </div>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>Auteur.trice :</h3>
               <p className={adStyle.detailsText}>rohmerpauline</p>
            </div>
            <div className={adStyle.detailsContainer}>
               <h3 className={adStyle.detailsTitle}>Date :</h3>
               <p className={adStyle.detailsText}>11/10/2021 14:09:03</p>
            </div>
         </div>
      </div>
   );
};

export default ad;
