import React from 'react';

class AVelduAldur extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            sex: '',
            age: '',
            boxnumber: 1,
            count: 0,
            boxId: 0
            
        }

    }


    loadUser = (data) => {
        this.setState(Object.assign(this.state, {
            id: data.id,
            sex: data.sex,
            age: data.age,
            boxnumber: data.boxnumer,
            count: data.count
        }))
    }
    render() {

        const getUsers = (number) => {
            fetch(`http://localhost:3001/${number}`)
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    console.log(user)
                    this.loadUser(user);
                    this.setState({boxId: number})
                }
            })
        }

        return(
                <div className="category-picker background-solid">
                    <div className="background-solid" onClick={() => getUsers(0)}>Stelpur 0-2</div>
                    <div className="background-solid" onClick={() => getUsers(2)}>Stelpur 3-6</div>
                    <div className="background-solid" onClick={() => getUsers(4)}>Stelpur 7-10</div>
                    <div className="background-solid" onClick={() => getUsers(6)}>Stelpur 11-14</div>
                    <div className="background-solid" onClick={() => getUsers(8)}>Stelpur 15+</div>
                </div>
        );
    };
};

export default AVelduAldur;