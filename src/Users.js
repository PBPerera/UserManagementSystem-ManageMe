import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

//users is array of obeject
const users=[
    {
        id:1,
        name:'Pasindi',
    },
    {
        id:2,
        name:'Nadeesha',
    }
];

const Users = () => {
    return(
        //need to use Box to put components in one place.
        //Box is same as div or Grid tag.
        <Box 
            sx={{
                width:'calc(100%-100px)',
                margin:'auto',
                marginTop:'100px',
            }}
        >
            <UserForm/>
            <UsersTable rows={users}/>
        </Box>
        
    );

}


export default Users;