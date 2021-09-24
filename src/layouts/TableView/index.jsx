import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    Typography, Paper,
    TablePagination, TableSortLabel, Button, IconButton,
    Checkbox
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import styles from './styles';
import ConfirmModel from '../ConfirmModel';

/* ------------------- array sort list  ------------------------ */
const getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}
const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

/* ------------------- Table Head column  ------------------------ */

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };
    handleSelectAllClick = event => {
        this.props.handleSelectAll(event.target.checked)
    };
    render() {
        const { classes, arrayHeaderList, recordList, onCheckBox, selectedList, order, orderBy, onAction } = this.props;

        return (
            <TableHead style={{ background: '#5166d8' }}>
                <TableRow padding="checkbox">
                    {onCheckBox ?
                        <TableCell >
                            <Checkbox style={{color:'#fff'}}
                                checked={recordList.length === selectedList.length}
                                onChange={(e) => this.handleSelectAllClick(e)}
                                inputProps={{ 'aria-label': 'select all desserts' }}
                            />
                        </TableCell>
                        : null}
                    {arrayHeaderList.map((row, i) =>
                        <TableCell
                            key={i}
                            className={classes.tableHead}
                            //numeric={row.numeric}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === row.id ? order : false}
                            style={{color:'#fff'}}
                        >

                            <TableSortLabel
                                active={orderBy === row.id}
                                direction={order}
                                onClick={this.createSortHandler(row.id)}
                            >
                                {row.label}
                            </TableSortLabel>
                        </TableCell>
                    )}
                    {onAction ? <TableCell /> 
                        : null
                    }
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    arrayHeaderList: PropTypes.array.isRequired,
    recordList: PropTypes.array.isRequired,
    onAction: PropTypes.bool

};
/* ------------------- Table Load ------------------------ */

class EnhancedTable extends React.Component {
    state = {
        page: 0,
        rowsPerPage: 5,
        recordList: this.props.recordList,
        selectedList: [],
        isDelete: false,
        messageContent: null,
        selectRecord:{}
    }
    componentDidMount() { };

    /* ---------- change page and row number recored chnage */
    handleChangePage = (event, page) => {
        this.setState({ page: page })
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value })
    };
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }
        this.setState({ order, orderBy });
    }
    handleSelectClick = (event, obj) => {
        const { selectedList } = this.state;
        const selectedIndex = selectedList.map(function (i) { return i._id; }).indexOf(obj._id)
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedList, obj);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedList.slice(1));
        } else if (selectedIndex === selectedList.length - 1) {
            newSelected = newSelected.concat(selectedList.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedList.slice(0, selectedIndex),
                selectedList.slice(selectedIndex + 1)
            );
        }

        this.setState({ selectedList: newSelected });
    }
    handleSelectAll = (checked) => {
        const { recordList } = this.props;
        if (checked) {
            const newSelecteds = recordList.map(n => n);
            this.setState({ selectedList: newSelecteds })
            //this.props.onActionCheckBoxSelect(newSelecteds);
        } else {
            //this.props.onActionCheckBoxSelect([]);
            this.setState({ selectedList: [] })
        }

    }
    updateRecord = (recored) => {
        this.props.onActionEdit(recored)
    }
    viewRecord = (recored) => {
        this.props.onActionView(recored);
    }
    onDeleteRecored(recored) {
        this.setState({
            isDelete: true,
            selectRecord:recored,
            // callFunction: 'delete',
            messageContent: "Are you sure want to delete this ?"
        })
    }
    confirmAction= async(action)=>{
        const {selectRecord} = this.state;
        if(action === 'YES'){
          this.props.onActionDelete(selectRecord)
        }
        this.setState({
          isDelete:false,
          selectRecord:null
        })
      }
    render() {
        const { page, rowsPerPage, order, orderBy, selectedList, isDelete,messageContent } = this.state;
        const { classes, arrayHeaderList, recordList, onCheckBox, onDelete, onEdit, onView } = this.props;
        const isSelectedBox = id => selectedList.map(function (obj) { return obj._id; }).indexOf(id) !== -1;

        let isAction = (onDelete || onEdit || onView) ? true : false
        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    {isDelete ? <ConfirmModel open={true} confirmAction={this.confirmAction} message={messageContent} /> : null}

                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            classes={classes}
                            arrayHeaderList={arrayHeaderList}  // list of row head column 
                            recordList={recordList}
                            onCheckBox={onCheckBox}  // allow checkbox or not
                            numSelected={false}
                            order={order}   // order by field
                            orderBy={orderBy} // order by desc and asc
                            onRequestSort={this.handleRequestSort}  // sort column
                            selectedList={selectedList}  //
                            handleSelectAll={this.handleSelectAll}   // table head checkbox select all
                            onAction={isAction}
                        />
                        <TableBody>

                            {recordList
                                .sort(getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((n, i) => {
                                    const isItemSelected = isSelectedBox(n._id);
                                    return (
                                        <TableRow hover key={i}>
                                            {onCheckBox ?
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={isItemSelected} onChange={(e) => this.handleSelectClick(e, n)} style={{color:'#5166d8'}} />
                                                </TableCell> : ''
                                            }
                                            {arrayHeaderList.map((show, j) => {
                                                return (
                                                    <TableCell key={j} component="th" scope="row"
                                                        style={{
                                                            whiteSpace: "normal",
                                                            wordWrap: "break-word",
                                                            textAlign: 'center'
                                                        }}>

                                                        {
                                                            n[show.id] ?
                                                                show.type === 'date' ? moment(n[show.id]).format('DD-MM-YYYY')
                                                                : n[show.id]
                                                            : '--'
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                            {isAction ? <TableCell>
                                                {onView && (
                                                    <IconButton className={classes.iconButton} onClick={() => this.viewRecord(n)}>
                                                        <VisibilityIcon className={classes.iconTbale}  />
                                                    </IconButton>
                                                )}
                                                {onEdit && (
                                                    <IconButton className={classes.iconButton} onClick={() => this.updateRecord(n)}>
                                                        <EditIcon className={classes.iconTbale}  />
                                                    </IconButton>
                                                )}
                                                {onDelete && (<IconButton className={classes.iconButton}  onClick={() => this.onDeleteRecored(n)}>
                                                    <DeleteIcon className={classes.iconTbale}  />
                                                </IconButton>
                                                )}

                                            </TableCell> : null}
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[2, 5, 10, 20]}
                    component="div"
                    count={recordList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}

                    classes={{
                        root: classes.tablePagination,
                        caption: classes.tablePaginationCaption,
                        selectIcon: classes.tablePaginationSelectIcon,
                        select: classes.tablePaginationSelect,
                        actions: classes.tablePaginationActions,
                      }}
                />
            </Paper>
        );
    }
}
EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    recordList: PropTypes.array.isRequired,   // table body list array
    arrayHeaderList: PropTypes.array.isRequired,  // table head row title array
    onCheckBox: PropTypes.bool,  // show the checkbox or not show

    onDelete: PropTypes.bool,
    onEdit: PropTypes.bool,
    onView: PropTypes.bool,
    onActionView: PropTypes.func,
    onActionDelete: PropTypes.func,
    onActionEdit: PropTypes.func,
};

export default withStyles(styles)(EnhancedTable);


