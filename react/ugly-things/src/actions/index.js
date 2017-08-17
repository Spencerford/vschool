export function genUgly(ugly){
    return {
        type: "MAKE_UGLY",
        ugly
    }
}

export function genDelete(index){
    return {
        type: "GEN_DELETE",
        index
    }
}

export function update(post, index){
    console.log("i am getting called")
    return {
        type: "GEN_UPDATE",
        post,
        index
    }
}