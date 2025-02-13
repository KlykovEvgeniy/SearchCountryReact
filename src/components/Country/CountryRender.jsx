import { Component } from 'react';
import shortid from 'shortid';

const BASE_URL = 'https://restcountries.com/v3.1/name';

export default class CounryRender extends Component {
  state = {
    countryName: [],
    isLoading: false,
    errorMessage: false
  };
  async componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name && this.props.name) {
      try {
        this.setState({ isLoading: true, errorMessage: false, countryName: [] });
        await fetch(`${BASE_URL}/${this.props.name}`)
          .then((resolve) => {
            return resolve.json();
          })
          .then((resolve) => {
            if (resolve.length > 1) {
              this.setState({ isLoading: false, errorMessage: true });
              return;
            } else if (resolve.length === 0) {
              this.setState({ countryName: [] });
              return;
            }
            this.setState({ countryName: resolve, isLoading: false });
          });
      } catch {
        this.setState({ errorMessage: true });
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <h1>Loading your country...</h1>}
        {this.state.errorMessage === true && <h1>We didnt found country name {this.props.name}</h1>}
        <div>
          {this.state.countryName.status === undefined && (
            <div>
              {this.state.countryName.map((item) => {
                return (
                  <div>
                    <h1>{item.name.common}</h1>
                    <p>Area: {item.area}km^2</p>
                    <p>Population: {item.population}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
