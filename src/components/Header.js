import React from 'react'
function Header(props){
return(
    <div className='Header'>
        <h3 className='Heading'>
        {props.status}k
        </h3>
    </div>
)
}
export default Header;