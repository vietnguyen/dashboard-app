import React from 'react';
import log from 'loglevel';

import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';

import Sidebar from 'd2-ui/lib/sidebar/Sidebar.component';

const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
    },

    getDefaultProps() {
        return {
            name: 'John',
        };
    },

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    },

    _sidebarItemClicked(sideBarItemKey) {
        log.info('Clicked on ', sideBarItemKey);
    },

    render() {
        const sideBarSections = [
            { key: 'item1', label: 'Item 1' },
            { key: 'item2', label: 'Item 2' },
        ];

        return (
            <div className="app-wrapper">
                <HeaderBar />
                <Sidebar
                    sections={sideBarSections}
                    onChangeSection={this._sidebarItemClicked}
                />
                <div className="main-content">{`Hello, ${this.props.name}! Hehe Your app skeleton set up correctly!`}</div>
            </div>
        );
    },
});