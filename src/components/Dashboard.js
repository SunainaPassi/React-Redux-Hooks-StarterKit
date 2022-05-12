import React, { useState } from "react";
import { Button } from "@material-ui/core";

import { DIALOGS } from "../config/constants";
import DashboardContentDialog from '../components/Common/Dialog/DashboardContentDialog'

const Dashboard = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="container-fluid">
      <h3 className="my-4">Dashboard</h3>
      <div>
        <Button onClick={() => setShowDialog(!showDialog)}> Click Me</Button>
      </div>
      <DashboardContentDialog
        {...DIALOGS.dashboardContent}
        isOpen={showDialog}
        handleClose={() => setShowDialog(false)}
      />
    </div>
  );
};

export default Dashboard;
