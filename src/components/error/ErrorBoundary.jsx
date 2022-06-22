import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      messageError: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      messageError: error.message,
    };
  }

  componentDidCatch(error) {
    console.log("component did catch", error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Tiene error: {this.state.messageError}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
