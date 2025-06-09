export const getLocalStorage = (name: string) => {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            localStorage.setItem(name, JSON.stringify([]));
            return [];
        }
    } else {
        return [];
    }
};
