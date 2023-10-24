async function dodaj(){
    await fetch(`${url}?`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })
}