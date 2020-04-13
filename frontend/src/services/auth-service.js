module.exports = {
    isLogedIn: function() {
        return localStorage.userId !== undefined
    }
}