import React, { Component } from 'react';
import { PageLoader, PageTitle, EnhancedTable, Toolbar } from '../../../layouts'
import StaticJson from '../../../services/StaticJSON/index';
import {Toast} from '../../../services'

const { getTableViewRecored } = StaticJson;

class TablesPage extends Component {
    state = {
        isLoading: true,
        searchText: '',
        recordList: getTableViewRecored()
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handleDeleteRecored = async (recored) => {
        console.log("delete recored---------", recored);
        const {recordList} =this.state; 
        let removeUser =  recordList.filter((i)=>{
            if (i._id !== recored._id) return i;
        });
        this.setState({ recordList: removeUser })
        Toast.successToast("Successfully Delete User");
    }
    handleUpdateRecored = async (recored) => {
        console.log("update recored---------", recored)
    }
    handleViewRecored = async (recored) => {
        console.log("view recored---------", recored);
    }
    handleSearch = async (text) => {
        console.log("searchText--handle---------------", text)
        this.setState({ searchText: text })
    }
    handleAdd = async () => {
        Toast.successToast("Successfully Add new user");
    }

    handleFilterBySearch(arrayOfObject, str) {
        let searchList = arrayOfObject.filter(o => {
            return ['name', 'email', 'position'].some(k => {
                if (o[k] !== null) {
                    let a = o[k].toString();
                    return a.toLowerCase().includes(str.toLowerCase())
                }
            });
        });
        return searchList;

    }

    render() {
        const { recordList, searchText } = this.state;
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Tables' };

        const tableHead = [
            { id: 'name', label: 'Name', type: 'string' },
            { id: 'email', label: 'Email', type: 'string' },
            { id: 'position', label: 'Position', type: 'string' },
            { id: 'createdAt', label: 'Date', type: 'date' }
        ];

        let list = (searchText === null || searchText === undefined || searchText === '') ?
            recordList : this.handleFilterBySearch(recordList, searchText);

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Table Section --> */}
                <section className="Material-error-section section-padding">
                    <div className="container">
                        <Toolbar title={"Users"}
                            addButton={true}
                            onSearchView={true}
                            onActionSearch={this.handleSearch}
                            onActionAdd={this.handleAdd}
                        />
                        <EnhancedTable
                            arrayHeaderList={tableHead}
                            recordList={list}
                            onCheckBox={true}
                            onDelete={true}
                            onEdit={true}
                            onView={true}

                            onActionDelete={this.handleDeleteRecored}
                            onActionEdit={this.handleUpdateRecored}
                            onActionView={this.handleViewRecored}
                        />
                    </div>
                </section>
            </>
        );

    }
}
export default TablesPage;

