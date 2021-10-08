// useState

// Es un hook que me permite gestionar datos de manera local (es decir de este propio archivo y que no viene del exterior). 

// En artículos lo van a encontrar como "estado local" o "local state".
//ESTO ES LO PRIMERO, ACTIVAR EL USESTATE
import React, { useState } from 'react'

export default function Main() {

    // 1. ESTADOS LOCALES

    // La publicación que está en el formulario
        //ESTO ES LO SEGUNDO, DESESTRUCTURAR EL USESTATE
    const [post, setPost] = useState({
        titulo: "",
        contenido: ""
    })

    // Un listado de todas las publicaciones que se han generado desde el formulario ( Un arreglo)
        //ESTO ES LO SEGUNDO, DESESTRUCTURAR EL USESTATE
    const [list, setList] = useState([{
        titulo: "un libro",
        contenido: "un contenido"
    }])

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
                        />
                    </div>

                    <label for="email" class="block text-sm font-medium text-gray-700">Contenido</label>
                    <div class="mt-1">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-6" placeholder="Escribe tu contenido..."

                        />
                    </div>

                    <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                        </svg>
                        Crear publicación
                    </button>
                </form>


                <h1 class="text-4xl font-extrabold text-gray-900 mt-12 sm:text-5xl sm:tracking-tight lg:text-6xl">Publicaciones</h1>

                <ul role="list" class="divide-y divide-gray-200 mt-12">

                    {

                        // CONDICIONALES
                        // if(list.length === 0){
                        //    return " Aún no tienes    publiaciones"                           
                        // } else {
                        //    return <li>...</li>
                        //}



                        list.length === 0 ?
                            <p>Aún no tienes publicaciones.</p>
                            :
                            list.map(e => {
                                return (
                                <>
                                    <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                        <div class="flex justify-between space-x-3">
                                            <div class="min-w-0 flex-1">
                                                <a href="#" class="block focus:outline-none">
                                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                                    <p class="text-sm font-medium text-gray-900 truncate">{e.titulo}</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            <p class="line-clamp-2 text-sm text-gray-600">
                                                {e.contenido}
                                            </p>
                                        </div>
                                    </li>
                                </>
                            )
                        })


                    }




                </ul>
            </div>
        </>
    )
}