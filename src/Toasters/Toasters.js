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
            
            
            return(
                <div>
                    {
                        data.toasters.edges.map((toaster, key) => {
                            return(
                                <div key={key}>
                                    <h2>{toaster.node.title}</h2>
                                    <Link to={`/toaster/${toaster.node.slug}`}>Learn more</Link>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    </Query>
)

export default Toasters;