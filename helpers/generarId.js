const generarId = () => {

    return Date.now().toString(23) + Math.random().toString(32).substring(2);

}

export default generarId;