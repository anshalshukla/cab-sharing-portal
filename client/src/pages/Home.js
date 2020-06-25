import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const Home = props => {
    const ALL_USERS_TEST = gql`
    query myQuery {
        all_users {
            _id
            name
            email
        }
    }
`

    const USER_TEST = gql`
            query myQuery2($_id: String!) {
                user(_id: $_id ) {
                    _id
                    name
                    email
                }
        }
        `


    const { data, loading, error } = useQuery(USER_TEST, {
        variables : {
            _id : "5eec6de92d89512a923c8827"
        }
    })
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>NOT FOUND</p>

    console.log(data)

    return (
        <div>HOME</div>
    )
}

export default Home