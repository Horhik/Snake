/* eslint-disable no-unused-vars */
// FE - Fast Eventlistener
const $ = function (event, func) {
    document.addEventListener('keydown', function (e) {
        const evt =
        event === 'keyUp' ? 'ArrowUp'
        : event === 'keyDown' ? 'ArrowDown'
        : event === 'keyLeft' ? 'ArrowLeft'
        : event === 'keyRight' ? 'ArrowRight'
        : undefined
        if (e.code === evt) {
            func()
        }
    })
}
