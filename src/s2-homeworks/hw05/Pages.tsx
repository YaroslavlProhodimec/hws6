import React from 'react'
import {Navigate, Route, Routes,} from 'react-router-dom'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

import {Error} from "./pages/Erorr";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
   ERROR: '/404'
}

function Pages() {
    return (
        <div>

            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                <Route path={"/"} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>


                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                <Route path={PATH.ERROR} element={<Error/>}/>
                <Route path={"*"} element={<Navigate to={PATH.ERROR}/>}/>
                {/*роут для несуществующей страницы должен о трисовать <Error404 />*/}

                {/*роут для несуществующей страницы должен о трисовать <Error404 />*/}
                {/*<Route ...*/}
            </Routes>
        </div>
    )
}

export default Pages
