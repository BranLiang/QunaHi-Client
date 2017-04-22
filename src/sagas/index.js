import signSaga from './signSaga';

export default function* rootSaga() {
  yield [
    signSaga(),
  ];
};
