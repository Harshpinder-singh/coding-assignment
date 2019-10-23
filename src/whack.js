import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: inline-block;
margin:0px 1px;
border: 1px solid black;
width: 20px;
height: 20px;
background:white;
`

export default class Whack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            intervalId: 0,
            arr: [],
            clicked: '',
            color: '',
            points: 0


        }
    }

    handleClick = (clicked) => {
        if (clicked == this.state.color) {
            this.setState(prev => {
                return {
                    points: prev.points + 1
                }
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    componentDidMount() {
        let cols = new Array(9)
        cols.fill(0)
        let arr = []

        cols.forEach(row => {
            arr.push(cols)
        })
        this.setState({ arr })


        this.intervalId = setInterval(() => {
            if (this.state.color.length !== 0) {
                let prevDivHandle = document.getElementById(`${this.state.color}`)
                prevDivHandle.setAttribute('style', 'background-color:white')
            }
            let row = Math.floor(Math.random() * 9)
            let col = Math.floor(Math.random() * 9)
            let divHandle = document.getElementById(`${row}/${col}`)
            divHandle.setAttribute('style', 'background-color:green')
            this.setState({ color: `${row}/${col}` })


        }, 2000)
        setTimeout(() => {
            clearInterval(this.intervalId)
            this.setState({ color: '' })

        }, 1000 * 30)

    }
    render() {
        console.log(this.state)
        return (

            <div>
                {this.state.arr.map((row, index1) => <div key={index1}>{row.map((col, index) => <Div key={index} id={`${index1}/${index}`} onClick={() => this.handleClick(`${index1}/${index}`)}></Div>)}</div>)}

                <h3>points - {this.state.points}</h3>
            </div>

        )
    }
}