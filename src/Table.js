import React from 'react'
import Row from './Row'
import { observer } from "mobx-react"

class Table extends React.Component {
    render() {
        const { store } = this.props
        return (<table>
            <thead>
                <tr>
                    <td>Name:</td>
                    <td>Daily salary:</td>
                </tr>
            </thead>
            <tbody>
                {store.employeesList.map((e, i) =>
                    <Row
                        key={i}
                        data={e}
                    />
                )}
            </tbody>
        </table>)
    }
}
Table = observer(Table)

export default Table