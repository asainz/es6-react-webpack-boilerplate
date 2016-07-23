import {
    SEARCH_BOX_POST_QUERY,
    SEARCH_BOX_POST_QUERY_SUCCESS,
    SEARCH_BOX_POST_QUERY_FAILURE
} from 'actions/action-types';
import {merge} from 'lodash/object';

export default function(state = {}, action = {}){
    switch( action.type ){
        case SEARCH_BOX_POST_QUERY: 
            return merge({}, state, {
                query: action.query
            });

        case SEARCH_BOX_POST_QUERY_SUCCESS: 
            return merge({}, state, {
                results: action.data
            });

        case SEARCH_BOX_POST_QUERY_FAILURE: 
            return merge({}, state, {
                error: action.error.message
            });
    }

    return state;
}