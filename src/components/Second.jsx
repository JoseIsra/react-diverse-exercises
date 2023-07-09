import React from 'react';
import { ShareContext } from '../context/ShareProvider';

export class Second extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { share } = this.context;
    return (
      <section>
        <h1>The second component</h1>
        <div>
          <p>That content was: {share}</p>
        </div>
      </section>
    );
  }
}
Second.contextType = ShareContext;
