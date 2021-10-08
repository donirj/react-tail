// useState

// Es un hook que me permite gestionar datos de manera local (es decir de este propio archivo y que no viene del exterior). 

// En artículos lo van a encontrar como "estado local" o "local state".
//ESTO ES LO PRIMERO, ACTIVAR EL USESTATE
import React, { useState } from 'react'

export default function Main() {

    // INICIALIZAR useState
    // 1. Variable con desestructuración de arreglos
    // 2. useState invocado y pasa como argumento el valor inicial de "DATA" en este caso. Como observación, pueden pasar cualquier tipo de dato (string, number, object, array, etc)

    // EJEMPLO:
    // const [frase, setFrase] = ["Hola mundo", () => { console.log("hola") }]
    // console.log(frase)
    // console.log(setFrase)

    // useState("hola mundo") => ["hola mundo", () => {}]
    //ESTO ES LO SEGUNDO, DESESTRUCTURAR EL USESTATE
    const [post, setPost] = useState({
        titulo: "",
        contenido: ""
    })


   //ESTO ES LO SEGUNDO, DESESTRUCTURAR EL USESTATE
   const [posts, setPosts] = useState([])

    //ESTO SERÍA LO QUINTO, PARA CONECTAR EL HANDLETITLE
    const handleTitle = (event) => {
        console.log(event.target.value)

        setPost({
            titulo: event.target.value,
            contenido: post.contenido
        })

    }
    //ESTO SERÍA LO QUINTO, PARA CONECTAR EL HANDLETITLE
    const handleContent = (event) => {
        console.log(event.target.value)

        setPost({
            titulo: post.titulo,
            contenido: event.target.value
        })

    }
    //ESTO SERÍA LO QUINTO, PARA CONECTAR EL HANDLETITLE
    const submitData = (event) => {

        event.preventDefault() // ESTE EVITA LA RECARGA DE PÁGINA

        setPosts([
            ...posts,
            post
        ])

    }

    // TRIGGERS - EVENTOS
    // 1. onClick
    // Cuando se atribuye a una etiqueta, tan pronto se de click, se ejecuta su callback.

    // 2. onChange
    // Usualmente se ejecuta con "inputs". Tan pronto haya un cambio en el input actual, se ejecuta su callback

    return (
        <>
            <div className="max-w-7xl mx-auto px-12 pt-12">

                <form>

                    <label for="email" class="block text-sm font-medium text-gray-700">Título</label>
                    <div class="mt-1">
                        <input 
                            type="text" 
                            name="titulo"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-6" 
                            placeholder="Escribe el título principal de la publicación..." 
                           //ESTO ES LO TERCERO, AGREGAR EL ONCHANGE Y REVISAR SI SIRVE EN LA TERMINAL DEL NAVEGADOR, despues le agregue el handletitle con los event
                            onChange={ (event) => { handleTitle(event) } }
                            />
                    </div>

                    <label for="email" class="block text-sm font-medium text-gray-700">Contenido</label>
                    <div class="mt-1">
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-6" placeholder="Escribe tu contenido..." 
                            //ESTO ES LO TERCERO, AGREGAR EL ONCHANGE Y REVISAR SI SIRVE EN LA TERMINAL DEL NAVEGADOR
                            onChange={ (event) => { handleContent(event) } }
                            />
                    </div>

                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        //ESTO ES LO TERCERO, AGREGAR EL ONCHANGE Y REVISAR SI SIRVE EN LA TERMINAL DEL NAVEGADOR, después agregue el submit data, y tengo que crear su funcion arriba
                        onClick={ (event) => { submitData(event) } }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                        </svg>
                        Crear publicación
                    </button>
                </form>

                
                <h1>Publicaciones</h1><br/>
                
                {

                    

                    posts.map((e, i) => {
                        return (
                            <div key={i}>
                                <h2>{e.titulo}</h2>
                                <p>{e.contenido}</p><br/>
                            </div>
                        )
                    })
                }
            
                {/* { data }

                <button 
                    className="mt-10 ml-10 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                    onClick={ () => { setData("Saludos Ironhack") } }
                
                >
                    Cambiar palabra
                </button> */}


            </div>
        </>
    )
}