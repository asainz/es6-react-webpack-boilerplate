import {
    
} from 'actions/action-types';
import {merge} from 'lodash/object';

export default function(state = {}, action = {}){
    return merge({}, state, {});
}