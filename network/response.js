class Response {
    success(req, res, message, status) {
        res.status(status || 200).send({
            'error': '',
            'body': message
        })
    }

    error(req, res, message, status, log) {
        res.status(status || 500).send({
            'error': message,
            'body': ''
        })

        if (log) console.log(log);
    }
}

export { Response }