import React from 'react';
import { Route, Link,Redirect } from "react-router-dom";
import Life from './workplace/Life';
import Skill from './workplace/Skill';
import Girl from './workplace/Girl';

function Workplace(){
    return(
        <div>
            <div className="topnav">
                <ul>
                    <li><Link to="/workplace/Life/">拓展资源</Link></li>
                    <li><Link to="/workplace/Skill/">一诗一言</Link></li>
                    <li><Link to="/workplace/Girl/">绝代有佳人</Link></li>
                </ul>
            </div>

            <div className="videocontent">
                <Redirect to="/workplace/life/" />
                <Route path="/workplace/life/" component={Life} />
                <Route path="/workplace/skill/" component={Skill} />
                <Route path="/workplace/girl/" component={Girl} />
            </div>
        </div>
    )
}

export default Workplace;