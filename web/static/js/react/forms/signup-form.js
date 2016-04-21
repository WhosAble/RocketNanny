var SignupForm = React.createClass({
  propTypes: {
    onSignup: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      errors: []
    };
  },

  signup() {
    var self = this;

    $.ajax({
      method: "POST",
      url: window.API_URL + "/signup",
      data: {email: this.state.email, password: this.state.password}
    }).done(function(response) {
      if(response["status"] == "success") {
        self.props.onSignup(response);
      }
    }).error(function() {
    });
  },
  render() {
    return(
      <div onClick={ this.signup }>
        Form placeholder
        <div>{this.state.email} {this.state.password}</div>
      </div>
    );
  }
});

module.exports = SignupForm;