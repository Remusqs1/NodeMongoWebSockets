const list = []

function addMessage(message) {
    list.push(message)
}

function getMessages() {
    return list;
}

export  { addMessage as add, getMessages as getAll }