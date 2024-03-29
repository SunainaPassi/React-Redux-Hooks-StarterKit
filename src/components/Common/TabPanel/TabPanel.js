import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const TabPanel = props => {
    const { children, value, index, wrapper, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    
                    <Typography component={wrapper} >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default TabPanel;
