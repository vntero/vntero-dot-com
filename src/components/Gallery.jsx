import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
      <p>Galaxy S10 / iPhone 11</p>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/photos/vulva.jpg',
    title: 'vulva',
  },
  {
    img: '/photos/swiss.jpg',
    title: 'swiss',
  },
  {
    img: '/photos/seealpsee.jpg',
    title: 'seealpsee',
  },
  {
    img: '/photos/panda.jpg',
    title: 'panda',
  },
  {
    img: '/photos/locarno.jpg',
    title: 'locarno',
  },
  {
    img: '/photos/law.jpg',
    title: 'law',
  },
  {
    img: '/photos/electrico.jpg',
    title: 'electrico',
  },
  {
    img: '/photos/albufeira.jpg',
    title: 'albufeira',
  },
  {
    img: '/photos/capuccino.jpg',
    title: 'capuccino',
  },
  {
    img: '/photos/champalimaud.jpg',
    title: 'champalimaud',
  },
  {
    img: '/photos/emosson.jpg',
    title: 'emosson',
  },
  {
    img: '/photos/gato.jpg',
    title: 'gato',
  },
  {
    img: '/photos/hippie.jpg',
    title: 'hippie',
  },
  {
    img: '/photos/ponte.jpg',
    title: 'ponte',
  }
];