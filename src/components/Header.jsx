// ** React Imports
import React from 'react'

// ** Custom Styles Imports
import '../styles/header.css'

// ** react-router-dom Imports
import { Link } from 'react-router-dom'

// ** Redux hooks Imports
import { useDispatch } from 'react-redux';

// ** Imports from PokemonSlice
import { updateActiveRoute } from '../store/pokemon';

const Header = () => {

    // ** react-redux hooks
    const dispatch = useDispatch();

    return (
        <section className='header-main'>
            <div className="header">
                <Link to="/" onClick={() => dispatch(updateActiveRoute('/'))}>
                    <div className="header-left">
                        <div className="header-img">
                            <img src="/Pkedex.png" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="header-right">
                    <a target='_blank' href="https://lucky-cocada-355e1e.netlify.app/">FRANÇAIS</a>
                    <span>/</span>
					<a target='_blank' href="http://blabla">ENGLISH</a>
                </div>
				
               <div className="header-right">
					<div>
						<a>
							<a target='_blank' href="https://github.com/nareshkumaralari">
							    <div className="header-img">
									<img src="/github.png" alt="" />
								</div>
							</a>
						</a>
					</div>
					<span>/\/\/\</span>
					<div>
						<a>
							<a target='_blank' href="https://www.linkedin.com/in/nareshkumaralaria/">
								<div className="header-img">
									<img src="/LinkedIn.png" alt="" />
								</div>
							</a>
						</a>
					</div>
                </div>				
            </div>
            <div className="divider"></div>
        </section>
    )
}

export default Header