import { useContext, useEffect } from "react";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dasboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me').then(response => {
      console.log(response);
    })
    .catch(err => console.log(err))
  }, [])
  
  return <h1>{user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})