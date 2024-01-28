import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainerUnused";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

type AppPropsType = {
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,//AppStateType //RootSTateType
}

function App(props: AppPropsType) {
    //const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer //dialogsPageState={state.dialogsPage}
                                                  //dispatch={props.store.dispatch.bind(props.store)}
                                                  //store={props.store}

                           />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                           />}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
