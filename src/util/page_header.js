
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

export default class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            startDate: null,
            endDate: null,
            date: 0,
        }
    }

    dateButtonClicked = (value) => {
        this.setState({ date: value, startDate: 0, endDate: 0 });
        this.props.onDateListener(value);
    }
    setChangeDate = (dates) => {
        console.log('dates', dates)
        const [start, end] = dates;
        this.setState({ startDate: start, endDate: end })
        this.props.onDateRangeListener(dates);
    }
    render() {
        console.log('searchText', this.state.searchText)
        return (
            <div>


                {/* <DateSelect onDateRangeListener={this.onDateRangeListener} onDateListener={this.onDateListener} /> */}
                <div className="datepicker fleft btn-group" role="group" aria-label="Basic example" style={{ marginBottom: '15px' }}>
                    <button className={this.state.date === 1 ? "btn btn-outline-dark active" : "btn btn-outline-dark"} onClick={() => { this.dateButtonClicked(1) }} style={{ height: 42 }}>이번달</button>
                    <button className={this.state.date === 2 ? "btn btn-outline-dark active" : "btn btn-outline-dark"} onClick={() => { this.dateButtonClicked(2) }} style={{ height: 42 }}>3개월</button>
                    <button className={this.state.date === 3 ? "btn btn-outline-dark active" : "btn btn-outline-dark"} onClick={() => { this.dateButtonClicked(3) }} style={{ height: 42 }}>6개월</button>
                    <DatePicker
                        selectsRange={true}
                        className="datepicker-one"
                        locale={ko}
                        dateFormat="yyyy년 MM월 dd일"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        maxDate={new Date()}
                        onInputClick={() => { this.setState({ date: 0 }) }}
                        onChange={(dates) => this.setChangeDate(dates)} />

                </div>
                <Form>
                    <div className="search d-flex fleft" style={{ marginBottom: '15px' }}>
                        <Form.Control
                            onChange={(e) => { this.props.searchTextListener(e.target.value) }}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="searchinput"

                        />
                        <button className="searchbutton sideColor"><SearchIcon /></button>
                    </div>

                </Form>
            </div>
        );
    }
}
