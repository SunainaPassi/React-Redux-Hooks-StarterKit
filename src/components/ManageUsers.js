import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  Paper,
  Tabs,
  Tab,
  AppBar,
} from '@material-ui/core';


import { NUMBER } from '../config/constants';
import { a11yProps } from '../config/helpers';
import TabPanel from './Common/TabPanel';

const ManageUsers = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(NUMBER.zero);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="container-fluid">
      <Grid item xs={12}>
        <Typography variant='h2'>Manage Users</Typography>
      </Grid>
      <div>
        <Grid item xs={12}>
          <Paper>
            <AppBar position='static' color='transparent' elevation={0}>
              <Tabs
                value={value}
                indicatorColor='primary'
                textColor='primary'
                onChange={(event, newValue) => handleChange(event, newValue)}
                variant='scrollable'
                scrollButtons='auto'
              >
                <Tab
                  className={`nav-link ${
                    value === NUMBER.zero ? 'active' : ''
                  }`}
                  label='User Listing'
                  {...a11yProps(0)}
                />
                <Tab
                  className={`nav-link ${
                    value === NUMBER.one ? 'active' : ''
                  }`}
                  label='Payment History'
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              Listing
            </TabPanel>
            <TabPanel value={value} index={1}>
              Payment
            </TabPanel>
          </Paper>
        </Grid>
      </div>
      </div>
    </>
  );
};

export default ManageUsers;
