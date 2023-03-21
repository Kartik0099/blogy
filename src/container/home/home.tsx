import react from 'react';
import { AppName } from '../../utils/appName'
import NavBar from '../navbar/homeNav/navbarHome'
import Typography  from "@material-tailwind/react/components/Typography";
import Button  from "@material-tailwind/react/components/Button";

export default ()=>{
    return <><div className="sticky">
        <NavBar />
        <hr className="" />
    </div>
    <div className="h-96 bg-yellow-400">
    <h1 className="text-7xl ml-6 pt-24 text-gray-800">Stay curious.</h1>
    <h1 className="w-80 ml-6 pt-2 tracking-tighter text-gray-800">Discover stories, thinking, and expertise from writers on any topic.</h1>
    
    </div>
    </>
}