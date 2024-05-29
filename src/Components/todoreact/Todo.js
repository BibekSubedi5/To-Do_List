import React, { useState } from 'react';
import "./todo.css";



const Todo = () =>
{
    const [ inputdata, setInputData ] = useState( "" );
    const [ items, setItems ] = useState( [] );
    const addItem = () =>
    {
        if ( !inputdata )
        {
            alert( "bibek is awsome" );
        }
        else
        {
            setItems( [ ...items, inputdata ] );
            setInputData( "" );
        }
    };
    return (

        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='todologo' />
                        <figcaption>Add your list here </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"
                            placeholder=" Add items"
                            className='form-control'
                            value={ inputdata }
                            onChange={ ( ( e ) => setInputData( e.target.value ) ) } />
                        <i className="fa fa-solid fa-plus add button"
                            onClick={ addItem }
                        ></i>
                    </div>
                    { items.map( ( curElem, index ) =>
                    {
                        return (
                            <div className='showItems'>
                                <div className='eachItem'>
                                    <h3>{ curElem }</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-solid fa-edit add button"></i>
                                        <i className="far fa-solid fa-trash-alt add button"></i>
                                    </div>
                                </div>
                            </div>
                        );
                    } )


                    }

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="hello world">
                            <span>
                                Check list
                            </span>

                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Todo;