import {useState, useEffect} from 'react'

const sayHello = () => {
    const[data, setData] = useState({name:''})
    useEffect(() => {
        fetch('api/sayHello')
        .then((res) => res.json())
        .then((name) => {
            setData(name)
        })
    }, [])
    return <div>hello {data.name}</div>
}

export default sayHello