export function logout(onSuccess) {
    sessionStorage.clear();
    onSuccess();
}