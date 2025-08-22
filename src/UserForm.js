import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

//props use to transfer data from one component to another
const UserForm = props => {

    //useState is a hook. It use to create a variable in react.
    // why we use state variable? we use this to change the value of variable.
    const [id, setId] = useState(0);
    const [name, setName] = useState('');


    return(

    // Grid, same as div tag
        <Grid
            container
            spacing={2}
        // sx, same as inline css style
        // Use camel case (first letter should be simple, other can be captal also)
        sx={{
                backgroundColor:'#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >     
        {// xs, means extra small. This put to align page to mobile phone. In here page access full width size. 
        // And also need to {} to add a comment in Grid tag.
        // Typography, same as p tag. if put componebt with h1, it will be h1 tag. It can change with p, h2,h3...
        // xs={12} means this Grid take full width of the page.
            <Grid xs={12}>
                <Typography 
                    component={'h1'} 
                    sx={{color: '#000000',
                        marginBottom: '40px',
                        textAlign: 'center',
                        fontSize: '30px',
                    }}
                >
                    User Form
                </Typography>
            </Grid>    
        }
        {// Use this Grid to create a form.
            <Grid item xs={12} sm={6} sx={{display:'flex', marginBottom: '20px'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id" 
                    sx={{
                        color:'#000000',
                        marginRight: '50px',
                        fontSize: '16px',
                        textAlign: 'center',
                        width:'100px',
                        display:'block',
                    }}
                >
                    ID
                </Typography>
                <input 
                    type="number"
                    id="id"
                    name="id"
                    sx={{width: '400px'}}
                    value={id}
                    // e declare a event. It ia a function.
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
        }

        <Grid item xs={12} sm={6} sx={{display:'flex', marginBottom: '20px'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id" 
                    sx={{
                        color:'#000000',
                        marginRight: '50px',
                        fontSize: '16px',
                        textAlign:'center',
                        width:'100px',
                        display:'block',
                    }}
                >
                    Name
                </Typography>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    sx={{width: '400px'}}
                    value={name}
                    // e declare a event. It ia a function.
                    onChange={e =>setName(e.target.value)}
                />
            </Grid>
            <Button
            
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft:'150px',
                    marginTop: '20px',
                    "&:hover":{
                        opacity:'0.7',
                        //never change Button color that added above
                        backgroundColor: '#00c6e6',
                    }
                }}>
                    Add

            </Button>
        

        </Grid>
    );

}

export default UserForm;