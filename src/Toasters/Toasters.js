import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Toasters = () => (
    <Query query={gql`
      {
        toasters {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
    }>

    {
        ({ loading, error, data }) => {
            if ( loading ) {
                return (<h1>Loading...</h1>);
            }
            
            console.log(data);
            return('Hello')
        }
    }

    </Query>
)

export default Toasters;