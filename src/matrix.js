import React from 'react'

export default class Matrix extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matrix: [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]],
            transpose: [[1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]]
        }
    }

    handleChange = (e, row, col) => {
        let arr = JSON.parse(JSON.stringify(this.state.matrix))
        arr[row][col] = e.target.value
        let w = arr.length
        let h = arr[0].length
        let transpose = []
        for (let i = 0; i < h; i++) {

            transpose[i] = [];

            for (let j = 0; j < w; j++) {

                transpose[i][j] = arr[j][i];
            }
        }
        this.setState({
            matrix: arr,
            transpose: transpose
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.matrix.map((row, index1) => <div key={row}>{row.map((col, index) => <input key={col} type="text" value={col} onChange={(e) => this.handleChange(e, index1, index)} />)}</div>)}
                </div>
                <h3>transpose-</h3>
                <div>
                    <div>
                        {this.state.transpose.map(row => <div key={row}>{row.map(col => <input key={col} type="text" value={col} />)}</div>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}