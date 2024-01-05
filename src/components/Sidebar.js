import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from "@material-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <MenuIcon className="menu-icon" />
      <InboxIcon className="icon" />

      <DraftsIcon className="icon" />

      <SendIcon className="icon" />

      <InboxIcon className="icon" />

      <DraftsIcon className="icon" />

      <SendIcon className="icon" />

      <InboxIcon className="icon" />

      <DraftsIcon className="icon" />

      <SendIcon className="icon" />

      <InboxIcon className="icon" />

      <PowerSettingsNewIcon />
    </div>
  );
};

export default Sidebar;
