import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from '../Title'

// Generate Order Data
const createData = (id, date, accountName, parsedGroup, parsedUsersNum) => ({
  id,
  date,
  accountName,
  parsedGroup,
  parsedUsersNum,
})

const rows = [
  createData(0, '16 Mar, 2022', 'Telegram bot', 'memesAllday', 312),
  createData(1, '16 Mar, 2019', 'Telegram bot', 'housewifes69', 866.99),

  createData(4, '15 Mar, 2019', 'telegramchik', 'LongBin', 212.79),
]

const Statistics = () => {

  const onClick = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Title>Статистика</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Дата парсинга</TableCell>
            <TableCell>Аккаунт</TableCell>
            <TableCell>Целевая Группа</TableCell>
            <TableCell align="right">Конвкрсия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.accountName}</TableCell>
              <TableCell>{row.parsedGroup}</TableCell>
              <TableCell 
                align="right">
                {`${row.parsedUsersNum} чел.`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link 
        color="primary" 
        href="#" 
        onClick={onClick} 
        sx={{ mt: 3 }}>
        Посмотреть всю историю
      </Link>
    </>
  )
}

export default Statistics
