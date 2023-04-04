import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Icon } from "@iconify/react";
import data from "../data/demoData";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      {data.map((item, index) => (
        <div key={index}>
          <BottomNavigationAction
            label={item.name}
            value={item.name}
            icon={<Icon icon={item.icon} width="30" />}
          />
        </div>
      ))}
    </BottomNavigation>
  );
}
