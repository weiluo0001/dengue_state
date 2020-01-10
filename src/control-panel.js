import React, {PureComponent} from 'react';

const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const {settings} = this.props;

    return (
      <Container>
        <h3>Dengue Incidence in Brazil</h3>
        <p>Map showing dengue incidence by state in year <b>{settings.year}</b>.
        Hover over a state to see details.</p>
        <hr />

        <div key={name} className="input">
          <input type="range" value={settings.year}
            min={2010} max={2015} step={1} className="slider"
            onChange={evt => this.props.onChange('year', evt.target.value)} />
            <div className="sliderticks">
              <p>2010</p>
              <p>2011</p>
              <p>2012</p>
              <p>2013</p>
              <p>2014</p>
              <p>2015</p>
            </div>
        </div>
      </Container>
    );
  }
}
