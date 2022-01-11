import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core/'
import { Link } from "react-router-dom"

function Unrelated() {
    return (
        <>
        <h1 className='pink'>This special page is under construction...</h1>
        
        <div className="unrelated">
            <div className="div-unrelated">
                <h1>A compilation of what my <span className='blue'>eyes</span> and <span className='green'>ears</span> capture when I'm not coding.</h1>
            </div>
            <div className="div-unrelated">
            <Grid style={{marginTop: 20}} container display='flex' spacing={2} direction="row" justifyContent="space-around">
            
                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 100  }}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/gallery">
                        <CardContent>
                            <Typography variant="h5" component="div">Photography</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">Views and Still Life</Typography>
                        </CardContent>
                    </Link>
                </Card>
            

                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 150 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">Philosophy</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Kierkegaard, Hesse, <br /> 
                        Beckett, Dostoevsky<br /> 
                        and many more
                        </Typography>
                    </CardContent>
                </Card> 

                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 150 }}>
                    <CardContent>
                        
                        <Typography variant="h5" component="div">
                        Blockchain
                        </Typography>
                       
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Bitcoin, Smart Contracts, DeFi and Web3
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            </div>
        </div>
        </>
    )
}

export default Unrelated
