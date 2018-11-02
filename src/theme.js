import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    palette: {
        primary: teal,
        secondary: red // Indigo is probably a good match with pink
    }
});