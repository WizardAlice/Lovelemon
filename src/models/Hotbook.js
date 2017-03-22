import { getnews } from '../services/library'
import { parse } from 'qs'
import dva from 'dva';

export default {
  namespace: 'hotbook',
  state: {
    data:[],
    loading:false,
  },
  reducers: {
    'showLoading'(state) {
      return {...state, loading:true};
    },
    'add'(state, { payload: id }) {
      console.log(111)
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *'addRemote'({ payload }, { put, call }) {
      const {data} = yield call(getnews, "book")
      if(data){
        yield put({ 
          type: 'add',
          payload: data 
        })
      }
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen(({ pathname }) => {
  //       if (pathname === '/') {
  //         dispatch({
  //           type: 'users/fetch',
  //         });
  //       }
  //     });
  //   },
  // },
}