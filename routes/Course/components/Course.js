import React, { Component } from 'react'

class Course extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <h2>course...</h2>
                {this.props.children}
            </section>
        )
    }
}

module.exports = Course