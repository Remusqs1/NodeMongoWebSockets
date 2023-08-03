import messageRouter from "../components/messages/messageRouter.js";
import userRouter from "../components/users/userRouter.js";
import chatRouter from "../components/chat/chatRouter.js";

const routes = function (server) {
    server.use('/message', messageRouter)
    server.use('/user', userRouter)
    server.use('/chat', chatRouter)
}

export default routes;