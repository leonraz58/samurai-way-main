import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainerUnused";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp, setInitialized} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

//import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const DialogsContainer = React.lazy( ()=> import("./components/Dialogs/DialogsContainer"))
  


type AppPropsType = {
    initialized: boolean
    initializeApp: ()=>void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
    if (!this.props.initialized) {
        return <Preloader/>
    }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {/*<Suspense fallback={<Preloader/>}>*/}
                        {/*<Route path='/dialogs'*/}
                        {/*       render={() => <DialogsContainer/>}/>*/}
                        {/*</Suspense>*/}
                        <Route path='/dialogs'
                               render={() => <Suspense fallback={<div>loading</div>}><DialogsContainer/></Suspense>}/>
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
}

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
