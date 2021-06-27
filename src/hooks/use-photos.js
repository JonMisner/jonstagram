import {useState, useEffect, useContext} from 'react';
import UserContext from '../context/user';
import {getPhotos, getUserByUserId} from '../services/firebase';


export default function usePhotos() {
   const [photos, setPhotos] = useState(null);
   const {
      user: {uid: userId= ''}
   } = useContext(UserContext);

   useEffect(() => {
      async function getTimelinePhotos() {
         const {following} = await getUserByUserId(userId);
         let followeduserPhotos = [];

         if (following.length > 0) {
            followeduserPhotos = await getPhotos(userId, following);
         }
      }
   }, []);

   return {photos};
}