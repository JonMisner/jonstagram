import {useState, useEffect, useContext} from 'react';
import UserContext from '../context/user';
import {getUserByUserID} from '../services/firebase'

export default function useUser() {
   const [activeUser, setActiveUser] = useState({});
   const {user} = useContext(UserContext);

   useEffect(() => {
      async function getUserObjByUserId() {
        const [response] = await getUserByUserID(user.uid);
         setActiveUser(response);
      }
      if (user?.uid) {
         getUserObjByUserId();
      }
   }, [user]);

   return {user: activeUser};
}