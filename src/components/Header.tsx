import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => (
  <AppBar color="transparent" position="static" sx={{ boxShadow: "none" }}>
    <Toolbar
      component={Stack}
      direction="row"
      justifyContent="space-between"
      sx={{ svg: { height: "1.5em", width: "1.5em" } }}
    >
      <IconButton>
        <PersonIcon />
      </IconButton>

      <LocalFireDepartmentIcon />

      <IconButton>
        <ForumIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
