import React, { useState, useEffect } from 'react';
import "./todo.css";

const getLocalData = ( () =>
{
    const list = localStorage.getItem( 'mylist' );

    if ( list )
    {
        return JSON.parse( list );
    }
    else
    {
        return [];
    }
} );
const Practice = () =>
{
    useEffect( () =>
    {
        document.title = `Bibek`;
    } );

    const [ inputdata, setInputData ] = useState( "" );
    const [ items, setItems ] = useState( getLocalData() );
    const [ isEditItem, setIsEditItem ] = useState("");
    const [toggleButton,setToggleButton]=useState(false);

    const addItem = () => {
        if (!inputdata) {
          alert("Please enter a valid input.");
        } else if (isEditItem) {
          // if an item is being edited
          const updatedItems = items.map((curElem) => {
            if (curElem.id === isEditItem) {
              return { ...curElem, name: inputdata };
            }
            return curElem;
          });
          setItems(updatedItems);
          setInputData("");
          setIsEditItem("");
          setToggleButton(false);
        } else {
          // if a new item is being added
          const myNewInputData = {
            id: new Date().getTime().toString(),
            name: inputdata,
          };
          setItems([...items, myNewInputData]);
          setInputData("");
        }
      };
      

    //edit an item
    const editItem = ( index ) =>
    {
        const item_todo_edited = items.find( ( curElem ) =>
        {
            return curElem.id ==index;
        } );
        setInputData(item_todo_edited.name)
setIsEditItem(index);
setToggleButton(true);
    };

    //Detele an item
    const deleteItem = ( index ) =>
    {
        const updatedItems = items.filter( ( curElem ) =>
        {
            return curElem.id !== index;

        } );
        setItems( updatedItems );
    };


    //remove all item
    const RemoveAll = ( () =>
    {
        return setItems( [] );
    } );

    useEffect( () =>
    {
        localStorage.setItem( "mylist", JSON.stringify( items ) );
    },
        [ items ]
    );

    return (

        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='hello' />
                        <figcaption>Bibek subedi</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='enter here'
                            className='form-control'
                            value={ inputdata }
                            onChange={ ( ( e ) => setInputData( e.target.value ) ) }
                        />
                       {toggleButton ?
                       ( <i className="far fa-solid fa-edit add button"
                       onClick={ addItem }
                   ></i>) :  ( <i className="fa fa-solid fa-plus add button"
                   onClick={ addItem }
               ></i>)

                       }
                    </div>
                    <div className='showItems'>
                        {
                            items.map( ( curElem ) =>
                            {
                                return (

                                    <div className='eachItem' key={ curElem.id }>
                                        <h3>{ curElem.name }</h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-solid fa-edit add button"
                                            onClick={()=>
                                            editItem(curElem.id)}></i>
                                            <i className="far fa-solid fa-trash-alt add button"
                                                onClick={ () => deleteItem( curElem.id ) }
                                            ></i>
                                        </div>
                                    </div>


                                );
                            } ) }
                    </div>

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="hello world"
                            onClick={ RemoveAll }>
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

export default Practice;