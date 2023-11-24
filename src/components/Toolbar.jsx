import React from "react";

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="toolbar">
                {this.props.filters.map((el) => 
                    <button className={(el === this.props.selected) ? 'active' : ''} onClick={this.props.onSelectFilter}>
                        {el}
                    </button>
                )}
            </div>
        )
    }
}

export default Toolbar