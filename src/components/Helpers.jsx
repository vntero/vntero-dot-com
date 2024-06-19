import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const quotes = [
  '"We must cultivate our garden." - Voltaire',
  '"We realize it best when we talk with an unliterary friend. He may be full of goodness and good sense but he inhabits a tiny world. In it, we should be suffocated. The man who is contented to be only himself, and therefore less a self, is in prison." - C.S. Lewis',
  '"My own eyes are not enough for me, I will see through those of others. Reality, even seen through the eyes of many, is not enough. I will see what others have invented." - C.S. Lewis',
  '"Repetition and recollection are the same movement, except in opposite directions, for what is recollected has been, is repeated backward, whereas genuine repetition is recollected forward." - Kierkegaard'
]

export const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}))