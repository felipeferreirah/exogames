
  import * as React from "react";
  import { withRouter } from "react-router";

  /**
  * Arquivo auxiliar para dar ScrollToTop depois que carregar o DOM.
  */

  export var ScrollToTop = withRouter(
    class ScrollToTopWithoutRouter extends React.Component {
      componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
      }

      render(){
        return null;
      }
    }
  );
  export default ScrollToTop;
