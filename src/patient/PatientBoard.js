import React, {Component} from 'react';
import { Header, Menu, Container, Label, Tab, Icon } from 'semantic-ui-react'
import DemoCalendar from './../components/DemoCalendar.js'
import DemoChatsGroup from './../components/DemoChatsGroup.js'
import PatientToDo from './PatientToDo.js'

const BoardPanes = [
  {
    menuItem: (
      <Menu.Item key='profile' icon='id card'>
          <Icon size='large' name='id card' />
          Profile
      </Menu.Item>
    ),
    render: () => <Tab.Pane> Placeholder for Profile component</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='todo' icon='clipboard outline'>
          <Icon size='large' name='clipboard outline' />
          <Label color='teal'>{ Math.round(Math.random()*10) }</Label>
          Actions
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <PatientToDo />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key='calendar' icon='calendar alternate outline'>
          <Icon size='large' name='calendar alternate outline' />
          Calendar
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <DemoCalendar />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key='chats' position='right' icon='wechat'>
          <Icon size='large' name='wechat' />
          <Label color='teal'>{ Math.round(Math.random()*10) }</Label>
          Messenger
      </Menu.Item>
    ),
    render: () => <Tab.Pane><DemoChatsGroup/></Tab.Pane>,
  },
]


class PatientBoard extends Component {
  state = { activeItem: 'ToDo' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    //const user = AccountAPI.get( this.props.match.params.userID );
    //const { activeItem } = this.state
    return (
      <Container  style={{  marginTop: '5em' }}>
          <Header as='h3' >
            Welcome to Patient's Board
          </Header>
          <Tab panes={BoardPanes} menu={{ fluid: true, vertical: true, tabular: true, defaultActiveIndex: 2 }} />
      </Container>
    );
  }

}

export default PatientBoard;
