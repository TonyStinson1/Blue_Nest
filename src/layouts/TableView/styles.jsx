
export default theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tableHead: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'darkgray',
        textAlign: 'center'
    },
    vertIcon: {
        color: '#FFB701',
        fontSize: '28px',
        fontWeight: 'bold'
    },
    typography: {
        margin: theme.spacing(2),
        cursor: 'pointer'
    },
    iconTbale: {
        color: '#5166d8',
        outline: 'none'
    },

    tablePagination: {
        color: '#5166d8'
    },
    tablePaginationCaption: {
        color: '#5166d8'
    },
    tablePaginationSelectIcon: {
        color: '#5166d8'
    },
    tablePaginationSelect: {
        color: '#5166d8'
    },
    tablePaginationActions: {
        color: '#5166d8',
    },
    iconButton:{
        "&:focus": {
            outline: '0px dotted',
            outline: '0px auto -webkit-focus-ring-color'
          }

    }


});