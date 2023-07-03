
import { Link, NavLink, useNavigate } from "react-router-dom"
import './Navbar.css'
import React,{ useRef, useState } from "react"
import { useDispatch} from "react-redux"
import { FiltersActions } from "../store/slices/Filters-slice"
import { PageActions } from "../store/slices/Page-slice"

const Navbar = () => {
    const generalRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [countryOption, setCountryOption] = useState('India')
    const countrySelectChange = (e) => {
        /* console.log(e.target.value)
         if(e.target.value==='in'){
             setCountryOption('India')
         }else if(e.target.value==='jp'){
             setCountryOption('Japan')
         }else if(e.target.value==='us'){
             setCountryOption('USA')
         }else if(e.target.value==='ch'){
             setCountryOption('China')
         }else if(e.target.value==='rs'){
             setCountryOption('Russia')
         }else if(e.target.value==='au'){
             setCountryOption('Australia')
         }else if(e.target.value==='gr'){
             setCountryOption('Germany')
         }*/
    }
    const countrySetter = (country) => {
        dispatch(PageActions.setPage(1))
        setCountryOption(country)
        dispatch(FiltersActions.setCountry(country))
        generalRef.current.click()
    }

    const [categoryOption, setCategoryOption] = useState('General')
    
    const categorySetter = (category) => {
        dispatch(PageActions.setPage(1))
        setCategoryOption(category)
        dispatch(FiltersActions.setCategory(category))
        navigate(`/${category}`)
    }

    return (
        <React.Fragment>
            <div className="navbar-container">
                <nav className="top-nav-container">
                    <div className="heading">
                        <Link to="/general" onClick={() => countrySetter('in')}>NewsApp</Link>
                    </div>
                    <div className="nav-elements">
                        <div className="country-dropdown-nav">
                            <select className="country-select" name="country" id="country-1" value={countryOption} onChange={countrySelectChange}>
                                <option value="in" onClick={() => countrySetter('in')}>India</option>
                                <option value="jp" onClick={() => countrySetter('jp')}>Japan</option>
                                <option value="us" onClick={() => countrySetter('us')}>USA</option>
                                <option value="ch" onClick={() => countrySetter('ch')}>China</option>
                                <option value="rs" onClick={() => countrySetter('rs')}>Russia</option>
                                <option value="au" onClick={() => countrySetter('au')}>Australia</option>
                                <option value="gr" onClick={() => countrySetter('gr')}>Germany</option>
                            </select>
                        </div>
                        <div className="category-dropdown">
                            <select className="category-select" name="category" id="category-1" value={categoryOption} onChange={setCategoryOption}>
                                <option value="general" onClick={() => categorySetter('general')} ref={generalRef}>General</option>
                                <option value="business" onClick={() => categorySetter('business')}>Business</option>
                                <option value="entertainment" onClick={() => categorySetter('entertainment')}>Entertainment</option>
                                <option value="health" onClick={() => categorySetter('health')}>Health</option>
                                <option value="science" onClick={() => categorySetter('science')}>Science</option>
                                <option value="sports" onClick={() => categorySetter('sports')}>Sports</option>
                                <option value="technology" onClick={() => categorySetter('technology')}>Technology</option>
                            </select>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/business" onClick={() => categorySetter('business')}>business</NavLink>
                            </li>
                            <li>
                                <NavLink to="/entertainment" onClick={() => categorySetter('entertainment')}>entertainment</NavLink>
                            </li>
                            <li>
                                <NavLink to="/general" onClick={() => categorySetter('general')} ref={generalRef}>general</NavLink>
                            </li>
                            <li>
                                <NavLink to="/health" onClick={() => categorySetter('health')}>health</NavLink>
                            </li>
                            <li>
                                <NavLink to="/science" onClick={() => categorySetter('science')}>science</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sports" onClick={() => categorySetter('sports')}>sports</NavLink>
                            </li>
                            <li>
                                <NavLink to="/technology" onClick={() => categorySetter('technology')}>technology</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="category-country-box-outside">
                    <div className="country-dropdown-outside">
                        <select className="country-select" name="country" id="country-2" value={countryOption} onChange={countrySelectChange}>
                            <option value="in" onClick={() => countrySetter('in')}>India</option>
                            <option value="jp" onClick={() => countrySetter('jp')}>Japan</option>
                            <option value="us" onClick={() => countrySetter('us')}>USA</option>
                            <option value="ch" onClick={() => countrySetter('ch')}>China</option>
                            <option value="rs" onClick={() => countrySetter('rs')}>Russia</option>
                            <option value="au" onClick={() => countrySetter('au')}>Australia</option>
                            <option value="gr" onClick={() => countrySetter('gr')}>Germany</option>
                        </select>
                    </div>
                    <div className="category-dropdown-ouside">
                        <select className="category-select" name="category" id="category-2" value={categoryOption} onChange={setCategoryOption}>
                            <option value="general" ref={generalRef} onClick={() => categorySetter('general')}>General</option>
                            <option value="business" onClick={() => categorySetter('business')}>Business</option>
                            <option value="entertainment" onClick={() => categorySetter('entertainment')}>Entertainment</option>
                            <option value="health" onClick={() => categorySetter('health')}>Health</option>
                            <option value="science" onClick={() => categorySetter('science')}>Science</option>
                            <option value="sports" onClick={() => categorySetter('sports')}>Sports</option>
                            <option value="technology" onClick={() => categorySetter('technology')}>Technology</option>
                        </select>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Navbar