import React from 'react';

class SortableContainer extends React.Component {
    render() {
        return <div draggable={this.props.draggable} onDragOver={this.props.onDragOver} onDragStart={this.props.onDragStart}>
            {this.props.children}
        </div>
    }
}

export default class Sortable extends React.Component {
    constructor(args) {
        super(args);
        this.state = { children: this.getChildren(args), dragging: null }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ children: this.getChildren(nextProps) });
    }
    handleMove(ev, child) {
        let {children, dragging} = this.state;
        var pos1 = children.indexOf(dragging);
        var pos2 = children.indexOf(child);

        if (pos1 === -1 || pos2 === -1) {
            ev.preventDefault();
            return false;
        }

        children.splice(pos1, 1);

        children = [].concat(
            children.slice(0, pos2),
            dragging,
            children.slice(pos2)
        );

        this.setState({children});
    }
    startMoving(ev, child) {
        let {children} = this.state;
        let dragging = child;

        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('element', dragging);

        this.setState({ children, dragging });
    }
    findDraggingElement(children, r) {
        return React.Children.map(children, child => {
            if (!child.props) {
                return child;
            }
            if (child.props['drag-element']) {
                r.hasCustomDrag = true;
                return React.cloneElement(child, {
                    draggable: true,
                    onDragStart: r.onDragStart,
                });
            }
            if (child.props.children) {
                return React.cloneElement(child, {
                    children: this.findDraggingElement(child.props.children, r)
                });
            }
            return child;
        });
    }
    getChildren(props) {
        return React.Children.toArray(props.children).map(child => {
            if (child instanceof SortableContainer) {
                return child;
            }

            let r  = {
                hasCustomDrag: false,
                onDragStart: ev => this.startMoving(ev, wrapper)
            };

            child = this.findDraggingElement(child, r)

            if (r.hasCustomDrag) {
                r.onDragStart = ev => {}
            }


            let wrapper = <SortableContainer 
                key={Math.random()}
                draggable={!r.hasCustomDrag}
                onDragOver={ ev => this.handleMove(ev, wrapper) }
                onDragStart={ r.onDragStart }
            >{child}</SortableContainer>
            return wrapper;
        });
    }
    render() {
        return <div onDragOver={e => e.preventDefault()} onDrop={ ev => {
            this.setState({ dragging: null });
            if (this.props.onChange) {
                this.props.onChange(this.state.children.map(c => c.props.children));
            }
        }}>
            {this.state.children}
        </div>;
    }
}

Sortable.propTypes = {
    onChange: React.PropTypes.func,
}
