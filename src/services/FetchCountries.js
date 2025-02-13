async function componentDidUpdate(prevProps, ) {
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
        this.setState({errorMessage: true})
      }
    }
  }