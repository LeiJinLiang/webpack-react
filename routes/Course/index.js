module.exports = {
    path: 'course/:courseId',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/components/List')
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Course'))
        })
    }

}
