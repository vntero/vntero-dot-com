import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core/'

function Unrelated() {
    return (
        <div className="unrelated">
            <div className="div-unrelated">
                <h1 style={{fontSize: 60}}>A compilation of what my eyes and ears capture when I'm not coding.</h1>
            </div>
            <div className="div-unrelated">
            <Grid style={{marginTop: 20}} container display='flex' spacing={2} direction="row" justifyContent="space-around">
                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 100  }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Photography
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Views and still life
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 150 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Philosophy
                        </Typography>
                        
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Allusion to Kierkegaard, <br /> 
                        Dostoyevski, Hesse, <br /> 
                        Beckett and many more
                        </Typography>
                    </CardContent>
                </Card> 

                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 100 }}>
                    <CardContent>
                        
                        <Typography variant="h5" component="div">
                        Blockchain
                        </Typography>
                       
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Bitcoin is freedom
                        </Typography>
                    </CardContent>
                </Card>
                
                <Card style={{margin: 10}} sx={{ minWidth: 200, maxHeight: 120 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        Books
                        </Typography>
                        
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Books on books <br /> on books on books
                        </Typography>
                    </CardContent>  
                </Card>
                
            </Grid>
            </div>
        </div>
        
    )
}

export default Unrelated
