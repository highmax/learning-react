import React from 'react';
import styles from './component.css';

class Component extends React.Component {

  render() {
    return <div className={styles.container}>
            <h1 className={styles.title}>
              Hello <span className={styles.name}>  {this.props.name}</span> !
            </h1>
        </div>
  }
}

//Default Props
Component.defaultProps = {
  name: "Dude"
}

//Props Types
Component.propTypes = {
  name: React.PropTypes.string
}

export default Component
