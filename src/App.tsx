import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {postDataType, Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsDataPropsType, messagesDataPropsType} from "./index";

type AppPropsType = {
    posts: postDataType[]
    dialogsData: dialogsDataPropsType[]
    messagesData: messagesDataPropsType[]
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

                    <Route path='/dialogs'
                           render={()=> <Dialogs dialogsData={props.dialogsData}
                                                 messagesData={props.messagesData}

                           />}/>
                    <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
