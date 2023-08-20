import React from "react";
import {StoreType} from "./redux/state";
import {store} from "./redux/redux-store";

const StoreContext = React.createContext(store)

export default StoreContext