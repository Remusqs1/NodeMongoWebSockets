class Response {
    success(req, res, message) {
        res.send({
            'error': '',
            'body': message
        })
    }

    error(req, res) {
        res.send("Error Answer")
    }
}

export { Response }