import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Results } from "./Results";

export const Routes = () => {
 // Route Section
 return(
   <div className="p-4">

     {/* Switch render one route at a time */}
     <Switch>
       {/* Main Route */}
       <Route exact path={"/"}>
         <Redirect to="/search" />
       </Route>

       {/*Second Route */}
       <Route exact path={['/search', '/image', '/news', '/videos']}>
         <Results />
       </Route>

     </Switch>
   </div>  
  );
}