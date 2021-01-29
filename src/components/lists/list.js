import React from 'react';
import axios from 'axios'
import {
    // baseProd,
    base
}  from '../../components/const'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const api = `${base}/todov2/lists`

// const classes = useStyles();
const bull = <span>•</span>;

class RenderListTitle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        value: this.props.title,
        titles : ['Henry', 'Jane']
    }}

    getListTitlesAxios = async () => {
      console.log('Connected for reading list titles')
      const [listTitles] = await Promise.all([
          axios.get(api)
      ])
      const res = listTitles.data
      res.map(title =>
          this.state.titles.push(title[0].title) 
      )
      console.log(this.state.titles)   
      // console.log(this.props)    
      // console.log(<RenderListTitle title= {this.state.titles}/>)
  }

      componentDidMount = async () => {
        await this.getListTitlesAxios()
        // console.log(this.renderListTitle())
      }

    render() {
      return (
        <Card >
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
            Word of the Day {this.state.titles}
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography  color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      )
  }
}
export default RenderListTitle
