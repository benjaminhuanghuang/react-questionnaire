import { useEffect } from 'react';
import { auth } from "../firebase";
// Redux
import { useDispatch } from "react-redux";
import { setUser} from "../redux/authActions";

export default function useAuthListener() {
  const dispatch = useDispatch();
  // listen to firebase auth()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
       if (authUser) {
        const user = {
          displayerName: authUser.displayName,
          email: authUser.email,
          emailVerified: authUser.emailVerified,
          photoURL: authUser.photoURL
        }
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
}