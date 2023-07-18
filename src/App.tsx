import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, state, stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
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
                           render={()=> <Dialogs dialogsPageState= {state.dialogsPage}

                           />}/>
                    <Route path='/profile'
                           render={()=> <Profile posts={props.state.profilePage.posts}
                           addPost={addPost}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
