 const url = 'http://localhost/wordpress/wp-json/wc/v3/orders'
 const body = document.querySelector('body')
 const left = document.getElementById('left')
 var orders
 async function f(){

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        } 
    })
    orders = await data.json()
    console.log(orders)


    for(let i in orders){
        const ten = orders[i]
        //wyswietlanie divow zamowien
        const div = document.createElement('div')
        div.classList.add('divs')
        div.setAttribute('id','ordersDiv')

        //wewn diva
        const kto = document.createElement('h3')
        kto.setAttribute('id', 'kto')

        const co = document.createElement('h3')
        co.setAttribute('id', 'co')

        const ile = document.createElement('h3')
        ile.setAttribute('id', 'ile')

        const status = document.createElement('h3')
        status.setAttribute('id', 'status')

        const completed = document.createElement('button')
        completed.setAttribute('onclick', 'completed()')
        completed.setAttribute('class', 'z')
        completed.innerHTML = 'z'
        
        const processing= document.createElement('button')
        processing.innerHTML = 'nz'
        processing.setAttribute('onclick', 'processing()')
        processing.setAttribute('class', 'z')

        //zawartosc

        kto.innerHTML = ten.billing.first_name
        co.innerHTML = ten.id
        ile.innerHTML = ten.line_items.quantity
        status.innerHTML = ten.status

        



        //append
        div.appendChild(kto)
        div.appendChild(co)
        div.appendChild(ile)
        div.appendChild(status)
        div.appendChild(completed)
        div.appendChild(processing)
        left.appendChild(div)
       
    }
 }

 f()

async function completed(){
    await fetch(`http://localhost/wordpress/wp-json/wc/v3/orders/36?status=completed`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })
    
}

async function processing(){
    await fetch(`http://localhost/wordpress/wp-json/wc/v3/orders/36?status=processing`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })
    
}