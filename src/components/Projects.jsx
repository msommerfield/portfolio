import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import styled from 'styled-components'

const Technologies = styled.div`
    color: white;
    /* margin-top: 90px;
    font-size: 40px;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Berkshire Swash', cursive;
    p{
        font-family: 'Capriola', sans-serif;
        font-size: 25px;
    }  */
    `

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/68DGBmQ.png) center / cover'}} >Vanilla JS Project #1</CardTitle>
            <CardText>
            HTML5, CSS3, Javascript, jQuery
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/msommerfield/Jeopardy.github.io" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
              {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/yHu9OFT.png) center / cover'}} >Project #2</CardTitle>
            <CardText>
            MongoDB, Express, Node, Handlebars
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/msommerfield/Hard-Wax-Records" rel="noopener noreferrer" target="_blank">GitHub</Button>

             
              <Button colored href="https://damp-meadow-81873.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
                {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'whitesmoke', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Project #3</CardTitle>
            <CardText>
            MongoDB, Express, React, Node 
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/msommerfield/Wafflemania" rel="noopener noreferrer" target="_blank">GitHub</Button>
               
                <Button colored href="https://wafflemania.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
             {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Project #4</CardTitle>
            <CardText>
            SQL, Django, React, Node
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/msommerfield/Dino-Rama" rel="noopener noreferrer" target="_blank">GitHub</Button>
            
              <Button colored href="https://dinosaurzz.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Vanilla Javascript</Tab>
          <Tab>MEHN</Tab>
          <Tab>MERN</Tab>
          <Tab>React and Django</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
