// src/components/
import React from "react";
import Dashboard from "./../../template/dashboard"

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const Home = function( ) {
  let [ dataUser, setDataUser ] = React.useState(null);
  let [ loading, setLoading ] = React.useState(true);

  // useEffect 
  //  permite sincronizar la aplicacion con 
  //  sistema de terceros (todo aquello que
  //  no sea controlado por la aplicacion)
  //
  //  useEffect(callback, dependences)
  //
  //  useEffect(() => {}, [])                 Dependencias vacias, se ejecuta solo 1 vez al montar el componente
  //  useEffect(() => {}, [ dep1, ... ])      Dependencias definidas, se ejecuta en cada ocacion que una 
  //                                          dependencia cambie su estado

  React.useEffect(() => {
    // setTimeout(() => {
    //   let data = {
    //     header:  null,
    //     content: [ "tweet_001", "tweet_002", "tweet_003", "tweet_004" ],
    //     news: null
    //   };
    //   setDataUser(data);
    //   setLoading(false);
    // }, 5000);

    // PROMISE...
    // const p = new Promise ((resolve, reject) => {});
    // p.finally(() => {})
    //   .then(data => {})
    //   .catch(err => {});
    fetch("http://localhost:3001/tweets/oskrmarolv")
      .finally((  ) => { })
      .then((response) => { return response.json() })
      .then((data) => {
        let dataToDashboard = {
          header:  null,
          content: data,
          news: null
        };
        setDataUser(dataToDashboard);

        setLoading(false);
      })
      .catch(err => { console.error(err) });
  }, [ loading ]);

  return ( <Dashboard loading= { loading } data={ dataUser } /> );
}

export default Home;
