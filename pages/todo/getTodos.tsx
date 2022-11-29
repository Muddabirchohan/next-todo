import React, { Component, useEffect, useState } from 'react'
import { useQuery, gql, useMutation, useLazyQuery  } from "@apollo/client";

const QUERY = gql`

  query GetQuery {
    getTodos
  }
`;

const queryEditTodo = gql`
  mutation DeleteTodo($input: Int!) {
  deleteTodos(index: $input) 
}`;




export default ({client}:any) =>   {



  const [todosData, setTodos] = useState([])


  // const { data, loading, error } = useQuery<any,any>(QUERY);
  const [  updateQuerys , { data, refetch, called }] = useLazyQuery<any,any>(QUERY);



  const [deleteTod] = useMutation(queryEditTodo);

  const updateQuery = () => {

    updateQuerys()

    
    // client.reFetchObservableQueries()
  }

  useEffect(()=>{
    
    updateQuery()

    // console.log("called",called)
    // if (called) {
    //   refetch();
    // }
    // else {
    //   updateQuery()
    // }

  },[data])




    return (
      <div>Todo List 
        {data?.getTodos.map((item:any,index: any) => {
          return(
            <>
              <p> {item} </p>
              <button onClick={async() => {
                // setIndex(index)
                await deleteTod({variables: {
                  input: index
                }})

                await refetch()



                }}>  edit </button>
            </>
          )
        })}
      </div>
    )
  
}
