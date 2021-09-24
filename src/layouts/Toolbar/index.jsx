import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles,Button } from '@material-ui/core';
import   SearchInput from '../SearchInput';
import AddIcon from '@material-ui/icons/Add';

import styles from './style';

class Toolbar extends React.Component {
    state = {
        searchInput: ''
    }

    handleFieldChange = (value) => {
        this.setState({searchInput:value})
        this.props.onActionSearch(value);
    }
    onClear =()=>{
        this.setState({searchInput:''})
        this.props.onActionSearch('');
    }
    onInsert(){}
    render() {
        const { classes, className, title, addButton, onSearchView } = this.props;
        const { searchInput } = this.state;
        const rootClassName = classNames(classes.root, className);

        return (
            <div className={rootClassName}>
                <div className={classes.row}>
                    <h4 className={classes.title}>{title}</h4>
                    <span className={classes.spacer} />
                    {onSearchView && (
                        <div className={classes.row}>
                            <SearchInput
                                className={classes.searchButton}
                                placeholder="Search "
                                name="searchInput"
                                onChange={event =>
                                    this.handleFieldChange(event.target.value)
                                }
                                type="text"
                                value={searchInput}
                                onClear={() => this.onClear()}
                            />
                            <span className={classes.spacer} />
                        </div>
                    )}
                    {addButton && (
                        <Button
                        className={classes.button}
                        size="small"
                        variant="outlined"
                        onClick={()=>this.onInsert()} >
                        <AddIcon /> Add
                      </Button>
                    )}
                </div>
            </div>
        );
    }
}

Toolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onActionSearch: PropTypes.func,
    onActionAdd: PropTypes.func,
    onSearchView: PropTypes.bool,
    addButton: PropTypes.bool,
}

export default withStyles(styles)(Toolbar);
