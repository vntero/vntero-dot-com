import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Blockchain() {
    return (
        <div className='div-body'>
            <div>
                <h2>
                The "maxis" will say tell us that <span className="orange">Bitcoin is freedom</span> but that statement by itself doesn't mean anything. 
                Nothing like educating ourselves to have our own take on the not-so-new and exciting cryptoverse.
                </h2>
            </div>
            

             <Box sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List><ListItem>Brain food:</ListItem></List>
                    </nav>
                    
                    <nav aria-label="secondary mailbox folders">
                        <List>
                        
                        <ListItem disablePadding>
                        <ListItemButton>
                            <a href='https://bitcoin.org/bitcoin.pdf' target="_blank" rel="noreferrer"><ListItemText primary="• The pioneer cryptocurrency - What was Satoshi's vision?"/></a>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                        <ListItemButton>
                            <a href='https://ethereum.org/en/whitepaper/' target="_blank" rel="noreferrer"><ListItemText primary="• 2nd gen crypto - A dive into Ethereum's concept"/></a>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                        <ListItemButton>
                            <a href='https://youtu.be/Ja9D0kpksxw' target="_blank" rel="noreferrer"><ListItemText primary="• The perfect blockchain? - An overview of Cardano"/></a>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <a href='https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application' target="_blank" rel="noreferrer"><ListItemText primary="• The Architecture of a Web 3.0 application"/></a>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                        <ListItemButton>
                            <a href='https://moxie.org/2022/01/07/web3-first-impressions.html' target="_blank" rel="noreferrer"><ListItemText primary="• Moxie Marlinspike's first impressions of Web 3.0"/></a>
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
            </Box>

        </div>
    )
}

export default Blockchain
