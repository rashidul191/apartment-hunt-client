import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section>
            <div className="container">
                <div className="header-main-bg">
                    <div className="header-main-font">
                        <div className="header-main-font-style">
                            <h1 className="text-white">FIND YOUR HOUSE RENT</h1>

                            
                            <div className="from-style">
                                <form class="form-inline">
                                    <div class="form-group mx-sm-3 mb-2">
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default HeaderMain;