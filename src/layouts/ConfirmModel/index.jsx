import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Component styles
import styles from './styles';

// Material helpers
import { Button, Typography, withStyles } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

//import CloseIcon from '@material-ui/icons/Close';

const DialogContent = withStyles(theme => ({}))(MuiDialogContent);
const DialogActions = withStyles(theme => ({}))(MuiDialogActions);


class ConfirmModel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open:props.open,
            message:props.message
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            open: props.open,
        });
    }
   
    handleSave(action){
        this.props.confirmAction(action);
    }
    render(){
        const {open,message} = this.state;
        return (
            <Dialog open={open} fullWidth={true} maxWidth = {'xs'}
            //onClose={this.handleClose}
	         >
                <DialogContent dividers>
                    <Typography> {message} </Typography>
                </DialogContent>
                
                <DialogActions>
                    <Button color="primary" onClick={event =>this.handleSave('YES')}> YES </Button>
                    <Button color="primary" onClick={event =>this.handleSave('NO')}>NO</Button>
                </DialogActions>
            </Dialog>
        );
    }                  
};

ConfirmModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  confirmAction: PropTypes.func,
  message:PropTypes.string,
};

ConfirmModel.defaultProps = {
    confirmAction:()=>{},
  };

export default withStyles(styles)(ConfirmModel);
