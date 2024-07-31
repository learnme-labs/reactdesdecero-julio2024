// src/components/


import Dashboard from "./../../template/dashboard"

/**
 * 
 * @param {pathImage:String, opts:Object} param0 
 * @returns 
 */
const Home = function( ) {
  let data = {
    content:[ "tweet_001", "tweet_002", "tweet_003" ]
  };

  return (
    <Dashboard data={ data } />
  );
}

export default Home;
