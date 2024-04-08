import {Route, Routes} from "@angular/router";
import {C1Component} from "./component/c1/c1.component";
import {c1Route} from "./component/c1/c1.route";
import {c2Route} from "./component/c2/c2.route";
import {c3Route} from "./component/c3/c3.route";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const indexRoute:Route={
  path:"",
  component:C1Component
}




export const routes:Routes=[
  indexRoute,
  c1Route,
  c2Route,
  c3Route,
  {
    path:"**",
    component:NotFoundComponent
  }

]
