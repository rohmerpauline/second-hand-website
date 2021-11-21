import connexionStyle from '../../styles/Connexion.module.css';
import Link from 'next/link';
import AccountMessageProps from './props';

const AccountMessage = (props: AccountMessageProps) => {
   const { href, text, textLink } = props;

   return (
      <p className={connexionStyle.message}>
         {text},
         <Link href={href}>
            <span className={connexionStyle.registerlink}> {textLink}</span>
         </Link>
         .
      </p>
   );
};

export default AccountMessage;
