const axios = require('axios')
const express = require('express')
const server = express()
const port = process.env.PORT || 3000
const returnedRepos = 5

server.get('/carousel', (req, res) => {
    axios({
        method: 'get',
        url: '/orgs/takenet/repos',
        baseURL: 'https://api.github.com/',
        params: {
            sort: 'created',
            direction: 'asc',
            per_page: '10'
        }
    })
        .then(response => {
             let CSRepos = response.data.filter(array => array.language === 'C#')
             const requiredRepos = CSRepos.slice(0,returnedRepos)
            res.send(requiredRepos)
        })
        .catch(error => {
            console.log(error)
        })
}
)

server.listen(port)