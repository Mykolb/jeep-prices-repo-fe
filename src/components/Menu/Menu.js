import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import SiteOne from "../Sites/SiteOne";
import SiteTwo from "../Sites/SiteTwo";
import FavoritesList from "../Favorites/FavoritesList";
import Home from "../Home/Home.js";
import '../styles/Menu.css';


import {
  Header,
  Segment,
  Icon,
  Menu,
  Grid,
  Sidebar,
  Checkbox,
} from "semantic-ui-react";


const SlidingSidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column className="wrapping-nav">
      <Sidebar.Pushable as={Segment} id='sidebar-wrap-container'>
        <Checkbox
          toggle
          checked={visible}
          onChange={(e, data) => setVisible(data.checked)}
        />
          <Sidebar
            as={Menu}
            animation="scale down"
            icon="labeled"
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item>
              <NavLink
                end
                to={`/`}
                className="nav"
                activeClassName="active"
                // activeStyle={{ color: "white", cursor: "pointer" }}
              >
                <Icon name="home" circular size="big" className='nav-icons' />
              </NavLink>
            </Menu.Item>

            <Menu.Item>
              <NavLink
                end
                to={`/site-one`}
                className="nav"
                activeClassName="active"
                // activeClassName="selected"
                // activeStyle={{ color: "white", cursor: "pointer" }}
              >
                <Icon name="world" circular size="big" className='nav-icons' />{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item>
              <NavLink
                end
                to={`/site-two`}
                className="nav"
                activeClassName="active"
                // activeClassName="selected"
                // activeStyle={{ color: "white", cursor: "pointer" }}
              >
                <Icon name="world"  circular size="big" className='nav-icons' />
              </NavLink>
            </Menu.Item>

            <Menu.Item>
              <NavLink
                end
                to={`/my-favorites`}
                className="nav"
                activeClassName="active"
                // activeClassName="selected"
                // activeStyle={{ color: "white", cursor: "pointer" }}
              >
                <Icon name="like" circular size="big" className='nav-icons' />
              </NavLink>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic style={{height: "100vh"}} id='sidebar-push-segment'>
              <Header as="h3"></Header>
              <Grid.Column>
                <Routes>
                <Route path={`/`} element={<Home />} />
                  <Route path={`/site-one`} element={<SiteOne />} />
                  <Route path={`/site-two`} element={<SiteTwo />} />
                  <Route path={`/my-favorites`} element={<FavoritesList />} />
                </Routes> 
              </Grid.Column>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SlidingSidebar;
