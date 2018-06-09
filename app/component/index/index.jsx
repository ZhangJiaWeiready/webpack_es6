import React from 'react';
import '../../public/css/index.pcss';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <div className="top">
                    这是头部
                    <i className="img"></i>
                </div>
                <div className="bottom">
                    这是底部
                </div>
            </div>
        )
    }
}

export default Index