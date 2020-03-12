import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeeFetch } from '../actions/'
import ListItem from './ListItem'

import {ListView, View, Text} from 'react-native';

class EmployeeList extends Component{
    componentWillMount() {
        this.props.employeeFetch();

        const ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees);
    }
    componentWillReceiveProps (nextProps){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(nextProps.employees); 
      
    }
    renderRow(employee){
        return <ListItem employee = {employee} />
    }
    

    render() {
        return(
        <ListView
        enableEmptySections
        dataSource = {this.dataSource} 
        renderRow = {this.renderRow}
        />
        );
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid)=>{
        return {...val, uid}
    })
    return {employees}
}

export default connect(mapStateToProps,{employeeFetch})(EmployeeList);