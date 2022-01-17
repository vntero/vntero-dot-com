import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function Blockchain() {
    return (
        <div>
            <h1 className="yellow">... work in progress ...</h1>
            <h1>Bitcoin is freedom!</h1>

             <Box sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List><ListItem>Brain food:</ListItem></List>
                    </nav>
                    
                    <nav aria-label="secondary mailbox folders">
                        <List>
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
