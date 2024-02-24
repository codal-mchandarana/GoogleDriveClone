const check = (vari: string) => {

    const extension: string = vari.split('.')[1];

    if (extension === "jpg" || extension === "png" || extension === "jpeg")
        return 1
    else
        return 2
}

export default check;