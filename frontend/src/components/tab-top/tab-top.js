import React, { Component } from 'react';
import './tab-top.scss'; 
import * as Top from '@rmwc/top-app-bar';
import * as Tabs from '@rmwc/tabs';

import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

/**
 * Aquivo topo voltar
 * Esse arquivo é chamado pelo router quando não está no /Home/* ou /.
 */
class TabTop extends Component {
  
  render() { 
    const {TabBar, Tab} = Tabs;
    const {TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust} = Top;
   
    return (
      <header className="tab-top">
        <TopAppBar dense>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>EXOGAMES</TopAppBarTitle>
              <TabBar>
                <Tab icon="star_border" label="Cookies" />
                <Tab icon="favorite_border" label="Pizza" />
                <Tab icon="mood" label="Icecream" />
              </TabBar>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar> 
        < TopAppBarFixedAdjust /> 
      </header>

    );
  }
}

export default TabTop;

