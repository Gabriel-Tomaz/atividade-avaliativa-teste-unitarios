import { insetUser, usersAmount,deleteUser } from "./user";

describe("Inserir um usuário", () => {
    it("Inser user", () => {
        insetUser({name: "Gabriel", email: "gabriel@email.com"})

        expect(usersAmount()).toBe(1);
    });
});

describe("Deletar um usuário", () => {
    it("Delete user", () => {
        insetUser({name: "Gabriel", email: "gabriel@email.com"})
        deleteUser(0)

        expect(usersAmount()).toBe(0);
    });
});