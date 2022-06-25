import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div style={{display: 'flex', paddingTop: '15px', backgroundColor: 'black', color: 'white'}}>
        <Link style={{
          marginLeft: '10px', marginRight: '10px', textDecoration: 'none', color: 'white'}} to='/Home'>Home</Link> |
        <Link style={{marginLeft: '10px', marginRight: '10px', textDecoration: 'none', color: 'white'}} to='/Content'>Content</Link> |
        <Link style={{marginLeft: '10px', marginRight: '10px', textDecoration: 'none', color: 'white'}} to='/About'>About</Link>
    </div>
  )
}

export default Nav;