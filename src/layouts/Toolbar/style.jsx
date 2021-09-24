export default theme => ({
    root: {},
    row: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2px',
        marginLeft: '15px'
    },
    spacer: {
        flexGrow: 1
    },
    title: {
        fontWeight: '900'
    },
    searchButton: {
        width: '300px',
        color: '#66788a',
        border: '1px solid #5166d8',
        borderRadius: '18px',
        padding: '0px 0px',
        margin: '3px 25px'
    },

    button: {
        width: '140px',
        height: '40px',
        borderRadius: '5px',
        background: '#5166d8',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#FFFFFF',
        marginRight: '5px',
        "&:hover": {
            background: "#5325B7"
          }

    },
    typography: {
        margin: theme.spacing.unit * 2,
        cursor: 'pointer',
        width: '170px'
    },
    textField: {
        width: '100%',
        '& + & ': {
            margin: '5px 0px'
        },
        fontSize: '12px',
    }
});
