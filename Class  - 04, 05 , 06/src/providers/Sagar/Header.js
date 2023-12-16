import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'
import { useStateValue } from '../providers/StateProvider'

export const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();
    
  return (
    <div className='header'>
        <img className='header__logo' 
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
        <div className='header__search'>
            <input className='header__searchinput' type='text'/>
            <SearchIcon className='header__searchIcon'/>

        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <div className='header__optionBasket'>
                <ShoppingBasket />
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
        </div>

    </div>
  )
}
export default Header;