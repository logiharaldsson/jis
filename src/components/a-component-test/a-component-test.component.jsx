import React from 'react';

import './a-component-test.styles.scss';

import { connect } from 'react-redux';
import { setCurrentCounterArray } from '../../redux/user/user.actions';

var itemConst = [];
class AComponentTest extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            sex: '',
            age: '',
            boxNumber: 0,
            count: 0,
            boxId: 0,
            allCategories: [],
            currentCounterArray : []  
        }
    }

    loadUser = (data) => {
        this.setState(Object.assign(this.state, {
            id: data.id,
            sex: data.sex,
            age: data.age,
            boxNumber: data.boxNumber,
            count: data.count
        }))
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('on submit: ', this.state.currentCounterArray)
        const addToState = {
            setCurrentCounterArray: this.state.currentCounterArray
        }

        this.props.currentCounterArray(addToState);
        
    }
    

    render() {
        
        const getUsers = (number) => {
            fetch(`http://localhost:3001/${number}`)
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    console.log(user)
                    this.loadUser(user);
                    // this.setState({boxNumber: number})
                }
            
            })
            .then(data => console.log('state now: ', this.state))
        }

        const getAll = () => {
            fetch(`http://localhost:3001/allBoxes`)
            .then(response => response.json())
            .then(user => {
                if (user){
                    console.log(user)
                    // this.loadUser(user);
                    // this.setState({boxNumber: number})
                }
            
            })
            // .then(data => console.log('state now: ', this.state))
        }

        const getCategory = (number) => {
            fetch(`http://localhost:3001/category/1`)
            .then(response => response.json())
            .then(data => {
                if (data){
                    console.log("category count", data);
                    // this.setState({boxId: user.count})
                    this.setState({allCategories: data})
                    itemConst = data;
                    
                }
            })
            .then(() => console.log('state: categories: ', this.state.allCategories))
            
        }

        const sortCategories = () => {
            console.log('itemConst: ', itemConst);
            var newArr = [{id: 0, boxesArray: []},{id: 1, boxesArray: []},{id: 2, boxesArray: []},{id: 3, boxesArray: []},{id: 4, boxesArray: []},{id: 5, boxesArray: []},{id: 6, boxesArray: []},{id: 7, boxesArray: []},{id: 8, boxesArray: []}, {id: 9, boxesArray: []}]
            for (let i = 0; i < this.state.allCategories.length; i++){
                newArr[this.state.allCategories[i].stateid-1].boxesArray.push(this.state.allCategories[i].count)
            }
            // newArr[0].boxArr.push(123);

            console.log('newArr: ________ ',newArr);
            this.setState({allCategoriesReturn: newArr});
            console.log('state: allCategoriesReturn: ', this.state.allCategoriesReturn);
            
            // console.log('this.state.allCategories: ________ ',this.state.allCategories[1].stateid);
        }

        const getBox = () => {
            fetch(`http://localhost:3001/mybox`)
            .then(response => response.json())
            .then(user => {
                if (user){
                    console.log("category count", user);
                }
            })
        }

        const addToCounter = (tally) => {
            console.log("tally", tally)
            console.log("state: ", this.state.count)
            fetch('http://localhost:3001/plus', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.state.id,
                    tally: tally
                })
            }).then (() => getUsers(this.state.boxId))
        }

        const addNewBox = () => {
            fetch('http://localhost:3001/addNewBox', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: 'B0-2#4',
                    sex: 'Strákar',
                    age: '0-2',
                    boxNumber: 4,
                    stateid: 1
                })
            }).then (() => getCategory())
        }

        return(
            <div>
                <div className="category-picker background-solid">
                    <div className="background-solid" onClick={() => getUsers(1)}>Strákar 0-2</div>
                    <div className="background-solid" onClick={() => getUsers(2)}>Stelpur 3-6</div>
                    <div className="background-solid" onClick={() => getUsers(4)}>Stelpur 7-10</div>
                    <div className="background-solid" onClick={() => getUsers(6)}>Stelpur 11-14</div>
                    <div className="background-solid" onClick={() => getUsers(8)}>Stelpur 15+</div>
                </div>
                <div className='display-box-homepage'>
                    <div className='tally-box-container-homepage'>
                        <h1 className='tally-box-title-homepage'>Fjöldi gjafa í kassa</h1>  
                        <div className='sorting-tally-box-container-homepage'>
                            <div className="minus-buttons-div-homepage">
                                <div className='background-solid' onClick={() => addToCounter(-1)} >-1</div>
                                <div className='background-solid' onClick={() => addToCounter(-5)}>-5</div>
                            </div>
                            
                            <div className='tally-box-homepage background-solid'>
                                <h2>{this.state.id}</h2>
                                <h2>{this.state.count}</h2>
                            </div>
                            <div className="plus-buttons-div-homepage">
                                <div className='background-solid' onClick={() => {addToCounter(1)}}>+1</div>
                                <div className='background-solid' onClick={() => addToCounter(5)}>+5</div>
                                <div className='background-solid' onClick={() => getCategory(5)}>+10</div>
                                <div className='background-solid' onClick={() => sortCategories()}>Sort</div>
                                <div className='background-solid' onClick={() => this.onClick}>Submits</div>
                                <div className='background-solid' onClick={() => getBox()}>+15</div>
                                <div className='background-solid' onClick={() => getAll()}>all</div>
                                <div className='background-solid' onClick={() => addNewBox()}>add</div>
                            </div>
                        
                        </div>  
                    </div>

                    <div className="display-box-select-your-box">
                        <div className="display-box-select-your-box-text">
                            Veldu kassa
                        </div>
                        <div className="display-box-select-your-box-boxes background-solid">
                            1
                        </div>
                        <div className="display-box-select-your-box-boxes background-solid">
                            2
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

// const mapStateToProps = state => ({
//     currentCounterArray: state.currentCounterArray
//   });

export default connect(null, {setCurrentCounterArray})(AComponentTest);