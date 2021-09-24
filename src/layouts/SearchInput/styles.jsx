export default theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.neutral}`,
    borderRadius: '4px',
    display: 'flex',
    flexBasis: '420px',
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingTop: theme.spacing(0.5)
  },
  icon: {
    marginRight: theme.spacing(),
    color: '#5166d8'
  },
  input: {
    flexGrow: 1,
    fontSize: '15px ',
    height: '35px',
    top:'-5px',
    letterSpacing: '-0.05px',
    marginLeft: '10px',
    marginTop: '10px'
  }
});
