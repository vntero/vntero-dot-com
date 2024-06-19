import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const quotes = [
  '"We must cultivate our garden." - Voltaire',
  '"We realize it best when we talk with an unliterary friend. He may be full of goodness and good sense but he inhabits a tiny world. In it, we should be suffocated. The man who is contented to be only himself, and therefore less a self, is in prison." - C.S. Lewis',
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
  '"... the reason Emma Bovary grew so dissatisfied, unfairly so, with marriage – and therefore embarked on her disastrous affairs – was because of the books she had read." - Flaubert'
]

export const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}))