import Table from './components/Table'
import './App.css'

function App() {

  const columns1 = [
    {
      label: "#",
      key: "id"
    },{
      label: "First name",
      key: "firstName"
    },{
      label: "Username",
      key: "userName",
      render(row) {
        return <a href={'/' + row.userName}>{row.userName}</a>
      }
    },{
      label: "Last name",
      key: ["lastName", "surname"],
      render(row) {
        return row.lastName || row.surname
      }
    },
  ]

  const rows1 = [
    {
      id: 3,
      firstName: "Fuad",
      lastName: "Mansurov",
      userName: "@fm",
    },{
      id: 1,
      surname: "Huseynova",
      firstName: "Aytac",
      userName: "@ayka"
    },{
      id: 2,
      firstName: "Sara",
      lastName: "Kazimova",
      userName: "@sara.k"
    },
  ]


  const data = [
    {
      id: 1,
      columns: columns1,
      rows: rows1,
      hoverable: true,
      striped: false,
      dark: true
    },{
      id: 2,
      columns: columns1,
      rows: rows1,
      hoverable: false,
      striped: true,
      dark: false
    },
  ]

  return (
    <>
      {
        data.map(({id, ...props}) => <Table key={id} {...props} />)
      }
      
      {/* <Table
        hoverable
        striped
        dark
        columns={columns1}
        rows={rows1}
      /> */}

      {/* <Table
        hoverable={true}
        columns={columnNames}
        rows={rows2}
      /> */}

      {/* <Table striped columns={table2ColumnNames} /> */}
      {/* <Table dark hoverable /> */}
    </>
  )
}

export default App
