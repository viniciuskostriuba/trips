import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserve } from './actions';
import api from '../../../services/api';


function* addToReserve({ id }) {

    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );

    if(tripExists) {
        const amount = tripExists.amount + 1;
        yield put(updateAmountReserve(id, amount));
        console.log(tripExists)
        console.log("tripExists")
    } else {
        const response = yield call(api.get, `trips/${id}`);
        console.log(response)
        console.log("response")
        const data = {
            ...response.data,
            amount: 1,
        }
        console.log(data)
        console.log("data")
        yield put(addReserveSuccess(data))
    }

    const response = yield call(api.get, `trips/${id}`);

    yield put(addReserveSuccess(response.data));
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);