import React, {PureComponent} from 'react';
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import Section from '@trendmicro/react-dropdown';
import ReactDOM from 'react-dom';

export default class FilterTable extends PureComponent{
    state = {
      selectedCount: 0
    };

    actions = {
        handleClick: (event) => {
            event.stopPropagation();
        },
        handleChange: (event) => {
            const el = ReactDOM.findDOMNode(this.dropdownMenu);
            const selectedCount = el.querySelectorAll('[type="checkbox"]:checked').length;
            this.setState({ selectedCount: selectedCount });
        }
    };

    dropdownMenu = null;

    render() {
        return (
            <Section className="row-md-5 row-xl-5">
                <div className="categoryButton">
                    <h2>Shop by</h2>
                    <Dropdown>
                        <Dropdown.Toggle title={`Category (${this.state.selectedCount})`} />
                        <Dropdown.Menu
                            ref={node => {
                                this.dropdownMenu = node;
                            }}
                        >
                            <MenuItem eventKey={1}>
                                <input
                                    type="checkbox"
                                    name="menuitem-1"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Meat
                            </MenuItem>
                            <MenuItem eventKey={2}>
                                <input
                                    type="checkbox"
                                    name="menuitem-2"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Dairy
                            </MenuItem>
                            <MenuItem eventKey={3}>
                                <input
                                    type="checkbox"
                                    name="menuitem-3"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Vegetable
                            </MenuItem>
                            <MenuItem eventKey={4}>
                                <input
                                    type="checkbox"
                                    name="menuitem-4"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Fruit
                            </MenuItem>
                            <MenuItem eventKey={5}>
                                <input
                                    type="checkbox"
                                    name="menuitem-5"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Baked Goods
                            </MenuItem>
                            <MenuItem eventKey={6}>
                                <input
                                    type="checkbox"
                                    name="menuitem-6"
                                    style={{ marginRight: 5 }}
                                    onChange={this.actions.handleChange}
                                    onClick={event => event.stopPropagation()}
                                />
                                Frozen/Canned Goods
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Section>
        );
    }
}
