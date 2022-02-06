import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Toaster extends Component {
    render () {
        const props = this.props;
        console.log({props});

        return ('helloooo');
    }
}

const GetToasterBySlug = gql`
  query GetToasterBySlug($slug: ID!) {
    toaster(id: $slug, idType: SLUG) {
      title
      toasterMeta {
        price
        watts
      }
    }
  }
`;

export default graphql(GetToasterBySlug, {
    options: (props) => {
        const slug = props.slug;
        return {
            variables: {
                slug
            }
        }
        /* return (
            console.log(props)  
        ) */
    }
})(Toaster);