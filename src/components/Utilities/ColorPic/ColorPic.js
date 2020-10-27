import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';


export default class ColorPic extends React.Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onExpandEvent: PropTypes.func,
    onChange: PropTypes.func,
    currentState: PropTypes.object,
  };

  stopPropagation = (event) => {
    event.stopPropagation();
  };

  onChange = (color) => {
    const { onChange } = this.props;
    onChange('color', color.hex);
  }

  renderModal = () => {
    const { color } = this.props.currentState;
    return (
        <div
            onClick={this.stopPropagation}
        >
          <BlockPicker color={color} onChangeComplete={this.onChange} />
        </div>
    );
  };

  render() {
    const { expanded, onExpandEvent } = this.props;
    return (
        <div
            aria-haspopup="true"
            aria-expanded={expanded}
            aria-label="rdw-color-picker"
        >
          <div
              onClick={onExpandEvent}
          >
            <img height="20" width="20"
                src={require("./palette.svg")}
                alt=""
            />
          </div>
          {expanded ? this.renderModal() : undefined}
        </div>
    );
  }
}