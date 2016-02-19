C.MainLayout = React.createClass({
    render() {
        return (
            <div><div>
                {this.props.header}

                {this.props.content}

                {this.props.footer}
            </div></div>
        )
    }
});
