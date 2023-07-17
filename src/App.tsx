import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {postDataType, Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    posts: postDataType[]
}
function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={()=> <Dialogs/>}/>
                    <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
