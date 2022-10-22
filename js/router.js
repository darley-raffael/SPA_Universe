export class Router {
    routes = {}
    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault() // Não vai carregar a página quando o evento for acionado
        window.history.pushState({},"", event.target.href)

        this.handle()
    }


    handle(){
        const { pathname } = location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html =>{
            document.querySelector('#app').innerHTML = html
        })
    }
}

