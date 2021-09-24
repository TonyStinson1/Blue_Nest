import React, { Component } from 'react';
import _ from "lodash";

import HeaderMenu from "../../config/header";
import Logo from "../../assets/images/logo.png";
class Header extends Component {
    state = {
        activeMainMenu: null,
        activeSubmenu: null,
        isSearchBar: false,
        search: '',
        isAnimation: true
    }
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = (event) => {

        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('#/')[1];
        let checkHeight = {}
        if (currentUrl === 'dashboard' || currentUrl === "dashboard-v2") {
            checkHeight = { min: 430, max: 440 }
        } else {
            checkHeight = { min: 190, max: 205 }
        }
        if (checkHeight.min < window.scrollY && checkHeight.max > window.scrollY) {
            this.setState({ isAnimation: false }, () => {
                setTimeout(() => {
                    this.setState({ isAnimation: true })
                }, 500)
            })

        }
    }

    componentDidMount() {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('#/')[1];
        if (currentUrl) {
            let findMenu = _.filter(HeaderMenu, { list: [{ url: currentUrl }] });
            findMenu = findMenu[0];
            this.setState({ activeMainMenu: findMenu.name, activeSubmenu: currentUrl });
        }
    }
    handlePageRedirect(mainMenu, submenu) {
        this.setState({ activeMainMenu: mainMenu, activeSubmenu: submenu.url });
        window.location.href = "/#/" + submenu.url
    }
    handleSearchBar = (active) => {
        this.setState({ isSearchBar: active, search: '' })
    }
    render() {
        const { activeMainMenu, activeSubmenu, isSearchBar, search, isAnimation } = this.state;

        let scrollClass = isAnimation ? "nav-bg top-nav-collapse" :"nav-bg" ;
        return (
            <header id="header">
                {/* {isAnimation && ( */}
                    <nav className={"navbar navbar-expand-lg fixed-top scrolling-navbar "+ scrollClass}>
                        <div className="container">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="mdi mdi-menu"></span>
                                    <span className="mdi mdi-menu"></span>
                                    <span className="mdi mdi-menu"></span>
                                </button>
                                <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                            </div>

                            <div className="collapse navbar-collapse" id="main-navbar">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    {HeaderMenu.map((menu, i) => (
                                        <li className={activeMainMenu == menu.name ? "nav-item dropdown active" : "nav-item dropdown"} key={i}>
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                                {menu.name}
                                            </a>
                                            <div className="dropdown-menu" style={{ cursor: 'pointer' }}>
                                                {menu.list.map((submenu, j) => (
                                                    <a className={activeSubmenu == submenu.url ? "dropdown-item active" : "dropdown-item"} key={j} onClick={() => this.handlePageRedirect(menu.name, submenu)}>{submenu.name}</a>
                                                ))}

                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* <!-- Search Box Start --> */}
                                <div className="search-icon">
                                    <span className="open-search" onClick={() => this.handleSearchBar(true)}>
                                        <i className="mdi mdi-magnify btn btn-common"></i>
                                    </span>
                                </div>
                                <form role="search" className="navbar-form" style={{ display: isSearchBar ? 'block' : 'none' }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-group has-feedback">
                                                <input type="text" placeholder="Type and search ..." className="form-control"
                                                    name="search" value={search} onChange={(e) => this.setState({ search: e.target.value })} />
                                                <div className="close"><i className="mdi mdi-close" onClick={() => this.handleSearchBar(false)} ></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu Start --> */}
                        <ul className="wpb-mobile-menu">
                            {HeaderMenu.map((menu, i) =>
                                <li key={i}>
                                    <a className={activeMainMenu == menu.name ? "active" : ""}></a>
                                    <ul className="dropdown">
                                        {menu.list.map((submenu, j) => (
                                            <li key={j}>
                                                <a className={activeSubmenu == submenu.url ? "active" : ""}
                                                    onClick={() => this.handlePageRedirect(menu.name, submenu)}
                                                >{submenu.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </nav>
                {/* )} */}
            </header>
        )
    }
}

export default Header;

