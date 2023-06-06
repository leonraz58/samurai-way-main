import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://dynamic.placementindia.com/recruiter_comp_logo/309213.png" alt="logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img width={200}
                         src="https://tricksbystg.org/wp-content/uploads/2017/10/rainbow_background-wallpaper-2560x1600.jpg"
                         alt=""/>
                </div>
                <div>
                    avatar+description
                </div>
                <div>my posts
                    <div>newpost</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                        <div>post3</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
