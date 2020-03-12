import React, { Component } from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import {employeeEdit, employeeUpdate,employeeDelete} from '../actions/'
import { Card, CardSection, Input, Button, Confirm } from './common';
import { Picker, Text } from 'react-native';

class EmployeeEdit extends Component{
    state = {showModal : false}
    
    componentWillMount() {
        _.each(this.props.employee, (value, prop)=>{
            this.props.employeeUpdate({prop, value});
        })
    }
    
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeEdit({name, phone, shift, uid : this.props.employee.uid})
    }
    onTextPress(){
        const{ phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift} `);

    }
    onAccept(){
        this.props.employeeDelete({uid:this.props.employee.uid});

    }
    onDecline(){
        this.setState({showModal:false})
    }

    render() {
        const {name, phone, shift} = this.props
        return (
            <Card>
                <CardSection>
                    <Input label="Name"
                        placeholder="Adekunle"
                        value={name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input label="Phone"
                        placeholder="07066457464"
                        value={phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection>
                <CardSection style = {{flexDirection: 'column'}}>
                    <Text style = {styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thurday" value="Thurday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection> 
                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
                <CardSection>
                    <Button onPress = {this.onTextPress.bind(this)}>
                    Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress = {()=>{this.setState({showModal: !this.state.showModal})}}>
                    Fire Employee
                    </Button>
                </CardSection>
                <Confirm visible = {this.state.showModal} 
                    yesPress = {this.onAccept.bind(this)}
                    noPress = {this.onDecline.bind(this)}
                >
                    Are you Sure You Want to Delete this user
                </Confirm>

            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}


export default connect(mapStateToProps,{employeeUpdate, employeeEdit, employeeDelete})(EmployeeEdit);