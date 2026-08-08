import CssBaseline from '@mui/material/CssBaseline';

import {Link} from 'react-router'

export default function header() {
    return (
        < >
            <div className="header" className="bg-red-400 p-3" >
                <div className="nav" className="w-full flex justify-center gap-2 text-white">
                    <Link to='/' >Home</Link>
                    <Link to='/cart' >Cart</Link>
                </div>
            </div>
        </>
    )
}