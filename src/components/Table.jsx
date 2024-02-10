/* eslint-disable react/prop-types */
export default function Table(props) {

    // Classnames
    let classNames = 'table'
    if (props.striped) classNames += ' table-striped'
    if (props.hoverable) classNames += ' table-hover'
    if (props.dark) classNames += ' table-dark'

    return (
        // <table className={"table " + (props.striped ? "table-striped" : "")}>
        // <table className={`table ${props.striped ? 'table-striped' : ''} ${props.hoverable ? 'table-hover' : ''}`}>
        <table className={classNames}>
            <thead>
                <tr>
                    {
                        props.columns ? props.columns.map(col => (
                            <th key={col.key} scope="col"> {col.label} </th>
                        )) : null
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map(row => {
                        return (
                            <tr key={row.id}>
                                {
                                    props.columns.map(col => (
                                        <td key={col.key}>
                                            {   
                                                col.render
                                                    ? col.render(row)
                                                    : row[col.key]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    );
}
