export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (nam) => {
    if(!nam) return "";

    const words = nam.split(" ");
    let initials = "";

    for(let i=0; i<Math.min(words.lenght, 2); i++){
        initials += words[i][0];
    }

    return initials.toUpperCase();

}
