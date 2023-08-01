import messageRouter from "../components/messages/messageRouter.js";

const routes = function (server) {
    server.use('/message', messageRouter)
}

export default routes;