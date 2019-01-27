import React from 'react'

const Nav = () => {
    return (
        <div class="row">
            <div class="small-12">
                <nav class="top-bar topbar-center-logo" id="topbar-center-logo">
                    <div class="top-bar-left">
                        <ul class="menu">
                            <li class="menu-text title"><img class="logo" src="./img/Asset 7@2x.png"/></li>
                        </ul>
                    </div>
                    <div class="top-bar-right">
                        <ul class="dropdown menu" data-dropdown-menu>
                             <li>
                                <a>Icon</a>
                            </li>
                        </ul>
                     </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav