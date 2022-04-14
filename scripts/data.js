


export async function getData(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)

    return data
}

