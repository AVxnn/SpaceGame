import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "./pages/Layout";
import PrivateRoute from "./features/PrivateRoute/PrivateRoute";
import Auth from "./pages/Auth";
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Cup from "./pages/Cup";
import SecondShop from "./widgets/SecondShop/Secondshop";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ClickShop from "./widgets/ClickShop/ClickShop";

function App() {

    const location = useLocation();

    return (
        <>
            <main className='app'>
                <TransitionGroup className='container'>
                    <CSSTransition
                        timeout={300}
                        classNames='fade'
                        key={location.key}
                    >
                        <Routes location={location}>
                            <Route path='/' element={<Layout />}>
                                <Route path='/' element={<Auth />}/>
                                <Route path='game' element={
                                    <PrivateRoute>
                                        <Game />
                                    </PrivateRoute>
                                }/>
                                <Route path='shop/' element={
                                    <PrivateRoute>
                                        <Shop />
                                    </PrivateRoute>
                                }>
                                    <Route path='second' element={<SecondShop />}/>
                                    <Route path='click' element={<ClickShop />}/>
                                    <Route path='bonus' element={<h1>bonus</h1>}/>
                                </Route>
                                <Route path='cup' element={
                                    <PrivateRoute>
                                        <Cup />
                                    </PrivateRoute>
                                }>
                                    <Route path='second' element={<SecondShop />}/>
                                </Route>
                            </Route>
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        </>
    );
}

export default App;
