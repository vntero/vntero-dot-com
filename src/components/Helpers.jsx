import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Switch } from '@mui/material'

export const quotes = [
  '"We realize it best when we talk with an unliterary friend. He may be full of goodness and good sense but he inhabits a tiny world. In it, we should be suffocated. The man who is contented to be only himself, and therefore less a self, is in prison." - C.S. Lewis',
  '"We must cultivate our garden." - Voltaire',
  '"My own eyes are not enough for me, I will see through those of others. Reality, even seen through the eyes of many, is not enough. I will see what others have invented." - C.S. Lewis',
  '"Repetition and recollection are the same movement, except in opposite directions, for what is recollected has been, is repeated backward, whereas genuine repetition is recollected forward." - Kierkegaard',
  '"I suffer from life and from other people. I cant look at reality face to face. Even the sun discourages and depresses me. Only at night and all alone, withdrawn, forgotten and lost, with no connection to anything real or useful — only then do I find myself and feel comforted." - Pessoa',
  '"I am nothing. I will never be anything. I could not want to be something. Apart from that, I have in me all the dreams in the world." - Pessoa',
  '"There never was a more affectionate or tender soul than mine, a soul more filled with kindness, with compassion, with all that is tenderness and love. Yet no soul is as solitary as mine - solitary, mark you, not due to external circumstances but to internal ones." - Pessoa',
  '"If one religion only were allowed in England, the Government would very possibly become arbitrary; if there were but two, the people would cut one another’s throats; but as there are such a multitude, they all live happy and in peace." - Voltaire',
  '"Take a view of the Royal Exchange in London, a place more venerable than many courts of justice, where the representatives of all nations meet for the benefit of mankind.  There the Jew, the Mahometan, and the Christian transact together, as though they all professed the same religion, and give the name of infidel to none but bankrupts. There thee Presbyterian confides in the Anabaptist, and the Churchman depends on the Quaker’s word.  At the breaking up of this pacific and free assembly, some withdraw to the synagogue, and others to take a glass." - Voltaire',
  '"Opinion rules the world, but in the long run it is the philosophers who shape this opinion." - Voltaire',
  '"If God had not existed, it would have been necessary to invent him." - Voltaire',
  '"When I was very young and in the cave of Trophonius I forgot to laugh. Then, when I got older, when I opened my eyes and saw the real world, I began to laugh and I haven’t stopped since. I saw that the meaning of life was to get a livelihood, that the goal of life was to be a High Court judge, that the bright joy of love was to marry a well-off girl, that the blessing of friendship was to help each other out of a financial tight spot, that wisdom was what the majority said it was, that passion was to give a speech, that courage was to risk being fined 10 rix-dollars, that cordiality was to say ‘You’re welcome’ after a meal, and that the fear of God was to go to communion once a year. That’s what I saw. And I laughed." - Kiekegaard',
  '"... the reason Emma Bovary grew so dissatisfied, unfairly so, with marriage – and therefore embarked on her disastrous affairs – was because of the books she had read." - Flaubert',
  '"What stops me from taking myself seriously, even though I’m essentially a serious person, is that I find myself extremely ridiculous, not the kind of small-scale ridiculousness of slapstick comedy, but rather a ridiculousness that seems intrinsic to human life and manifests itself in the simplest actions and most ordinary gestures. For example, I can never shave without starting to laugh, it seems so idiotic. All this is very difficult to explain..." - Flaubert',
  '"I’m no more modern than Ancient, no more French than Chinese, and the idea of a native country, that is to say, the imperative to live on one bit of ground marked red or blue on the map and to hate the other bits in green or black has always seemed to me narrow-minded, blinkered and profoundly stupid. I am a soul brother to everything that lives, to the giraffe and to the crocodile as much as to man." - Flaubert',
]

export const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}))

export const OvalPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  width: 165,
  height: 60,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
}))

export const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  '& li': {
    margin: `0 ${theme.spacing(1)}px`,
  },
}))

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))
