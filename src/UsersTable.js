import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const UsersTable = ({rows}) =>{
    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    //map function use to transport from one arrry to another array.
                    //Use rows.length > 0? to check whether array is empty or not
                   rows.length > 0? rows.map(row => (

                        //key is used to identify each row. it is unique value.
                        //In here '&:last-child td, &:last-child th' is used to remove border from last row. If the data is entered as last one.
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border:0 }}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={ () => {}} 
                                >
                                 Update   
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={ () => {}} 
                                >
                                 Delete   
                                </Button>
                            </TableCell>

                        </TableRow>
                        //this is IF not part of map function.
                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th' : {border:0 }}}>
                            <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>

        </Table>
    </TableContainer>
    );
    
}

export default UsersTable