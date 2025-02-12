import { Component } from 'react';
import CountryForm from './Country/CountryForm';
import Title from './Title/Title';
import CounryRender from './Country/CountryRender';
import '../index.css';

export default class App extends Component {
  state = {
    countryName: null,
    isRender: false,
  };
  handleTakeSubmit = (counrtyName) => {
    this.setState({ countryName: counrtyName.value.trim() });
  };



  render() {

    return (
        
      <div>
        <Title title={'Seacrh Counry App'} />
        <CountryForm submit={this.handleTakeSubmit} />
        <CounryRender name={this.state.countryName} />
      </div>
    );
  }
}
