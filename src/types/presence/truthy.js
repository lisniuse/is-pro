import isFalsy from './falsy';
import not from '../../core/not';

// is a given value truthy?
const isTruthy = not(isFalsy);

export default isTruthy;
