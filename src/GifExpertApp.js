import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <div className="cont-img">
                <img className="logo" src="./logoPageTransparent.png" alt="" />
            </div>
            <h1>Busca tu Gif</h1>
            <AddCategory setCategories={ setCategories } />

            <ol className="ol">
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
