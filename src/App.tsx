import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, dialogsPageType, profilePageType, RootSTateType} from "./redux/state";
import {AppStateType} from "./redux/redux-store";
import {AnyAction, EmptyObject, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,//AppStateType //RootSTateType
}

function App(props: AppPropsType) {
    //const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer //dialogsPageState={state.dialogsPage}
                                                  //dispatch={props.store.dispatch.bind(props.store)}
                                                  //store={props.store}

                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                           />}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
