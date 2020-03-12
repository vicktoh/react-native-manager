import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, clearForm } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Picker, Text } from 'react-native';

class EmployeeCreate extends Component {
    
    componentWillMount() {
        this.props.clearForm();
    }
    
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift})
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name"
                        placeholder="Adekunle"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input label="Phone"
                        placeholder="07066457464"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection>
                <CardSection style = {{flexDirection: 'column'}}>
                    <Text style = {styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
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
                    <Button onPress = {this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>

            </Card>
        );
    }
}

const styles = { 
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20,
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, clearForm })(EmployeeCreate);