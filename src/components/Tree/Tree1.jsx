import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.grey[800]
      : theme.palette.grey[200],
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: "50%",
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(theme.palette.primary.main, 0.25)
        : theme.palette.primary.dark,
    color: theme.palette.mode === "dark" && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export default function ({items}) {
  return (
    <>
    <RichTreeView
      aria-label="customized"
      defaultExpandedItems={["1"]}
      sx={{ overflowX: "hidden", height: 498, flexGrow: 1, minWidth: 300, scrollbarWidth:"thin", zIndex:5}}
      slots={{ item: StyledTreeItem }}
      items={items}
    />
    </>
  );
}
