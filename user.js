const users = [];

export const insetUser = data => {
    users.push(data);
}

export const usersAmount = () => {
    return users.length;
}

export const deleteUser = user => {
    users.splice(user);
}