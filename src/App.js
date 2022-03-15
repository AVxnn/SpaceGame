import {Route, Routes, useLocation, useRouteMatch} from "react-router-dom";
import Layout from "./pages/Layout";
import PrivateRoute from "./features/PrivateRoute/PrivateRoute";
import Auth from "./pages/Auth";
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Cup from "./pages/Cup";
import SecondShop from "./widgets/SecondShop/Secondshop";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {

    const location = useLocation();

    return (
        <>
            <main className='app'>
            <TransitionGroup>
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
                                <Route path='click' element={<h1>click</h1>}/>
                                <Route path='bonus' element={<h1>bonus</h1>}/>
                            </Route>
                            <Route path='cup' element={
                                <PrivateRoute>
                                    <Cup />
                                </PrivateRoute>
                            }/>
                        </Route>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            </main>
        </>
    );
}

export default App;
