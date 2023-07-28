import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'inherit',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    fontSize: '1rem',
  },
  infoCard: {
    display: 'flex', height: '55vh', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0,
  },
});
