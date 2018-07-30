import React from 'react';
import '../../public/css/common.pcss';
const Header = () =>
    <div className="top">
        <div>Header</div>
        <div>
            <i className="logo"/>
        </div>
        <div className="nav">
            <a href="/index.html">Index</a> <a href="/shop.html">Shop</a> <a href="/demo.html">Demo</a>
        </div>
    </div>
;

export default Header;